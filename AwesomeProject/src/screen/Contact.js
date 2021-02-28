import React from 'react';
import {StyleSheet,View,Text,Image} from 'react-native';
import {Button} from 'native-base';
import { ScrollView } from 'react-native-gesture-handler';


function Contact(props){
    return(
      <ScrollView>
      <View style={styles.views}>
        <Image style={styles.img} source={require('../../Images/logo.png')}/>
        <Text style={{textAlign:'center',fontSize:25,fontWeight:'bold',marginTop:30}}>Contact Details</Text>
        <Text style={styles.txt}>Address: 4th Street ABC Road Karachi</Text>
        <Text style={styles.txt}>Contact no: 0000-1234567</Text>
        <Text style={styles.txt}>Email:xyz@gmail.com</Text>
      </View>
      <View style={{flexDirection:'row',marginTop:50,backgroundColor:'blue',height:60,justifyContent:'space-evenly'}}>
      <Button onPress={()=>props.navigation.navigate('HomePage')}style={{backgroundColor:'blue',alignSelf:'center'}}>
          <Image style={{width:30 , height:30,backgroundColor:'white'}} source={require('../../Images/homeicon.png')}/>
      </Button>
      <Button onPress={()=>props.navigation.navigate('About')} style={{backgroundColor:'blue',alignSelf:'center'}}>
          <Image style={{width:30 , height:30}} source={require('../../Images/aboutus.png')}/>
      </Button>
      <Button onPress={()=>props.navigation.navigate('Contact')} style={{backgroundColor:'blue',alignSelf:'center'}}>
          <Image style={{width:30 , height:30}} source={require('../../Images/contactus.png')}/>
      </Button>
    </View>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
  img:{
    width:300,
  },
    container: {
      flex: 1,
      flexDirection: 'column',
      backgroundColor: 'black',
    },
    views:{
      marginTop:80,
      margin:20,
    },
    txt:{
      fontWeight:'bold',
      marginTop:20,
      fontSize:25,
    },
    preview: {
      flex: 1,
      justifyContent: 'flex-end',
      alignItems: 'center',
    },
    capture: {
      flex: 0,                                                                  
      backgroundColor: '#fff',
      borderRadius: 5,
      padding: 15,
      paddingHorizontal: 20,
      alignSelf: 'center',
      margin: 20,
    },
  });
  export default Contact;