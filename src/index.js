import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import registerServiceWorker from './registerServiceWorker';

import Square from './Components/Square'
import Circle from './Components/Circle'
import NavButton from './Components/NavButton'

class Portfolio extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      textnumber:1,
      imagenumber:1,
      projectnumber:0,
      width: 0,
      height: 0,
      imageQuantity:11,
      textQuantity:3
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
          imageQuantity:11,
          textQuantity:3
        })
      }
  }}

  render() {
         const widthConstant = 60;
         let aspectRatio = this.state.height/this.state.width
         let squareWidth;
         let config;

         if(aspectRatio>1.4){
           squareWidth = this.state.width/1-widthConstant
           config = 'column'
         }else {
           squareWidth = this.state.width/2-widthConstant
           config = 'row'
         }

       return (
       <div className="container"
         style = {{
         'flex-direction': config,
         'justify-content': 'space-around',
         'align-items': 'center',
         'align-content':'center',
         }}>
         <Square value = {this.state} type = {'image'} width = {squareWidth}
         onClick={() => this.handleClick('image')}/>

         <Square value = {this.state} type = {'text'} width = {squareWidth}
         onClick={() => this.handleClick('text')}/>
         <NavButton value = {this.state} config = {config}
         onClick={() => this.handleClick('project')}/>
       </div>)
  }
}

// ============================================================
ReactDOM.render(
  <Portfolio />,
  document.getElementById('root')
);

registerServiceWorker();
