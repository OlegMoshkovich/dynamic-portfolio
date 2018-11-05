import React from 'react';
import '../index.css';


function NavButton(props){
  

    let path = props.value.projectnumber === 0 ? '../images/project.png' : '../images/next.png';
    return (
      <div style ={{'position':'absolute','margin-top':props.value.width/6, 'margin-left':props.value.width/2.4}} >
      <button  className="square" onClick = {props.onClick}>
        <img style ={{width:props.value.width/15}}
          // src = {require(`${path}`)
          src = {props.value.projectnumber === 0 ? require(`../images/icons/project.png`) : require(`../images/icons/next.png`)}/>
      </button>
      </div>
    );
}

export default NavButton;
