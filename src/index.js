import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

const widthConstant = 50;
const heightConstant = 50;

function SquareImage(props){
    const imageWidth = props.value.width/2-widthConstant;

    return (
      <button className="square" onClick = {props.onClick}  style = {{width:imageWidth, height:imageWidth}}>
      <img className = "image" style = {{width:imageWidth, height:imageWidth}}
        src = {require(`./images/image/project${props.value.projectnumber}/image${props.value.imagenumber}.jpeg`)}
      />
      </button>
    );
}
function SquareText(props){
  const imageWidth = props.value.width/2-widthConstant;
  const imageHeight = props.value.width/2-heightConstant;
  console.log(`this is the path --./images/text/project${props.value.projectnumber}/image${props.value.textnumber}.jpeg`)
    return (
      <div>
      <button  className="square" style = {{width:imageWidth, height:imageHeight}} onClick = {props.onClick} >
      <img className = "image" style = {{width:imageWidth, height:imageHeight}}
        src = {require(`./images/text/project${props.value.projectnumber}/image${props.value.textnumber}.jpeg`)}
      />
      </button>


      </div>



    );
}
function SquareProject(props){

        return (
          <button  className="square" onClick = {props.onClick}>
          <img style ={{width:80}}
            src = {require(`./images/icons/project.png`)}
          />

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
    const imageQuantity = 5;
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
        }}
    else if(square == 'text'){

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
      <div>
        <div className="container"
          style = {{
          'flex-direction': 'row',
          'justify-content': 'space-around',
          'align-items': 'center',
          'align-content':'center',

          }}>
          {this.renderSquare('image')}
          {this.renderSquare('text')}

          <div style ={{'position':'absolute','margin-top':250, 'margin-left':610,'background':'transparent'}} >
          {this.renderSquare('project')}
          </div>
        </div>
          <div style = {{margin:20}}>
              <span class="dot"></span>
              <span class="dot"></span>
              <span class="dot"></span>
              <span class="dot"></span>
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
