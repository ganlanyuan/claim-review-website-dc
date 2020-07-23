import React, { Component } from 'react';
import {
  Input,
  Button,
  Row,
  Col,
  Radio,
  Icon,
} from 'antd';
import cat from '../backcat.png';
import './component.css'
import Responsive from 'react-responsive-decorator';

class NegtiveReview extends Component {
  state = {
    isMobile: false
  }

  render() {
    const { TextArea } = Input;
 
    return (
      <div className="feedbox feedboxb">
      <div className="feedwrapper">
        <p style={{marginBottom:'10px',fontSize:"18px",paddingRight:'30px'}}>
          We are so sorry that it seems that you do not like our product. We hope to satisfy every precious customer. And we hope you can give us some feedback so that we can offer better service.
        </p>


          <TextArea onChange = {
              value => this.props.handleFeedbackTextChange(value)
            }
            className="mytextarea"
            rows={2} placeholder="Please leave your feedback"/>
        </div>

       <div className="feedwrapper">
          <p style={{marginBottom:'10px',fontSize:"18px",paddingRight:'30px'}}>Please leave your name and email.</p>
 
          <Input
            onChange = {
              value => this.props.handleUserNameChange(value)
            }
            size='large'
            className="myinput"
            placeholder="Enter your username"
            prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
          />
          <br/>
         
          <Input
            onChange = {
              value => this.props.handleEmailChange(value)
            }
            className="myinput"
            size='large'
            placeholder="Enter your Email"
            prefix={<Icon type="mail" style={{ color: 'rgba(0,0,0,.25)' }} />}
          />
 <br/>
           <Button type="primary"  className="mybtn" onClick={this.props.submitFeedback}>Submit</Button>
        
        </div>
  
    
           
    
      </div>
    );
  }
}
export default Responsive(NegtiveReview);
