import React,{useState,useEffect} from 'react';
import {StyleSheet,View,Image,ScrollView,Text} from 'react-native';
import database from '@react-native-firebase/database';
import { Container,Button,Header} from 'native-base';
import{connect} from 'react-redux'
import {set_data} from '../../store/action'
import {facebook_login,get_data} from '../../store/action'
import SearchInput, { createFilter } from 'react-native-search-filter';

function Home(props){
  const KEYS_TO_FILTERS = ['BloodGroup'];
  
var [token,settoken]=useState(null)
var [searchTerm,setsearch]=useState('')
var [user,setuser]=useState('')

const searchUpdated=(term)=>{
  setsearch(term)
}
const facebook_logout=()=>{

  
  settoken(null)
}
  useEffect(() => {
    database().ref('/').child('users/').on("child_added", snapshot => {
      setuser(snapshot.val().name)
    })
  
  database().ref('/').child('accesstoken').on("child_added", snapshot => {
    settoken(snapshot.val())
    database().ref('accesstoken').remove();

  })

  },[token]);
  useEffect(()=>{
    props.get_data()
  },[])
  if(token===null)
  {
  return(

      <Container  style={styles.container}>
        <Text style={{fontSize:40,textAlign:'center'}}>Register Yourself</Text>

            <Image style={styles.img} source={require('../../Images/logo.png')}/>
              <View style={{marginTop:20}}>
                  <Button onPress={()=>props.facebook_login()} style={{backgroundColor:'green'}} block success>
                    <Text>Login With FaceBook</Text>
                  </Button>
   
                <View>
                  <Image style={styles.img1} source={{uri:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS33lxKZGvgNDEEqsiLBxL6pkZBtr34oqaALg&usqp=CAU'}}/>
                </View>
              </View>
        </Container>
  )}
  else{
    console.log("C_User==>",props.current_user)
    const filteredDonors = props.donors[0].filter(createFilter(searchTerm, KEYS_TO_FILTERS))
    return(
        <Container>
          <ScrollView>
          <Header searchBar rounded>
          <SearchInput 
          onChangeText={(term) => {searchUpdated(term) }} 
          style={styles.searchInput}
          placeholder="Serach by Blood Group"
          />
           </Header>
       
          <Text style={{fontSize:22,textAlign:'center',fontWeight:'bold',marginTop:20,borderBottomWidth:3}}>Welcome {props.current_user} To Life Care Blood Bank</Text>
         <Image style={styles.img} source={require('../../Images/logo.png')}/>
         <Button style={styles.btn} onPress={()=>facebook_logout()}>
             <Text style={styles.btns}>Facebook Logout</Text>
           </Button>
      
          <Button style={styles.btn} onPress={()=>{props.navigation.navigate('Form')}}>
              <Text style={styles.btns}>Donate Your Blood</Text>
          </Button>
          
          <View>
            <Text style={{fontSize:50,fontWeight:'bold',backgroundColor:'black',color:'white', textAlign:'center',marginTop:40,borderBottomWidth:3,borderTopWidth:3,borderColor:'red'}}>ALL Donors</Text>
          {
            
           filteredDonors.map((v,i)=>{
              return(
                <View key={i}>
                  <View  style={{borderWidth:1,backgroundColor:'black',marginTop:20}}>
                      <Text style={{color:'red',textAlign:'right',fontWeight:'bold',fontSize:17}}>{"Blood-Group: " + v.BloodGroup}</Text>
                      <Text  style={{color:'red',paddingBottom:5}}>{"Full-Name: " + v.First_name + " " + v.Last_name}</Text>
                      <Text style={{color:'red',paddingBottom:5}}>{"Email: " + v.Email}</Text>
                      <Text style={{color:'red',paddingBottom:5}}>{"Number: " + v.Numbers}</Text>
                 </View>
                </View>
              )
            })
          }
        </View>
        <View style={{flexDirection:'row',marginTop:50,backgroundColor:'blue',height:60,justifyContent:'space-evenly'}}>
            <Button style={{backgroundColor:'blue',alignSelf:'center'}}>
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
      </Container>
    );
    }
    }
  const styles=StyleSheet.create({
      container: {
        flex: 1,
      },
      img:{
        width:350,
        resizeMode:'contain',
      },
      img1:{
        marginTop:40,
        width: 300,
        height: 100,
        resizeMode: 'cover',
        },
        searchInput:{
          margin:10,
          padding: 10,
          borderColor: '#CCC',
          borderWidth: 1,
          backgroundColor:'white',
          width:300,
        },
        btns:{
          width:'100%',
          textAlign:'center',
          fontSize:20,
          fontWeight:'bold',
          color:'white'
        },
        btn:{
          margin:20,
          padding:5,
          display:'flex',
          alignSelf:'flex-end'
        },
    });

  const mapStateToProps=(state)=>({
    donors:[state.Donors],
    current_user:state.current_user
  
  })

  const mapDispatchToProps=(dispatch)=>({
      set_data:()=>dispatch(set_data()),
      facebook_login:()=>dispatch(facebook_login()),
      get_data:()=>dispatch(get_data()),
  })


export default connect(mapStateToProps,mapDispatchToProps)(Home);
