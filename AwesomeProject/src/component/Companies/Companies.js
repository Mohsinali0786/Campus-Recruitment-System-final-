import React,{useState,useEffect} from 'react';
import {StyleSheet,View,Image,ScrollView,Text} from 'react-native';
import database from '@react-native-firebase/database';
import { Container,Header,Button} from 'native-base';
import{connect} from 'react-redux'

import {facebook_login,get_data} from '../../../store/action'


function Company(props){

  var [token,settoken]=useState(null)
  const facebook_logout=()=>{

  
    settoken(null)
  }
  useEffect(() => {
    // database().ref('/').child('users/').on("child_added", snapshot => {
    //   setuser(snapshot.val().name)
    // })
  
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
        <ScrollView>
        <Text style={{fontSize:35,textAlign:'center'}}>Company Login</Text>
        {/* <Container  style={styles.container}> */}
        <Text style={{fontSize:25,textAlign:'center',marginTop:50}}>Register Yourself</Text>
            <View style={{marginTop:20}}>
            <Image style={styles.comimg} source={require('../../../Images/company.png')}/> 
               
                <Button onPress={()=>props.facebook_login()} style={{backgroundColor:'green'}} block success>
                 <Text>Login With FaceBook</Text>
                </Button>

            </View>
        {/* </Container> */}
   
        </ScrollView>
        </Container>
  )}
  else{
    return(
      <Container  style={styles.container}>
      <ScrollView>
      <Text style={{fontSize:30,textAlign:'center',paddingRight:30}}>Student Application</Text>

      <Button style={styles.logoutbtn} onPress={()=>facebook_logout()}>
             <Text style={styles.logoutbtns}>Facebook Logout</Text>
           </Button>
        <Button style={styles.btn} onPress={()=>props.navigation.navigate('Comform')}>
        <Image style={styles.img} source={require('../../../Images/logo.png')}/> 
                
            <Text style={{fontSize:20,paddingLeft:20}}>Post Job</Text>
        </Button>
      <View>
      {
            
            props.students[0].map((v,i)=>{
               return(
                 <View key={i}>
                   <View  style={{borderWidth:1,backgroundColor:'yellow',marginTop:20}}>
                   
                       <Text style={{color:'black',textAlign:'center',fontWeight:'bold',fontSize:17}}>{"Student-Full-Name: " + v.First_name + " " + v.Last_name}</Text>
                       <Text  style={{color:'black',paddingBottom:5}}>{"Highest_Qualification " + v.Highest_Qualificatio}</Text>
                       <Text style={{color:'black',paddingBottom:5}}>{"Email: " + v.Email}</Text>
                       <Text style={{color:'black',paddingBottom:5}}>{"Number: " + v.Numbers}</Text>
                       
                       <Text style={{color:'black',paddingBottom:5}}>{"Institute/College: " + v.Institute}</Text>
                       
                       <Text style={{color:'black',paddingBottom:5}}>{"Grade: " + v.Grade}</Text>
                  </View>
                 </View>
               )
             })
           }
      </View>
      </ScrollView>
      </Container>

    )
  }
}
  
const styles=StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor:'#FEFCFF',
      justifyContent:'center'
    },
    img:{
      width:30,
      
      resizeMode:'contain',
    },
    img1:{
      marginTop:40,
      width: 300,
      height: 100,
      resizeMode: 'cover',
      },
      comimg:{
          width:300,
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
        alignSelf:'flex-end',
        backgroundColor:'#FEFCFF'
    
      },
      logoutbtns:{
        width:'100%',
        textAlign:'left',
        fontSize:20,
        fontWeight:'bold',
        color:'black',
      },
      logoutbtn:{
        margin:20,
        padding:5,
        display:'flex',
        alignSelf:'flex-end',
        backgroundColor:'#FEFCFF'
    
      },
      div:{
          marginTop:50,
      }
  });
  const mapStateToProps=(state)=>(
    {
    students:[state.Students],
    current_user:state.current_user
  
  })

  const mapDispatchToProps=(dispatch)=>({
      set_data:()=>dispatch(set_data()),
      facebook_login:()=>dispatch(facebook_login()),
      get_data:()=>dispatch(get_data()),
  })


export default connect(mapStateToProps,mapDispatchToProps)(Company);
