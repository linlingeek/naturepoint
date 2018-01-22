import React ,Component from 'react';
import {AppRegistry,Input } from 'react-native';

export default class Slider extends Component {
  constructor(){
    super(props)
    this.state = {
      value :128
    }
  }
  handeHange(props,i,e){
    let newArray = this.state.value,
    newArray.forEach((part,index,oldArray)=>{
      oldArray[i] = e.target.value;
    })
    this.setState({
      value:newArray
    })
  }
  return (){
    return (
      <Input datas={this.state.value} onChange={this.handeHange}/>
    );
  }
}
