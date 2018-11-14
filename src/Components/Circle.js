import React,{Component}  from 'react';

import '../index.css';


class Circle extends Component{


  handleClick = (data) => {
      console.log('circle type is')
      this.props.updateParentComponent(data);
  }

  render(){


    let width = this.props.width/20
    let widthSelected = this.props.width/20
    let circleItems = [];
    let type = this.props.type



      for (var i = 1; i < this.props.quantity+1; i++) {

        if(i === parseInt(this.props.number)){
          circleItems.push(
                <img alt= {`${i}`} key = {i}  className = "image" onClick ={(data,type) =>  this.props.updateParentComponent(data.target.alt,this.props.type)}  style = {{width:widthSelected, height:widthSelected,margin:2}}
                src = {require(`../images/icons/circle_filled.png`)}/>);
        }else{
          circleItems.push(
                <img alt= {`${i}`}  key = {i} className = "image"  onClick ={(data,type) =>  this.props.updateParentComponent(data.target.alt,this.props.type)} style = {{width:width, height:width,margin:2}}
                src = {require(`../images/icons/numbers_black/${i}.png`)}/>
        );
        }
      }

      return (
        <div style = {{marginTop:5, marginLeft:0}}>{circleItems}</div>
      );

  }



}



export default Circle;
