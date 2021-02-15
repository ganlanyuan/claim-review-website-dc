import React, { Component } from 'react';
import {
  Input,
  Button,
  Row,
  Col,
  message,
  notification,
  Radio,
  Icon,
} from 'antd';
import cat from '../backcat.png';
import './component.css'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import { ActionCreators } from '../actions'
import Responsive from 'react-responsive-decorator';

class NegtiveReview extends Component {

  constructor(props){
    super(props);
    this.state={
      feedbackText:this.props.user_info['feedbackText'],
      userName:this.props.user_info['userName'],
      email:this.props.user_info['email'],

    }
  }


  goback(){
    this.props.back()
  }

  handleUserNameChange = e =>{
    this.setState({
      userName: e.target.value,
    })
  }

  handleEmailChange = e =>{
    this.setState({
      email: e.target.value,
    })
  }

  handleFeedbackTextChange = e => {
    this.setState({feedbackText: e.target.value})
  }



  submitFeedback(){
    if (this.state.feedbackText !== "") {
        this.props.setUserInfo(this.state.userName,this.state.email)
        this.props.setBenefit(this.state.feedbackText)
        this.props.send_feedback()
        this.props.push('SuccessBanner')
    } else {
      notification['error']({
        message: 'Please leave your feedback.',
        description:
          <div><p>Please tell us how to solve your problem and leave your name, email so we can contact you soon.</p>
          </div>
      });
    }
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
              value => this.handleFeedbackTextChange(value)
            }
            className="mytextarea"
            rows={2} placeholder="Please leave your feedback"/>
        </div>

       <div className="feedwrapper">
          <p style={{marginBottom:'10px',fontSize:"18px",paddingRight:'30px'}}>Please leave your name and email.</p>
 
          <Input
            onChange = {
              value => this.handleUserNameChange(value)
            }
            size='large'
            className="myinput"
            placeholder="Enter your username"
            prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
          />
          <br/>
         
          <Input
            onChange = {
              value => this.handleEmailChange(value)
            }
            className="myinput"
            size='large'
            placeholder="Enter your Email"
            prefix={<Icon type="mail" style={{ color: 'rgba(0,0,0,.25)' }} />}
          />
 <br/>
           <Button type="primary"  className="mybtn" onClick={this.submitFeedback.bind(this)}>Next</Button>
           <Button type="default" className="mydefaultbtn" onClick={this.goback.bind(this)}>Go Back </Button>
        </div>




      </div>
    );
  }
}
function mapStateToProps(state){
  return{
    order_info:state.order_info,
    step_info:state.step_info,
    user_info:state.user_info

  }
}
function mapDispatchToProps(dispatch) {
  return bindActionCreators(ActionCreators, dispatch);
}
export default connect(mapStateToProps,mapDispatchToProps)(NegtiveReview);
