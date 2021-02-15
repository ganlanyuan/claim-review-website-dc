import React, { Component } from 'react';
import {
  Input,Icon,Button,notification
} from 'antd';
import Responsive from 'react-responsive-decorator'
import config from 'react-global-configuration'
import cat from '../backcat.png'
import './component.css'

import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import { ActionCreators } from '../actions'

class OrderId extends Component {
  constructor(props){
    super(props);
    this.state={
      amazonOrderId:this.props.order_info['AmazonOrderId'],
      email:this.props.user_info['email']
    }
  }
   
  ValidateEmail(mail) 
  {
   if (/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(mail))
    {
      return (true)
    }
       notification['error']({
        message: 'You have entered an invalid email address!'
      })
      return (false)
  }

  checkOrderId(){
    var orderId = this.state.amazonOrderId
 
      orderId = orderId.replace(/[^0-9]/g, '');
      var newOrderId = orderId.slice(0,3) + '-' + orderId.slice(3,10) + '-' + orderId.slice(10,17);
      this.props.sendOrderId(newOrderId)
  }

  handleEmailChange = e =>{
    this.setState({
      email: e.target.value,
    })
  }

  handleAmazonOrderIdChange = e =>{
    this.setState({
      amazonOrderId: e.target.value,
    })
  }

  render() {
    const {
      Search
    } = Input;

    return (
      <div className = "textbox">

      <p>Please enter your <b>Amazon ORDER ID</b> here.</p>
      <p style={{fontSize:"14px"}}>ORDER ID example: 123-1234567-1234567.</p>
        <a rel="noreferrer" style={{fontSize:"16px",display:"block",marginTop:"40px",fontStyle:"italic",textDecoration:"underline"}} href="https://www.amazon.com/gp/css/order-history?ie=UTF8&amp;amp;ref_=nav_nav_orders_first" target="_blank">Click here to find my orders »</a>

  <Input
          onChange = {
            value => this.handleAmazonOrderIdChange(value)
          }
          className="searchbar"
          size='large'
          value = {this.state.amazonOrderId}
          placeholder="Enter your Amazon Order ID"
          prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
        />
      <div className="clear"></div>

  <br/>
  <div className="clear"></div>
 <Button type="primary" style={{width:"100px",height:"40px",fontSize:"16px",marginTop:"20px"}} onClick = {()=>this.checkOrderId()}>Search</Button>
   <br/>
  <div className="backimg"><img src={cat}/></div>
        <p className="bottomtext">Please feel free to contact us if there are any problems. <br/>Email address: {config.get('email')}</p>
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
export default connect(mapStateToProps,mapDispatchToProps)(OrderId);

