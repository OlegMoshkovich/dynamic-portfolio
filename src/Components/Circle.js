import React from 'react';
import '../index.css';


function Circle(props){
    let width = props.width/110
    let widthSelected = props.width/110
    let circleItems = [];
      for (var i = 1; i < props.quantity+1; i++) {
        if(i === props.number){
          circleItems.push(<img className = "image" style = {{width:widthSelected, height:widthSelected,margin:2}}
            src = {require(`../images/icons/circle_filled.png`)}
              />);
        }else{
          circleItems.push(<img className = "image" style = {{width:width, height:width,margin:2}}
            src = {require(`../images/icons/circle.png`)}
          />);
        }
      }
      return (
        <div style = {{marginTop:5, marginLeft:0}}>{circleItems}</div>
      );
}

export default Circle;
