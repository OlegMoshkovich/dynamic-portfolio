import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import registerServiceWorker from './registerServiceWorker';

const widthConstant = 60;
const heightConstant = 60;

function Circle(props){
    let width = props.width/110
    let widthSelected = props.width/110
    let circleItems = [];
      for (var i = 1; i < props.quantity+1; i++) {
        if(i === props.number){
          circleItems.push(<img className = "image" style = {{width:widthSelected, height:widthSelected,margin:2}}
            src = {require(`./images/icons/circle_filled.png`)}
              />);
        }else{
          circleItems.push(<img className = "image" style = {{width:width, height:width,margin:2}}
            src = {require(`./images/icons/circle.png`)}
          />);
        }
      }
      return (
        <div style = {{marginTop:5, marginLeft:0}}>{circleItems}</div>
      );
}

function SquareImage(props){
    const imageWidth = props.value.width/2-widthConstant;
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

function SquareText(props){
  const imageWidth = props.value.width/2-widthConstant;
  const imageHeight = props.value.width/2-heightConstant;
    return (
      <div>
        <button  className="square" style = {{width:imageWidth, height:imageHeight}} onClick = {props.onClick} >
          <img className = "image" style = {{width:imageWidth, height:imageHeight}}
            src = {require(`./images/short/text/project${props.value.projectnumber}/image${props.value.textnumber}.png`)}
          />
        </button>
        <Circle quantity = {props.value.textQuantity} number = {props.value.textnumber} width= {props.value.width}/>
      </div>
    );
}


function SquareImageIphone(props){
  const imageWidth = props.value.width/1.8;
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
  const imageWidth = props.value.width/1.8;
  const imageHeight = props.value.width/1.8;
    return (
      <div>
        <button  className="square" style = {{width:imageWidth, height:imageHeight,'padding-top':10}} onClick = {props.onClick} >
          <img className = "image" style = {{width:imageWidth, height:imageHeight}}
            src = {require(`./images/short/text/project${props.value.projectnumber}/image${props.value.textnumber}.png`)}
          />
        </button>
        <Circle quantity = {props.value.textQuantity} number = {props.value.textnumber} width= {props.value.width}/>
      </div>
    );
}
function SquareProject(props){
    let path = props.value.projectnumber === 0 ? './images/icons/project.png' : './images/icons/next.png';
    return (
      <button  className="square" onClick = {props.onClick}>
        <img style ={{width:props.value.width/15}}
          src = {require(`${path}`)}
        />
      </button>
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
    // let imageQuantity = [3,6,5,8,3,6,1,6];
    // let textQuantity = [5,2,4,6,5,3,2,2];
    let imageQuantity = [2,4,5,4,4];
    let textQuantity = [2,1,1,1,1,1];
    // let imageQuantity = [1,1,1,1,1];
    // let textQuantity =  [1,1,1,1,1];

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
      if(type === 'image'){

        return (
          <SquareImage value = {this.state}
          onClick={() => this.handleClick('image')}
        />
      )};

      if(type === 'text'){
        return (
          <SquareText value = {this.state}
          onClick={() => this.handleClick('text')}
        />
        )
      }
      if(type === 'project'){
        return (
          <div style ={{'position':'absolute','margin-top':this.state.width/6, 'margin-left':this.state.width/2.4,'background':'transparent'}} >
            <SquareProject value = {this.state}
            onClick={() => this.handleClick('project')}
            />
          </div>
        )
      }

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
          <div style ={{'background':'transparent','padding-top':40}} >
            <SquareProjectIphone value = {this.state}
            onClick={() => this.handleClick('project')}
            />
          </div>
        )
      }

  }

  render() {


    const sayHello = () => {
         console.log("I am printing width:"+this.state.width)
         console.log("I am printing height:"+this.state.height)
         console.log("I am printing aspect ratio:"+this.state.height/this.state.width)
        let aspectRatio = this.state.height/this.state.width
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
             {this.renderSquare('image')}
             {this.renderSquare('text')}
             {this.renderSquare('project')}
           </div>)

         }
     }
    const sayBye = () => {
         return 'Hello';
     }
    return (

      <div>
        {sayHello()}
      </div>



    );
  }
}

// ============================================================
ReactDOM.render(
  <Portfolio />,
  document.getElementById('root')
);

registerServiceWorker();
