import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import registerServiceWorker from './registerServiceWorker';

import Square from './Components/Square'
import NavButton from './Components/NavButton'
import Circle from './Components/Circle'

class Portfolio extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      textnumber:1,
      imagenumber:1,
      projectnumber:0,
      width: 0,
      height: 0,
      imageQuantity:12,
      textQuantity:6,
      isLoading:true

    };
    this.updateWindowDimensions = this.updateWindowDimensions.bind(this);
    this.handleCircleClick = this.handleCircleClick.bind(this)
    this.handlePrevious = this.handlePrevious.bind(this)

  }
  componentDidMount() {
    console.log('in the beginning of the component did mount is loading', this.state.isLoading)
    this.updateWindowDimensions();
    this.setState({
      isLoading:false
    })
    window.addEventListener('resize', this.updateWindowDimensions);
    console.log('at the end of the component did mount is loading', this.state.isLoading)
  }
  componentWillUnmount() {
    window.removeEventListener('resize', this.updateWindowDimensions);
  }
  updateWindowDimensions() {
    this.setState({ width: window.innerWidth, height: window.innerHeight });
  }


  handleCircleClick(number,type){
    type === 'image' ? this.setState({imagenumber:parseInt(number)}) : this.setState({textnumber:parseInt(number)})
 }

 handleInfo(){
   let imageQuantity = [12,10,7];
   let textQuantity = [6,10,6];
   let projectQuantity = 2;

       this.setState({
       projectnumber:0,
       textnumber:1,
       imagenumber:1,
       imageQuantity:12,
       textQuantity:6,
       loaded: false
     })

 }


  handlePrevious(){
    let imageQuantity = [12,10,7];
    let textQuantity = [6,10,6];
    let projectQuantity = 2;

        this.setState({
        projectnumber:this.state.projectnumber-1,
        textnumber:1,
        imagenumber:1,
        imageQuantity:imageQuantity[this.state.projectnumber-1],
        textQuantity:textQuantity[this.state.projectnumber-1]
      })

  if(this.state.projectnumber === 2 ){ // if the project number is reached reset the project number
        this.setState({
        projectnumber:1,
        imageQuantity:imageQuantity[1],
        textQuantity:textQuantity[1]
      })
    }
  if(this.state.projectnumber === 1 ){ // if the project number is reached reset the project number
        this.setState({
        projectnumber:2,
        imageQuantity:imageQuantity[2],
        textQuantity:textQuantity[2]
      })
    }
  }

  handleNext(){
    let imageQuantity = [12,10,7];
    let textQuantity = [6,10,6];
    let projectQuantity = 2;

        this.setState({
        projectnumber:this.state.projectnumber+1,
        textnumber:1,
        imagenumber:1,
        imageQuantity:imageQuantity[this.state.projectnumber+1],
        textQuantity:textQuantity[this.state.projectnumber+1]
      })


  if(this.state.projectnumber === 2 ){ // if the project number is reached reset the project number
        this.setState({
        projectnumber:1,
        imageQuantity:imageQuantity[1],
        textQuantity:textQuantity[1]
      })
    }
  }


  handleClick(square){

    let imageQuantity = [12,10,7];
    let textQuantity = [6,10,6];
    let projectQuantity = 2;

    if(square === 'image'){
        this.setState({
        imagenumber:this.state.imagenumber+1
        })
        if(this.state.imagenumber === this.state.imageQuantity){

          if(this.state.projectnumber===0){
            this.setState({
            imagenumber:2
            })
          }else{
            this.setState({
            imagenumber:1
            })
          }



            }}

    else if(square === 'text'){
          this.setState({
          textnumber:this.state.textnumber+1
        })

        if(this.state.textnumber === this.state.textQuantity ){
          if(this.state.projectnumber===0){
            this.setState({
            textnumber:2
            })
          }else{
            this.setState({
            textnumber:1
            })
          }

            }
      }else{ // if the project number chanmges reset the counters to 1 and 1
          this.setState({
          projectnumber:this.state.projectnumber+1,
          textnumber:1,
          imagenumber:1,
          imageQuantity:imageQuantity[this.state.projectnumber+1],
          textQuantity:textQuantity[this.state.projectnumber+1]
        })


  }}

  render() {
    console.log('loading status from the index',this.state.isLoading)

         const widthConstant = 60;
         let aspectRatio = this.state.height/this.state.width
         let squareWidth;
         let circleWidth;
         let config;

         if(aspectRatio>1.4){
           squareWidth = this.state.width/1.1-widthConstant
           circleWidth = this.state.width/.9-widthConstant
           config = 'column'
         }else {
           squareWidth = this.state.width/2-widthConstant
           circleWidth = this.state.width/2.5-widthConstant
           config = 'row'
         }

       return (

       <div className="container"
         style = {{
         'flexDirection': config,
         'justifyContent': 'space-around',
         'alignItems': 'center',
         'alignContent':'center',
         }}>

           <div
           style = {{
           'paddingTop': 30
           }}>

               <Square value = {this.state} type = {'image'} width = {squareWidth}
               onClick={() => this.handleClick('image')} onLoad={this._onLoad}/>




             <Circle quantity = {this.state.imageQuantity} number = {this.state.imagenumber} width= {circleWidth} type ={'image'}
             updateParentComponent={this.handleCircleClick}/>
           </div>

           <div
           style = {{
           'paddingTop': 30
           }}>
             <Square value = {this.state} type = {'text'} width = {squareWidth}
             onClick={() => this.handleClick('text')} />
             <Circle quantity = {this.state.textQuantity} number = {this.state.textnumber} width= {circleWidth} type ={'text'}
             updateParentComponent={this.handleCircleClick}/>
           </div>

           <NavButton value = {this.state} config = {config}
           onClick={() => this.handleClick('project')} next={()=> this.handleNext()} prev={()=> this.handlePrevious()} info={()=> this.handleInfo()}/>
       </div>

     )
  }
}

// ============================================================
ReactDOM.render(
  <Portfolio />,
  document.getElementById('root')
);

registerServiceWorker();
