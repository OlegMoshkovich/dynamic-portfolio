import React from 'react';
import '../index.css';


function NavButton(props){

  if(props.config === 'row'){
    if(props.value.projectnumber === 0){
      return (
        <div style ={{'position':'absolute','marginTop':props.value.width/6+75, 'marginLeft':props.value.width/2.4}} >
        <button  className="square" onClick = {props.onClick}>
          <img alt='navigation' style ={{width:props.value.width/20}}
            // src = {require(`${path}`)
            src = {props.value.projectnumber === 0 ? require(`../images/icons/project.png`) : require(`../images/icons/next.png`)}/>
        </button>
        </div>
      );
    }else{
      return (
        <div style ={{'display':'flex', 'position':'absolute','marginTop':props.value.width/6+75, 'marginLeft':props.value.width/2.61}}>
          <div >
          <button  className="square" onClick = {props.prev}>
            <img alt='navigation' style ={{width:props.value.width/20}} src = {require(`../images/icons/previous.png`)}/>
          </button>
          </div>
          <div>
          <button  className="square" onClick = {props.info}>
            <img alt='navigation' style ={{width:props.value.width/20}} src = {require(`../images/icons/home.png`)}/>
          </button>
          </div>
          <div>
          <button  className="square" onClick = {props.next}>
            <img alt='navigation' style ={{width:props.value.width/20}} src = {require(`../images/icons/next.png`)}/>
          </button>
          </div>
        </div>
    );
  }

  }else{
    if(props.value.projectnumber === 0){
      return (
        <div style ={{'marginTop':80}} >
        <button  className="square" onClick = {props.onClick}>
          <img alt='navigation' style ={{width:props.value.width/10}}
            // src = {require(`${path}`)
            src = {props.value.projectnumber === 0 ? require(`../images/icons/project.png`) : require(`../images/icons/next.png`)}/>
        </button>
        </div>
      );
    }else{
      return (
        <div style ={{'display':'flex', 'marginTop':80}}>
          <div >
          <button  className="square" onClick = {props.prev}>
            <img alt='navigation' style ={{width:props.value.width/10}} src = {require(`../images/icons/previous.png`)}/>
          </button>
          </div>
          <div>
          <button  className="square" onClick = {props.info}>
            <img alt='navigation' style ={{width:props.value.width/10}} src = {require(`../images/icons/home.png`)}/>
          </button>
          </div>
          <div>
          <button  className="square" onClick = {props.next}>
            <img alt='navigation' style ={{width:props.value.width/10}} src = {require(`../images/icons/next.png`)}/>
          </button>
          </div>
        </div>
    );

  }
}
}

export default NavButton;
