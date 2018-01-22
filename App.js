import React, {
  Component
} from 'react';

import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  TextInput,
  Slider,
  Navigator,
  NativeModules,
  Image,
  ScrollView,
  TouchableHighlight,
} from 'react-native';

var PC = NativeModules.PlaneControl;

var Buffer = require('buffer').Buffer;

import base64 from 'base64-js';
import dgram from 'dgram';



function randomPort() {
  return Math.random() * 60536 | 0 + 6500 // 60536-65536
}

function toByteArray(obj) {
  var uint = new Uint8Array(obj.length);
  for (var i = 0, l = obj.length; i < l; i++) {
    uint[i] = obj.charCodeAt(i);
  }

  return new Uint8Array(uint);
}

import Orientation from 'react-native-orientation';



export default class linlingeek extends Component {
  constructor(props) {
    super(props);

    this.state = {
      age: 18,
      chatter: [],
      events: "",
      buff5:"",
      buff9:""
      speacial1: "",
      speacial2: "",
    }
  }
  buffArray(buff5,.buff9){
    return buff=[0xCC,0x80,0x80,0x80,0x80,buff5,0x40,0x40,0x40,buff9,0x33]
  }
  speacialArray(speacial1,speacial2){
    return speacialParameterArray=[speacial1,speacial2,0,0,0,0,0];
  }
  onPress = () => {
    this.setState({
      count: this.state.count + 1
    })
  }

  getVal(val) {
    console.warn(val);
  }
  componentWillMount() {
    const initial = Orientation.getInitialOrientation();
    if (initial === 'PORTRAIT') {

    } else {

    }
  }

  componentDidMount() {
    PC.findEvents((error, events) => {
      if (error) {
        console.error(error);
      } else {
        this.setState({
          events: events
        })
      }
    })

    var socket = dgram.createSocket('udp4')
    var remotePort = 9001
    var remoteHost = "192.168.99.1"
    socket.bind(1233)
    socket.once('listening', function() {
      var buf = toByteArray('excellent!')
      socket.send(buf, 0, buf.length, remotePort, remoteHost, function(err) {
        if (err) throw err

        console.log('message was sent')
      })
    })
    socket.on('message', function(msg, rinfo) {
      console.log('message was received', msg)
    })

    Orientation.lockToLandscape()


    Orientation.addOrientationListener(this._orientationDidChange);

  }

  _orientationDidChange = (orientation) => {
    if (orientation === 'LANDSCAPE') {
    } else {
    }
  }

  componentWillUnmount() {
    Orientation.getOrientation((err, orientation) => {
      console.log(`Current Device Orientation: ${orientation}`);
    });
    Orientation.removeOrientationListener(this._orientationDidChange);
  }

  render() {
    return ( <
      View style = {
        {
          flex: 1,
        }
      } >

      <
      View style = {
        {
          flexDirection: 'row',
          justifyContent: 'space-between',
          height: 88,
          backgroundColor: 'skyblue'
        }
      } >
      <
      View style = {
        {
          width: 65,
          height: 65,
          marginLeft: 10,
          marginTop: 10,
          backgroundColor: 'black'
        }
      }
      /> <
      View style = {
        {
          width: 65,
          height: 65,
          marginLeft: 10,
          marginTop: 10,
          backgroundColor: 'yellow'
        }
      }
      /> <
      View style = {
        {
          width: 65,
          height: 65,
          marginLeft: 10,
          marginTop: 10,
          backgroundColor: 'yellow'
        }
      }
      /> <
      View style = {
        {
          width: 65,
          height: 65,
          marginLeft: 10,
          marginTop: 10,
          backgroundColor: 'white'
        }
      }
      /> <
      View style = {
        {
          width: 65,
          height: 65,
          marginRight: 10,
          marginTop: 10,
          backgroundColor: 'white'
        }
      }
      /> < /
      View > <
      View style = {
        {
          flex: 1,
          flexDirection: 'row',
          backgroundColor: 'steelblue'
        }
      } >
      <
      View style = {
        {
          flex: 1,
          flexDirection: 'row',
          justifyContent: 'flex-start',
          alignItems: 'center',
          backgroundColor: 'white'
        }
      } >
      <
      View style = {
        {
          width: 65,
          height: 65,
          marginLeft: 10,
          backgroundColor: 'pink'
        }
      }
      /> < /
      View > <
      View style = {
        {
          flex: 1,
          flexDirection: 'column',
          justifyContent: 'space-between',
          alignItems: 'flex-end',
          backgroundColor: 'green'
        }
      } >
      <
      View style = {
        {
          width: 65,
          height: 65,
          marginRight: 10,
          marginTop: 10,
          backgroundColor: 'orange'
        }
      }
      /> <
      View style = {
        {
          width: 65,
          height: 65,
          marginRight: 10,
          marginBottom: 10,
          backgroundColor: 'blue'
        }
      }
      /> < /
      View > <
      /View> <
      View style = {
        {
          height: 88,
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'flex-end',
          backgroundColor: 'purple'
        }
      } >
      <
      View style = {
        {
          width: 65,
          height: 65,
          marginLeft: 10,
          marginBottom: 10,
          backgroundColor: 'yellow'
        }
      }
      /> <
      View style = {
        {
          width: 65,
          height: 65,
          marginLeft: 10,
          marginBottom: 10,
          backgroundColor: 'white'
        }
      }
      /> <
      View style = {
        {
          width: 65,
          height: 65,
          marginRight: 10,
          marginBottom: 10,
          backgroundColor: 'black'
        }
      }
      /> < /
      View >

      <
      /View>

    );
  }
}
