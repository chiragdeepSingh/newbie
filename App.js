import * as React from 'react';
import { Text, View, StyleSheet,TouchableOpacity } from 'react-native';
import {Header} from 'react-native-elements'
import db from './config'


export default class App extends React.Component {
  constructor(){
    super()
    this.state ={ 
    present:false,
    absent:false
    
    }

  }
  Diya1Pressed=()=>{
  var Diya1 = db.ref('diya/' )
  Diya1.update({
    'absent': 'true'
  })
}

Diya2Pressed=()=>{
  var Diya2 = db.ref('diya/' )
  Diya2.update({
    'present': 'true'
  })
}
Jashan1Pressed=()=>{
  var Jashan1 = db.ref('jashan/' )
  Jashan1.update({
    'absent': 'true'
  })
}

Jashan2Pressed=()=>{
  var Jashan2 = db.ref('jashan/')
  Jashan2.update({
    'present': 'true'
  })
}
Ravi1Pressed=()=>{
  var Ravi1 = db.ref('ravi/')
  Ravi1.update({
    'absent': 'true'
  })
}

Ravi2Pressed=()=>{
  var Ravi2 = db.ref('ravi/')
  Ravi2.update({
    'present': 'true'
  })
}


  render(){
    return(
      <View>
      <Header
      backgroundColor = {"red"}
      centerComponent = {{text:"Attendence App",style:{color:"white",fontSize:20}}}/>
     <Text style={styles.studenChartContainer}>Diya</Text>
        <Text style={styles.studenChartContainer}>Jashan</Text>
        <Text style={styles.studenChartContainer}>Ravi</Text>

      <TouchableOpacity
          style={styles.button}
          onPress={() => {
            this.Diya1Pressed();
          }}>
          <Text style={styles.buttonText}>Absent</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.button }
          onPress={() => {
            this.Jashan1Pressed();
          }}>
          <Text style={styles.buttonText}>Absent</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.button}
          onPress={() => {
               this.Ravi1Pressed();
          }}>
          <Text style={styles.buttonText}>Absent</Text>
        </TouchableOpacity>

           <TouchableOpacity
          style={styles.button2}
          onPress={() => {
           this.Diya2Pressed();
          }}>
          <Text style={styles.button2Text}>Present</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.button2}
          onPress={() => {
             this.Jashan2Pressed();
          }}>
          <Text style={styles.button2Text}>Present</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.button2}
          onPress={() => {
              this.Ravi2Pressed();
          }}>
          <Text style={styles.button2Text}>Present</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.button3}
          onPress={() => {
            this.goToBuzzerScreen('yellow');
          }}>
          <Text style={styles.button3Text}>Submit</Text>
        </TouchableOpacity>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  text: {
    fontSize: 20,
    fontWeight: 'bold',
    marginTop: 30,
  },
  studenChartContainer: {
     flexDirection: 'row',
     padding: 11.5,
     alignItems: 'center',
     margin: 20,
     marginTop: 20,
  },
  button: {
    justifyContent: 'center',
    alignSelf: 'center',
    borderWidth: 2,
    borderRadius: 5,
    marginTop: -90,
    marginBottom: -10,
    marginLeft: 200,
    width: 100,
    height: 30,
    backgroundColor: 'red'
  },
  buttonText: {
    textAlign: 'center',
    color: 'white',
  },
  button2: {
    justifyContent: 'center',
    alignSelf: 'center',
    borderWidth: 2,
    borderRadius: 5,
    marginTop: -20,
    marginBottom: 60,
    marginLeft: -30,
    width: 100,
    height: 30,
    backgroundColor: 'green'
  },
  button2Text: {
    textAlign: 'center',
    color: 'white',
  },
  button3: {
    justifyContent: 'center',
    alignSelf: 'center',
    borderWidth: 2,
    borderRadius: 5,
   marginTop: 10,
    marginLeft: 40,
    width: 200,
    height: 50,
    backgroundColor: 'yellow',
  },
   button3Text: {
    textAlign: 'center',
    color: 'purple',
  },
 
});

