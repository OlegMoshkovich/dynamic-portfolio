import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import registerServiceWorker from './registerServiceWorker';

import Square from './Components/Square'
import Circle from './Components/Circle'
import NavButton from './Components/NavButton'




function SquareImageIphone(props){
  const imageWidth = props.value.width/1.2;


    return (
      <div>
        <button className="square" onClick = {props.onClick}  style = {{width:imageWidth, height:imageWidth}}>
          <img className = "image" style = {{width:imageWidth, height:imageWidth}}
            src = {require(`./images/short/image/project${props.value.projectnumber}/image${props.value.imagenumber}.png`)}
          />
        </button>
        <Circle quantity = {props.value.imageQuantity} number = {props.value.imagenumber} width= {props.value.width}/>
      </div>
    );
}
function SquareTextIphone(props){
  const imageWidth = props.value.width/3;

    return (
      <div>
        <button  className="square" style = {{width:imageWidth, height:imageWidth,'paddingTop':10}} onClick = {props.onClick} >
          <img className = "image" style = {{width:imageWidth, height:imageWidth}}
            src = {require(`./images/short/text/project${props.value.projectnumber}/image${props.value.textnumber}.png`)}
          />
        </button>
        <Circle quantity = {props.value.textQuantity} number = {props.value.textnumber} width= {props.value.width}/>
      </div>
    );
}
function SquareProjectIphone(props){
    let path = props.value.projectnumber === 0 ? './images/icons/project.png' : './images/icons/next.png';
    return (
      <button  className="square" onClick = {props.onClick}>
        <img style ={{width:props.value.width/5}}
          src = {require(`${path}`)}
        />
      </button>
    );
}

class Portfolio extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      textnumber:1,
      imagenumber:1,
      projectnumber:0,
      width: 0,
      height: 0,
      imageQuantity:1,
      textQuantity:3
      // imageQuantity:3,
      // textQuantity:6
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
    console.log("handleclick is pressed")
    let imageQuantity = [2,4,5,4,4];
    let textQuantity = [2,1,1,1,1,1];
    let projectQuantity = 3;
    if(square === 'image'){
        this.setState({
        imagenumber:this.state.imagenumber+1
        })
        if(this.state.imagenumber === this.state.imageQuantity){
              this.setState({
              imagenumber:1
              })
            }}

    else if(square === 'text'){
          this.setState({
          textnumber:this.state.textnumber+1
        })

        if(this.state.textnumber === this.state.textQuantity ){
              this.setState({
              textnumber:1
              })
            }
      }else{ // if the project number chanmges reset the counters to 1 and 1

          this.setState({
          projectnumber:this.state.projectnumber+1,
          textnumber:1,
          imagenumber:1,
          imageQuantity:imageQuantity[this.state.projectnumber+1],
          textQuantity:textQuantity[this.state.projectnumber+1]
        })

    if(this.state.projectnumber === projectQuantity ){ // if the project number is reached reset the project number
          this.setState({
          projectnumber:0,
          imageQuantity:1,
          textQuantity:3

        })
      }
  }}


  renderSquare(type) {

      if(type === 'imageIphone'){
        return (
          <SquareImageIphone value = {this.state}
          onClick={() => this.handleClick('image')}
        />
      )};

      if(type === 'textIphone'){
        return (
          <SquareTextIphone value = {this.state}
          onClick={() => this.handleClick('text')}
        />
        )
      }

      if(type === 'projectIphone'){
        return (
          <div style ={{'background':'transparent','paddingTop':40}} >
            <SquareProjectIphone value = {this.state}
            onClick={() => this.handleClick('project')}
            />
          </div>
        )
      }

  }

  render() {
         const widthConstant = 60;
         let aspectRatio = this.state.height/this.state.width
         let squareWidth = this.state.width/2-widthConstant
         let widthDivider = 2
         if(aspectRatio>1.4){
           let squareWidth = this.state.width/5-widthConstant}



         if(aspectRatio>1.4){

           return (
           <div className="containerIphone"
             style = {{
             'flex-direction': 'column',
             'align-items': 'center',
             'align-content':'center',
             }}>
             {this.renderSquare('imageIphone')}
             {this.renderSquare('textIphone')}
             {this.renderSquare('projectIphone')}
           </div>
         )
         }else{
           return (
           <div className="container"
             style = {{
             'flex-direction': 'row',
             'justify-content': 'space-around',
             'align-items': 'center',
             'align-content':'center',
             }}>
             <Square value = {this.state} type = {'image'} width = {squareWidth}
             onClick={() => this.handleClick('image')}/>
             <Square value = {this.state} type = {'text'} width = {squareWidth}
             onClick={() => this.handleClick('text')}/>
             <NavButton value = {this.state}
             onClick={() => this.handleClick('project')}/>
           </div>)

         }



  }
}

// ============================================================
ReactDOM.render(
  <Portfolio />,
  document.getElementById('root')
);

registerServiceWorker();
