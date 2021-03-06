import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import registerServiceWorker from './registerServiceWorker';
import Square from './Components/Square'
import Circle from './Components/Circle'
import SquareWide from './Components/SquareWide'
import CircleWide from './Components/CircleWide'

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
      imageQuantity:10,
      textQuantity:5,
      isLoading:true,
      count:0
    };
    this.updateWindowDimensions = this.updateWindowDimensions.bind(this);
    this.handleCircleClick = this.handleCircleClick.bind(this)
    this.handlePrevious = this.handlePrevious.bind(this)
    this.isLoading = this.isLoading.bind(this)
    this.cycle = this.cycle.bind(this)

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


  cycle(index){

    let order = [9,3,7,11,8,9,1]
    let orderText = [2,2,2,2,2,2,5]
    if (index >= order.length) {
      this.setState({
        imagenumber:1
      })
        return;
    }

    console.log(order[index]);
    this.setState({
      imagenumber:order[index],
      textnumber:orderText[index]

    })
    index += 1;
    setTimeout(this.cycle.bind({}, index), 1300);

  }

  handleCircleClick(number,type){
    type === 'image' ? this.setState({imagenumber:parseInt(number,10)}) : this.setState({textnumber:parseInt(number,10)})
  }

 handleInfo(){
       this.setState({
       projectnumber:0,
       textnumber:1,
       imagenumber:1,
       imageQuantity:11,
       textQuantity:5,
     })
 }


  handlePrevious(){
    let imageQuantity = [12,11,7,10];
    let textQuantity = [5,10,6,10];
        this.setState({
        projectnumber:this.state.projectnumber-1,
        textnumber:1,
        imagenumber:1,
        imageQuantity:imageQuantity[this.state.projectnumber-1],
        textQuantity:textQuantity[this.state.projectnumber-1]
      })

  if(this.state.projectnumber === 3 ){ // if the project number is reached reset the project number
        this.setState({
        projectnumber:2,
        imageQuantity:imageQuantity[2],
        textQuantity:textQuantity[2]
      })
    }
  if(this.state.projectnumber === 1 ){ // if the project number is reached reset the project number
        this.setState({
        projectnumber:3,
        imageQuantity:imageQuantity[3],
        textQuantity:textQuantity[3]
      })
    }
  }

  handleNext(){
    let imageQuantity = [12,11,7,10];
    let textQuantity = [5,10,6,10];


        this.setState({
        projectnumber:this.state.projectnumber+1,
        textnumber:1,
        imagenumber:1,
        imageQuantity:imageQuantity[this.state.projectnumber+1],
        textQuantity:textQuantity[this.state.projectnumber+1]
      })


  if(this.state.projectnumber === 3 ){ // if the project number is reached reset the project number
        this.setState({
        projectnumber:1,
        imageQuantity:imageQuantity[1],
        textQuantity:textQuantity[1]
      })
    }
  }


  isLoading(){
   this.setState({isLoading:false})
  }

  handleClick(square){
    this.setState({isLoading:true})
    let imageQuantity = [12,11,7,10];
    let textQuantity = [5,10,6,10];

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

        // if(this.state.textnumber === 1 && this.state.projectnumber === 0 && this.state.count === 0 ){
        //   this.cycle(1)
        //   this.setState({
        //     count:1
        //   })
        // }

        if(this.state.textnumber === this.state.textQuantity ){
          if(this.state.projectnumber===0){
            this.setState({
            textnumber:1
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
           squareWidth = this.state.width
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

             <SquareWide value = {this.state} type = {'image'} width = {squareWidth}
             onClick={() => this.handleClick('image')} loading = {() =>this.isLoading()}/>
             <CircleWide quantity = {this.state.imageQuantity} number = {this.state.imagenumber} width= {circleWidth} type ={'image'}
             updateParentComponent={this.handleCircleClick}/>
           </div>



           <NavButton value = {this.state} config = {config}
           onClick={() => this.handleClick('project')} play={()=>this.cycle(0)} next={()=> this.handleNext()} prev={()=> this.handlePrevious()} info={()=> this.handleInfo()}/>



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
