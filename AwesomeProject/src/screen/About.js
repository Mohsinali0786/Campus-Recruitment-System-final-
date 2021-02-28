import React from 'react';
import {StyleSheet,View,Text,ScrollView,Image} from 'react-native';
import {Button} from 'native-base';

function About(props){
    return(
      <View>
        <ScrollView>
        <Text style={styles.oject}>Objective</Text>
        <Text style={styles.txt1}>
          The main aim of developing this application is to reduce the time to a 
          great extent that is spent in searching for the right donor and the 
          availability of blood required. Thus this application provides the 
          required information in no time and also helps in quicker decision 
          making.
        </Text>
        <View>
          <Text style={styles.oject}>Helpful Information To Select Right Donors</Text>
          <Text style={styles.txt1}>
            There are four major blood groups determined by the presence or 
            absence of two antigens – A and B – on the surface of red blood cells.
            In addition to the A and B antigens, there is a protein called the Rh 
            factor, which can be either present (+) or absent (–), creating the 8 
            most common blood types (A+, A-,  B+, B-,  O+, O-,  AB+, AB-).
            </Text>
            <Text style={styles.txt1}>
            There are 4 main blood groups defined by the ABO system:
            </Text>
            <Text style={styles.txt1}>
            blood group A – has A antigens on the red blood cells with anti-B 
            antibodies in the plasma
            </Text>
            <Text style={styles.txt1}>
            blood group B – has B antigens with anti-A antibodies in the plasma
            </Text>
            <Text style={styles.txt1}>
            blood group O – has no antigens, but both anti-A and anti-B 
            antibodies in the plasma
            </Text>
            <Text style={styles.txt1}>
            blood group AB – has both A and B antigens, but no antibodies
            </Text>
            <Text style={styles.txt1}>
            
            Blood group O is the most common blood group. Almost half of the UK population 
            (48%) has blood group O.
            </Text>
            <Text style={styles.oject}>How Danger</Text>
            <Text style={styles.txt1}>
          
            Receiving blood from the wrong ABO group can be life threatening. 
            For example, if someone with group B blood is given group A blood, 
            heir anti-A antibodies will attack the group A cells.

            This is why group A blood must never be given to someone who has 
            group B blood and vice versa.

            As group O red blood cells do not have any A or B antigens, it can 
            safely be given to any other group.
            </Text>
            <Text style={styles.oject}>Your Blood Group</Text>
            <Text style={styles.txt1}>

            This means you can be 1 of 8 blood groups:
            </Text>
            <Text style={styles.txt2}>
            A RhD positive (A+)
            </Text>
            <Text style={styles.txt2}>
            A RhD negative (A-)
            </Text>
            <Text style={styles.txt2}>
            B RhD positive (B+)
            </Text>
            <Text style={styles.txt2}>
            B RhD negative (B-)
            </Text>
            <Text style={styles.txt2}>
            O RhD positive (O+)
            </Text>
            <Text style={styles.txt2}>
            O RhD negative (O-)
            </Text>
            <Text style={styles.txt2}>
            AB RhD positive (AB+)
            </Text>
            <Text style={styles.txt2}>
            AB RhD negative (AB-)
            </Text>
            <Text style={styles.oject}>Most common Blood</Text>
            <Text style={styles.txt1}>

            In most cases, O RhD negative blood (O-) can safely be given to 
            anyone. It's often used in medical emergencies when the blood type 
            is not immediately known.

            It's safe for most recipients because it does not have any A, B or 
            RhD antigens on the surface of the cells, and is compatible with every
            other ABO and RhD blood group.
          </Text>
        </View>
        <View>
          <Text style={styles.oject}>Who can give Blood</Text>
          <Text style={styles.txt1}>
            Most people are able to give blood, but only 1 in 25 people actually
            do. You can donate blood if you:
            are fit and healthy
            weigh at least 50kg (7st 12lb)
            are 17-66 years old (or 70 if you've given blood before)
            are over 70 and have given blood in the last 2 years
          </Text>
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
      </View>
    )
}

const styles = StyleSheet.create({

    oject:{
      fontSize:30,
      marginTop:20,
      marginBottom:30,
      fontWeight:'bold',
      textAlign:'center'
    },
    txt1:{
      margin:20,
    },
    txt2:{
      marginLeft:20,
      margin:5,
    }
  });
  export default About;