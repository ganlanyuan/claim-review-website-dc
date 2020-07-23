import React, {Component} from 'react';
import './component.css'
import cat from '../backcat.png';
const headStyle = {
  textAlign: "center",
  color: '#333',
  fontSize: 24,
  overflowX : 'auto',
  overflowY : 'auto',
};
class SuccessBanner extends Component {
  render() {
    return (
      <div className="feebox">
        <div className="innerwrapper">
              <div className="feedwrapper thankyou">
        <p>Thank you for you review !!</p>
        <span>We will reply to you as soon as possible.</span>
             </div>
               </div>
             {this.props.positive ? <div className="backimg forthanking"><img src={cat}/></div> : null}

      </div>
    )
  }
}

export default SuccessBanner;
