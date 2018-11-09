import React,{Component}  from 'react';

import '../index.css';


class Circle extends Component{


  handleClick = (data) => {
      console.log(data);
      this.props.updateParentComponent(data);
  }

  render(){

    console.log(this.props)
    let width = 50
    let widthSelected = 50
    let circleItems = [];



      for (var i = 1; i < this.props.quantity+1; i++) {
        if(i === this.props.number){
          circleItems.push(

                <img alt= {`${i}`} key = {i}  className = "image" onClick ={(data)=>this.handleClick(data.target.alt)}  style = {{width:widthSelected, height:widthSelected,margin:2}}
                src = {require(`../images/icons/circle_filled.png`)}/>

);
        }else{
          circleItems.push(

                <img alt= {`${i}`}  key = {i} className = "image"  onClick ={(data)=>this.handleClick(data.target.alt)}style = {{width:width, height:width,margin:2}}
                src = {require(`../images/icons/circle.png`)}/>

        );
        }
      }

      return (
        <div style = {{marginTop:5, marginLeft:0}}>{circleItems}</div>
      );

  }



}



export default Circle;
