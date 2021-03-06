import React,{Component} from 'react';
import '../index.css';

class Square extends Component{

  constructor(props) {
    super(props);
    this.state = {
    isLoading:true,
    };
    this.setLoading = this.setLoading.bind(this);
  }

setLoading(){
  this.setState({isLoading:false})
}
render(){
    const imageWidth = this.props.width;

    if(this.props.type === 'image'){
      return (
        <div>
          <button className="square" onClick = {this.props.onClick}  style = {{width:imageWidth, height:imageWidth, transform: 'scale(1)'}}>
            <img alt='square' className = "image" style = {{width:imageWidth, height:imageWidth}} onLoad={this.props.loading}
              src = {require(`../images/short/image/project${this.props.value.projectnumber}/image${this.props.value.imagenumber}.png`)}
            />
          </button>
        </div>
      );
    }else if(this.props.type === 'text'){
      return (
        <div>
          <button  className="square" style = {{width:imageWidth, height:imageWidth}} onClick = {this.props.onClick} >
            <img alt='square text' className = "image" style = {{width:imageWidth, height:imageWidth, transform: 'scale(1)'}}
              src = {require(`../images/short/text/project${this.props.value.projectnumber}/image${this.props.value.textnumber}.png`)}
            />
          </button>
        </div>
      );
    }
}
}

export default Square;
