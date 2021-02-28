import React,{useState,useEffect} from 'react';
import {StyleSheet,View,Image,ScrollView,Text} from 'react-native';
import database from '@react-native-firebase/database';
import { Container,Header,Button} from 'native-base';
import{connect} from 'react-redux'
import {set_data} from '../../store/action'
import {facebook_login,get_data} from '../../store/action'
import SearchInput, { createFilter } from 'react-native-search-filter';

function dashboard(props){
  return(


      <Container  style={styles.container}>
        <ScrollView>
        <Text style={{fontSize:40,textAlign:'center'}}>Register Yourself</Text>
        <View>
            <View style={styles.div}>
                <Button onPress={()=>{props.navigation.navigate('Admin')}} style={styles.btn}>
                    <Image style={styles.img} source={require('../../Images/dmin_1.png')}/>
                    <Text>Admin</Text>
                </Button>
            </View>
            <View style={styles.div}>
           <Button style={styles.btn}onPress={()=>{props.navigation.navigate('Company')}}>
                <Image style={styles.img} source={require('../../Images/company.png')}/> 
                <Text>Company</Text>
           </Button>
           </View>
           <View style={styles.div}>
           <Button style={styles.btn}onPress={()=>{props.navigation.navigate('Student')}}>
                <Image style={styles.img} source={require('../../Images/student-login.png')}/>
                <Text>Student</Text>
           </Button>
           </View>
        </View>
           
              <View style={{marginTop:20}}>
                  {/* <Button onPress={()=>props.facebook_login()} style={{backgroundColor:'green'}} block success>
                    <Text>Login With FaceBook</Text>
                  </Button> */}
   
              </View>
              </ScrollView>
        </Container>
  )}
  

export default dashboard;
const styles=StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor:'#FEFCFF',
      justifyContent:'center'
    },
    img:{
      width:350,
      height:150,
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
        alignSelf:'flex-end',
        backgroundColor:'#FEFCFF'
    
      },
      div:{
          marginTop:50,
      }
  });
