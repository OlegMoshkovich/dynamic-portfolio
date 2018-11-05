import React from 'react';
import '../index.css';
import Circle from './Circle'

const widthConstant = 60;


function Square(props){
  console.log('widthDivider', props.widthDivider)
    const imageWidth = props.width;

    if(props.type === 'image'){
      return (
        <div>
          <button className="square" onClick = {props.onClick}  style = {{width:imageWidth, height:imageWidth}}>
            <img className = "image" style = {{width:imageWidth, height:imageWidth}}

              src = {require(`../images/short/image/project${props.value.projectnumber}/image${props.value.imagenumber}.png`)}
            />
          </button>
          <Circle quantity = {props.value.imageQuantity} number = {props.value.imagenumber} width= {props.value.width}/>
        </div>
      );
    }else if(props.type === 'text'){
      return (
        <div>
          <button  className="square" style = {{width:imageWidth, height:imageWidth}} onClick = {props.onClick} >
            <img className = "image" style = {{width:imageWidth, height:imageWidth}}
              src = {require(`../images/short/text/project${props.value.projectnumber}/image${props.value.textnumber}.png`)}
            />
          </button>
          <Circle quantity = {props.value.textQuantity} number = {props.value.textnumber} width= {props.value.width}/>
        </div>
      );
    }
}

export default Square;
