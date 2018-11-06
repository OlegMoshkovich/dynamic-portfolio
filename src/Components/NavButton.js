import React from 'react';
import '../index.css';


function NavButton(props){

    console.log("printing from NavButton" + props.config)

    let path = props.value.projectnumber === 0 ? '../images/project.png' : '../images/next.png';
    if(props.config === 'row'){
    return (
      <div style ={{'position':'absolute','marginTop':props.value.width/6+65, 'marginLeft':props.value.width/2.4}} >
      <button  className="square" onClick = {props.onClick}>
        <img style ={{width:props.value.width/15}}
          // src = {require(`${path}`)
          src = {props.value.projectnumber === 0 ? require(`../images/icons/project.png`) : require(`../images/icons/next.png`)}/>
      </button>
      </div>
    );
  }else{
    return (
      <div style ={{'background':'transparent','paddingTop':20}} >
      <button  className="square" onClick = {props.onClick}>
        <img style ={{width:props.value.width/3}}
          // src = {require(`${path}`)
          src = {props.value.projectnumber === 0 ? require(`../images/icons/project.png`) : require(`../images/icons/next.png`)}/>
      </button>
      </div>
    );

  }
}

export default NavButton;
