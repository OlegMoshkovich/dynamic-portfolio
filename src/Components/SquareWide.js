import React,{Component} from 'react';
import '../index.css';

class SquareWide extends Component{

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
          <button className="square" onClick = {this.props.onClick}  style = {{width:imageWidth, transform: 'scale(1)'}}>
            <img alt='square' className = "image" style = {{width:imageWidth-400}} onLoad={this.props.loading}
              src = {require(`../images/current/project${this.props.value.projectnumber}/image${this.props.value.imagenumber}.png`)}
            />
          </button>
        </div>
      );
    }
}
}

export default SquareWide;
