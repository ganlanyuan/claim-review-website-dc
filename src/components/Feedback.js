import React, { Component } from 'react';
import {
  Card,
  Button,
  Row,
  Col,
  Radio,
  Rate,
} from 'antd';
import Responsive from 'react-responsive-decorator';
import './component.css'
import cat from '../backcat.png';
const desc = ['terrible', 'too bad', 'bad', 'normal', 'good'];
class Feedback extends Component {


 
  render() {
  
 
    return (
      <div className="feedbox">
      <div className="innerwrapper">
      <div className="feedwrapper">
     
          <p className="questitle">How long have you been using it?</p>
          <Radio.Group onChange={this.props.handlePeriodChange} value={this.props.period}>
            <Radio className="opt"  value={"less than 7 days"}>
            Just started (less than 7 days)
            </Radio>
            <Radio className="opt"  value={"for a while"}>
            I've been using it for a while!
            </Radio>
            <Radio  className="opt" value={"more than 60 days"}>
            I have been using it for more than 60 days.
            </Radio>
          </Radio.Group>
        </div>  

        <div className="feedwrapper">
        <p className="questitle">How satisfied are you with our product?</p>
        
        <Rate tooltips={desc} onChange={this.props.handleRateChange} value={this.props.star} />
     
        </div>
        <div className="feedwrapper">
            <Button type="primary" className="mybtn" onClick={this.props.checkFeedback}>Next</Button>
       </div>
       </div>
         <div className="backimg"><img src={cat}/></div>
       </div>
    );
  }
}

export default  Responsive(Feedback);
