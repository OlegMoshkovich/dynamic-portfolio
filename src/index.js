import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';


function SquareImage(props){
    console.log(`the window height -- ${props.value.width}`)
    return (
      <button style = {{width:props.value.width/2, height:props.value.height-300}} className="square" onClick = {props.onClick}>
      <img className = "image" style = {{width:props.value.width/2-50, height:props.value.width/2-50}}
        src = {require(`./images/image/project${props.value.projectnumber}/image${props.value.imagenumber}.jpeg`)}
      />
      </button>
    );
}
function SquareText(props){
  console.log(`in the sqiuare text function -- ${props.value}`)
    return (
      <button style = {{width:props.value.width/2, height:props.value.height-300}} className="square" onClick = {props.onClick}>
      <img className = "image" style = {{width:props.value.width/2-50, height:props.value.width/2-50}}
        src = {require(`./images/text/project${props.value.projectnumber}/image${props.value.textnumber}.jpeg`)}
      />
      </button>
    );
}
function SquareProject(props){
    return (
      <button className="square" onClick = {props.onClick}>
      {props.value.projectnumber}
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
      width: 0,
      height: 0

    };
    this.updateWindowDimensions = this.updateWindowDimensions.bind(this);
  }

  componentDidMount() {
  this.updateWindowDimensions();
  window.addEventListener('resize', this.updateWindowDimensions);
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.updateWindowDimensions);
  }

  updateWindowDimensions() {
    this.setState({ width: window.innerWidth, height: window.innerHeight });
  }

  handleClick(square){
    const imageQuantity = 4;
    const textQuantity = 2;
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
        if(this.state.textnumber == textQuantity ){
          console.log( `I am in the special loop for the text ${this.state.textnumber}` )
          this.setState({
          textnumber:1
          })
        }
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
          <SquareText value = {this.state}
          onClick={() => this.handleClick('text')}
        />
        )
      }
      if(type == 'project'){
        // console.log('I am in renderS' + type)
        return (
          <SquareProject value = {this.state}
          onClick={() => this.handleClick('project')}
        />
        )
      }
  }

  render() {
    const status = '';
    return (
      <div style = {{width:this.state.width, height:this.state.height}}>
        <div className="status">{status}</div>

        <div className="board-row">
          {this.renderSquare('image')}
          {this.renderSquare('text')}

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
