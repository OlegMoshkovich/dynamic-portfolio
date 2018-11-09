import React from 'react';
import '../index.css';





function Square(props){
    const imageWidth = props.width;
    if(props.type === 'image'){
      return (
        <div>
          <button className="square" onClick = {props.onClick}  style = {{width:imageWidth, height:imageWidth}}>
            <img alt='square' className = "image" style = {{width:imageWidth, height:imageWidth}}
              src = {require(`../images/short/image/project${props.value.projectnumber}/image${props.value.imagenumber}.png`)}
            />
          </button>
        </div>
      );
    }else if(props.type === 'text'){
      return (
        <div>
          <button  className="square" style = {{width:imageWidth, height:imageWidth}} onClick = {props.onClick} >
            <img alt='square text' className = "image" style = {{width:imageWidth, height:imageWidth}}
              src = {require(`../images/short/text/project${props.value.projectnumber}/image${props.value.textnumber}.png`)}
            />
          </button>
        </div>
      );
    }
}

export default Square;
