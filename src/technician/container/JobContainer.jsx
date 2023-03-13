import { useEffect, useState } from 'react';
import { View, Text, StyleSheet, Image, Button,ScrollView,FlatList, TouchableOpacity } from 'react-native';
import Moment from 'moment';
import { useNavigation, useRoute } from '@react-navigation/native';
import { getJobById } from '../../../services/api';

const JobContainer = ({ job, refreshData }) => {

  const [currentIndex, setCurrentIndex] = useState(0);
  
  const navigation = useNavigation();
  const [post, setPost] = useState(null);
  const { params } = useRoute();
  const { id,tech_id } = params;

  console.log('in container',tech_id)
  useEffect(() => {
    // fetch(`http://localhost:5001/api/v1/jobs/${id}`)
    //   .then((resp) => resp.json())
    //   .then((json) => setPost(json))
    //   .catch((error) => console.error(error));
    const see = async () => {
      const json = await getJobById(id)
      setPost(json)
    }
    see()
  }, [id]);

  const handleSendOffer = () => {
    navigation.navigate('SendOffer', { jobId: post._id,tech_id:tech_id });
  };

  if (!post) {
    return <Text>Loading...</Text>;
  }

  return (
    <View style={styles.container}>
      <Text style={styles.postTitle}>{post.title}</Text>
      <ScrollView horizontal={true} style={styles.imageCarousel}>
        {post.images.map((image, index) => (
          <Image key={index} source={{ uri: image }} style={styles.image} />
        ))}
      </ScrollView>
      <View style={styles.postDetails}>
        <Text style={styles.postDescription}>{post.description}</Text>
        <Text style={styles.postDescription}>Posted: {Moment(post.posted_date).format('d/MM/YYYY')}</Text>
        <Text style={styles.postDescription}>Prefered Start: {Moment(post.prefer_start_date).format('d/MM/YYYY')}</Text>
      </View>
      <TouchableOpacity style={styles.sendOfferButton} onPress={handleSendOffer}>
        <Text style={styles.sendOfferButtonText}>Send a Quote</Text>
      </TouchableOpacity>
      {/* <Button title="Go back" onPress={() => navigation.goBack()} /> */}
    </View>
  );
  
  
};

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    backgroundColor: '#F9F9F9',
    padding: 30,
    alignItems: 'center',
  },
  postTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    marginTop: 10,
    marginBottom: 10,
    width:"100%",
    alignItems: 'flex-start',
    
  },
  imageCarousel: {
    borderRadius: 10,
    marginTop: 10,
    marginBottom: 10,
  },
  image: {
    width: 150,
    height: 150,
    marginRight: 10,
  },
  postDetails: {
    width: '100%',
    alignItems: 'flex-start',
    marginBottom: 10,
  },
  postDescription: {
    fontSize: 18,
    marginBottom: 10,
  },
  sendOfferButton: {
    backgroundColor: '#4CAF50',
    paddingVertical: 15,
    paddingHorizontal: 30,
    // borderRadius: 30,
    marginTop: 10,
    marginBottom: 20,
  },
  sendOfferButtonText: {
    color: '#FFFFFF',
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});
export default JobContainer;
