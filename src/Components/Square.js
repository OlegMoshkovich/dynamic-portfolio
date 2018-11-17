import React from 'react';
import '../index.css';


function Square(props){
  console.log('isLoading from the square',props.loading)
    const imageWidth = props.width;

    if(props.type === 'image'){
      if(props.isLoading){
        return (
          <div>
            <button className="square" onClick = {props.onClick}  style = {{width:imageWidth, height:imageWidth}}>
              <img alt='square' className = "image" style = {{width:imageWidth, height:imageWidth}}
                src = {require(`../images/icons/loading.png`)}
              />
            </button>
          </div>
        );

      }else{
        return (
          <div>
            <button className="square" onClick = {props.onClick}  style = {{width:imageWidth, height:imageWidth}}>
              <img alt='square' className = "image" style = {{width:imageWidth, height:imageWidth}}
                src = {require(`../images/short/image/project${props.value.projectnumber}/image${props.value.imagenumber}.png`)}
              />
            </button>
          </div>
        );
      }

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
