import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';


function SquareImage(props){
    // console.log(`in the image `)
    return (
      <button className="square" onClick = {props.onClick}>
      <img className = "image"
        src = {require(`./images/project${props.value.projectnumber}/image${props.value.imagenumber}.jpeg`)}
      />
      </button>
    );
}
function SquareText(props){
    return (
      <button className="square" onClick = {props.onClick}>
      {props.value}
      </button>
    );
}
function SquareProject(props){
    return (
      <button className="square" onClick = {props.onClick}>
      {props.value}
      </button>
    );
}

class Board extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      textnumber:1,
      imagenumber:1,
      projectnumber:0,

    };

  }



  handleClick(square){
    const imageQuantity = 2;
    const projectQuantity = 3;

    if(square == 'image'){
        // console.log('I am in the handleClick and I received' + square)
        this.setState({
        imagenumber:this.state.imagenumber+1
        })
        if(this.state.imagenumber == imageQuantity){
          // console.log( "I am in the special loop")
          this.setState({
          imagenumber:1
          })
        }
      }else if(square == 'text'){
          // console.log('I am in the handleClick and I received' + square)
          this.setState({
          textnumber:this.state.textnumber+1
        })
      }else{
        console.log('I am in the handleClick and I received' + square )
          this.setState({
          projectnumber:this.state.projectnumber+1,
          textnumber:1,
          imagenumber:1
        })
      if(this.state.projectnumber == projectQuantity ){
          console.log( "I am in the special project loop")
          this.setState({
          projectnumber:0
        })
      }
  }}
  renderSquare(type) {
      if(type == 'image'){
        // console.log('I am in renderS' + type)
        return (
          <SquareImage value = {this.state}
          onClick={() => this.handleClick('image')}
        />
      )};

      if(type == 'text'){
        // console.log('I am in renderS' + type)
        return (
          <SquareText value = {this.state.textnumber}
          onClick={() => this.handleClick('text')}
        />
        )
      }
      if(type == 'project'){
        // console.log('I am in renderS' + type)
        return (
          <SquareProject value = {this.state.projectnumber}
          onClick={() => this.handleClick('project')}
        />
        )
      }
  }

  render() {
    const status = 'Oleg Moshkovich';
    return (
      <div>
        <div className="status">{status}</div>
        <div className="board-row">
          {this.renderSquare('image')}
          {this.renderSquare('text')}
          {this.renderSquare('project')}
        </div>


      </div>
    );
  }
}





// ========================================
ReactDOM.render(
  <Board />,
  document.getElementById('root')
);

registerServiceWorker();
