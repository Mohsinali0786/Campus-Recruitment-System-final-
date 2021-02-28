import React,{useState,useEffect} from 'react';
import {StyleSheet,View,Image,ScrollView,Text} from 'react-native';
import database from '@react-native-firebase/database';
import { Container,Header,Button} from 'native-base';
import{connect} from 'react-redux'

import {facebook_login,get_data,get_data_for_students} from '../../../store/action'


function Student(props){
    useEffect(()=>{
        props.get_data()
      },[])

      const Delete=(id)=>{
        console.log('Deleted ', id)
        // database.collection('Students').doc(id).delete()

      }
    console.log("props===>",props.companies)
    return(
      <Container  style={styles.container}>
      <ScrollView>
      <Text style={{fontSize:30,textAlign:'center'}}>Admin Section</Text>
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
                        <Button style={styles.logoutbtn} onPress={()=>Delete(v.key)}>
                            <Text style={styles.logoutbtns}>Delete</Text>
                        </Button>
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
        width:70,
        textAlign:'right',
        fontSize:20,
        fontWeight:'bold',
        color:'black',
      },
      logoutbtn:{
        margin:20,
        padding:5,
        display:'flex',
        alignSelf:'flex-end',
        backgroundColor:'#FEFCFF',
        
    
      },
      div:{
          marginTop:50,
      }
  });
  const mapStateToProps=(state)=>(
    {
    companies:[state.Companies],
    
    students:[state.Students],
  
    current_user:state.current_user
  
  })

  const mapDispatchToProps=(dispatch)=>({
      set_data:()=>dispatch(set_data()),
      facebook_login:()=>dispatch(facebook_login()),
      get_data:()=>dispatch(get_data()),
      get_data_for_students:()=>dispatch(get_data_for_students())
  })


export default connect(mapStateToProps,mapDispatchToProps)(Student);
