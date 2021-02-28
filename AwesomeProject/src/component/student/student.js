import React,{useState,useEffect} from 'react';
import {StyleSheet,View,Image,ScrollView,Text} from 'react-native';
import database from '@react-native-firebase/database';
import { Container,Header,Button} from 'native-base';
import{connect} from 'react-redux'

import {facebook_login,get_data,get_data_for_students} from '../../../store/action'


function Student(props){

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
    props.get_data_for_students()
  },[])

  if(token===null)
  {
  return(

      <Container  style={styles.container}>
        <ScrollView>
        <Text style={{fontSize:30,textAlign:'center'}}>Welcome To Student facebook_login</Text>
        <Container  style={styles.container}>
        <Text style={{fontSize:40,textAlign:'center'}}>Register Yourself</Text>
            <View style={{marginTop:20}}>
                <Button onPress={()=>props.facebook_login()} style={{backgroundColor:'green'}} block success>
                 <Text>Login With FaceBook</Text>
                </Button>

            </View>
        </Container>
   
        </ScrollView>
        </Container>
  )}
  else{
    console.log("props===>",props.companies)
    return(
      <Container  style={styles.container}>
      <ScrollView>
      <Text style={{fontSize:30,textAlign:'center'}}>Welcome To Student Section</Text>
     
      <Button style={styles.logoutbtn} onPress={()=>facebook_logout()}>
             <Text style={styles.logoutbtns}>Facebook Logout</Text>
           </Button>
      <Button style={styles.btn} onPress={()=>props.navigation.navigate('Studentform')}>
        <Image style={styles.img} source={require('../../../Images/logo.png')}/> 
                
            <Text style={{fontSize:20,paddingLeft:20}}>Post Your Profile</Text>
        </Button>
      <View>
      {
            
            props.companies[0].map((v,i)=>{
               return(
                 <View key={i}>
                   <View  style={{borderWidth:1,backgroundColor:'yellow',marginTop:20}}>
                   
                       <Text style={{color:'black',textAlign:'center',fontWeight:'bold',fontSize:17}}>{"Company_Name: "+v.Company_Name}</Text>
                       <Text  style={{color:'black',paddingBottom:5}}>{"Job_Title " + v.Job_Title}</Text>
                       <Text style={{color:'black',paddingBottom:5}}>{"Job_Des: " + v.Job_Des }</Text>
                       <Text style={{color:'black',paddingBottom:5}}>{"Job_Req: " + v.Job_Req}</Text>
                       <Text style={{color:'black',paddingBottom:5}}>{"Salary: " + v.Salary}</Text>
                       <Text style={{color:'black',paddingBottom:5}}>{"Criteria_percentage: " + v.Criteria_percentage}</Text>
                       {/* <Text style={{color:'black',paddingBottom:5}}>{"Job_Req: " + v.key}</Text> */}
                       
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
        color:'black'
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
    companies:[state.Companies],
    
  
    current_user:state.current_user
  
  })

  const mapDispatchToProps=(dispatch)=>({
      set_data:()=>dispatch(set_data()),
      facebook_login:()=>dispatch(facebook_login()),
      get_data:()=>dispatch(get_data()),
      get_data_for_students:()=>dispatch(get_data_for_students())
  })


export default connect(mapStateToProps,mapDispatchToProps)(Student);
