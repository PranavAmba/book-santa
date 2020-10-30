import * as React from 'react';
import { StyleSheet, Text, View ,TextInput,TouchableOpacity, Alert, Modal, KeyboardAvoidingView} from 'react-native';
import firebase from 'firebase'
//import Santa from '../Components/santa.js'

export default class Login extends React.Component{
    constructor(){
        super()
        this.state={
            email:'',
            password:'',
            registerModel:false,
            firstName:'',
            lastName:'',
            comfirmPassword:'',
            address:'',
            contactNo:''
        }
    }
    render(){
    <View>{
        //this.setVisiblityofRegisterModel(true);
        this.showModel()
        }</View>
        return(
            <View style={styles.container}>
     <TextInput placeholder='Email ID' onChangeText={(info)=>{
         this.setState({
             email:info
         })
     }}></TextInput>
     <TextInput placeholder='Password' onChangeText={(info)=>{
         this.setState({
            password:info
         })
     }}></TextInput>
     <TouchableOpacity onPress={this.goToScreen}>
         <Text>Login</Text>
         </TouchableOpacity>

         <TouchableOpacity onPress={this.signUp}>
         <Text>Submit</Text>    
         </TouchableOpacity>

         
            </View>
     
        )
    }

    goToScreen= async ()=>{
        if(this.state.email&&this.state.password){
           try{
               const response=await firebase
               .auth()
               .signInWithEmailAndPassword(this.state.email,this.state.password)
               if(response){
                   console.log(response,'login')
                this.props.navigation.navigate('Tab')
               }
           }
           catch(errorResponse){
               switch(errorResponse.code){
                   case 'auth/user-not-found':Alert.alert('User does not exist');break
                   case 'auth/invalid-email':Alert.alert('Incorrect email or password');break
                   default:Alert.alert('Error:Something went wrong :( Please try again');break
               }
           }
        }
        else{
            Alert.alert('Please enter email and password')
        }
    }

    signUp=async ()=>{
       firebase
       .auth()
       .createUserWithEmailAndPassword(this.state.email,this.state.password)
       .then((response)=>{
          Alert.alert('User Added Sucessfully')
       })
       .catch((error)=>{
          var code = error.code
          var message = error.message
          Alert.alert(code+' : '+message)
       })
    }

    showModel=()=>{
        return(
            <Modal animationType='fade' transparent={true} visible={true}>
                <View style={styles.container}>
                    <KeyboardAvoidingView>
                        <Text>Registration</Text>
                        <TextInput placeholder='First Name' onChangeText={(info)=>{
                          this.setState({
                            firstName:info
                          })
                         }}></TextInput>

                      <TextInput placeholder='Last Name' onChangeText={(info)=>{
                          this.setState({
                            lastName:info
                          })
                         }}></TextInput>

                        <TextInput placeholder='Contact No' onChangeText={(info)=>{   
                          this.setState({
                            contactNo:info
                          })
                         }}></TextInput>

                        <TextInput placeholder='Address' onChangeText={(info)=>{
                          this.setState({
                            address:info
                          })
                         }}></TextInput>

                        <TextInput placeholder='Email ID' onChangeText={(info)=>{
                          this.setState({
                            email:info
                          })
                         }}></TextInput>

                        <TextInput placeholder='Password' onChangeText={(info)=>{
                          this.setState({
                            password:info
                          })
                         }}></TextInput>

                        <TextInput placeholder='Confirm Password' onChangeText={(info)=>{
                          this.setState({
                            confirmPassword:info
                          })
                         }}></TextInput>

                         <TouchableOpacity onPress={this.signUp}>
                             <Text>Register</Text>
                         </TouchableOpacity>

                        <TouchableOpacity onPress={()=>{this.setVisiblityofRegisterModel(false)}}>
                             <Text>Cancel</Text>
                        </TouchableOpacity>
                    </KeyboardAvoidingView>
                </View>
            </Modal>
        )
    }

    setVisiblityofRegisterModel=(visible)=>{
      this.setState({
          registerModel:visible
      })
    }
    
}

const styles=StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'white',
        alignItems:'center',
        justifyContent:"center"
    }
})