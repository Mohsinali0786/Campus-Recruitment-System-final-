import database from '@react-native-firebase/database';
import auth from '@react-native-firebase/auth';
import { LoginManager, AccessToken } from 'react-native-fbsdk';
import { NavigationActions } from 'react-navigation'

const facebook_login=()=>
{
  
  return async(dispatch)=>
  {
    if (AccessToken.getCurrentAccessToken() != null){

    LoginManager.logOut()

  // Attempt login with permissions
  const result = await LoginManager.logInWithPermissions(['public_profile', 'email']);
  
  if (result.isCancelled) {
    throw 'User cancelled the login process';
  }

  // Once signed in, get the users AccesToken
  const data = await  AccessToken.getCurrentAccessToken();
  database().ref('/').child('accesstoken/'+ 1).set(data.accessToken)

  if (!data) {
    throw 'Something went wrong obtaining access token';
  }

  // Create a Firebase credential with the AccessToken
  const facebookCredential = auth.FacebookAuthProvider.credential(data.accessToken);

  // Sign-in the user with the credential
  return auth().signInWithCredential(facebookCredential)
  .then((data)=>{
    console.log(data.additionalUserInfo.profile.email)
    console.log(data.user.displayName)
    console.log(data.user.uid)
    console.log(data.user.photoURL)
    dispatch({
      type:'current_user',
      current_users:data.user.displayName,
    })
    
    
    
    let create_user={
      name:data.user.displayName,
      email:data.additionalUserInfo.profile.email,
      profile:data.user.photoURL,
      uid:data.user.uid,
    }
    database().ref('/').child('users/' + data.user.uid).set(create_user)
    .then(()=>{
       NavigationActions.navigate('About')
    })
    })
  .catch((err)=>{
    console.log("Err===>",err)
  });
}
  }
}

const get_data=()=>{
      

      return(dispatch)=>{
        database().ref('/').child('Student').on("child_added", snapshot => {
        dispatch({
          type:"Students",
          payload:snapshot.val()
        })
        })
      }   
}

const get_data_for_students=()=>{
      

  return(dispatch)=>{
    database().ref('/').child('Companies').on("child_added", snapshot => {
    dispatch({
      type:"Companies",
      payload:snapshot.val()
    })
    })
  }   
}
    
export {
    facebook_login,
    get_data,
    get_data_for_students,
}

