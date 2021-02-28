import React,{useState} from 'react';
import {StyleSheet,Text} from 'react-native';
import database from '@react-native-firebase/database';
import { Container,Form,Item,Input,Button} from 'native-base';

var key;
function Comform(){
  const [mydata,set_mydata]=useState({
    Company_Name:'',
    Job_Title:'',
    Job_Des:'',
    Job_Req:'',
    Salary:'',
    Criteria_percentage:'',
    key:key,
  })
  const handle_click=()=>{
        key=database().ref('images/').push().key
        database().ref('/').child('Companies/' + key).set(mydata).then(()=>{
        })
        set_mydata({
          Company_Name:'',
          Job_Title:'',
          Job_Des:'',
          Job_Req:'',
          Salary:'',
          Criteria_percentage:'',
          key:'',
        })
        alert("Submitted successfully")
  }
  return(


      <Container  style={styles.container}>
        <Text style={{fontSize:30,textAlign:'center'}}>Job Details</Text>

        
           <Form style={{borderColor:'black',borderRadius:1,borderWidth:1,marginTop:30,paddingTop:20,paddingBottom:20}}>
          
           <Item >
              <Input placeholder="Company_Name" value={mydata.Company_Name} onChangeText={(e)=>set_mydata((prevState) => ({
             ...prevState,Company_Name:e
    }))} />
            </Item>
          
           <Item>
              <Input placeholder="Job_Title"   value={mydata.Job_Title} onChangeText={(e)=>set_mydata((prevState) => ({
             ...prevState,Job_Title:e
    }))} />
            </Item>
            <Item last>
              <Input placeholder="Job_Des" value={mydata.Job_Des} onChangeText={(e)=>set_mydata((prevState) => ({
             ...prevState,Job_Des:e
    }))} />
            </Item>
            <Item >
              <Input placeholder="Job_Req" value={mydata.Job_Req} onChangeText={(e)=>set_mydata((prevState) => ({
             ...prevState,Job_Req:e
    }))}/>
            </Item>
            <Item >
              <Input placeholder="Salary" value={mydata.Salary} onChangeText={(e)=>set_mydata((prevState) => ({
             ...prevState,Salary:e
    }))} />
            </Item>
            <Item >
              <Input placeholder="Criteria_percentage" value={mydata.Criteria_percentage} onChangeText={(e)=>set_mydata((prevState) => ({
             ...prevState,Criteria_percentage:e
    }))} />
            </Item>
            
            <Button onPress={()=>handle_click()} full danger style={{marginTop:20}}>
            <Text>Submit</Text>
          </Button>
          </Form>
     </Container>
    );
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
        
        }
    });

export default Comform;
