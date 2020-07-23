import React, { Component } from 'react';
import {
  Input,
} from 'antd';
import Responsive from 'react-responsive-decorator';
import config from 'react-global-configuration';
import cat from '../backcat.png';
import './component.css'
const orderCardDeskStyle = {
  color : '#333',
  fontSize : 20,
  width: '100%',
  paddingLeft: 60,
  paddingRight: 60,
  overflowX : 'auto',
  overflowY : 'auto',
}
const orderCardCellStyle = {
  color : '#333',
  fontSize : 20,
  width: '100%',
  overflowX : 'auto',
  overflowY : 'auto',
}
const orderCardSearchDeskStyle = {
  color : '#333',
  fontSize : 20,
  paddingLeft: '30%',
  paddingRight: '30%',
  overflowX : 'auto',
  overflowY : 'auto',
}
const orderCardSearchCellStyle = {
  color : '#333',
  fontSize : 20,
  overflowX : 'auto',
  overflowY : 'auto',
}
const orderCardSearchTextDeskStyle = {
  textAlign: 'center',
  color : '#333',
  fontSize : 20,
  paddingLeft: '20%',
  paddingRight: '20%',
  overflowX : 'auto',
  overflowY : 'auto',
}
const orderCardSearchTextCellStyle = {
  textAlign: '#333',
  color : 'white',
  fontSize : 20,
  overflowX : 'auto',
  overflowY : 'auto',
}
class OrderId extends Component {
  state = {
    isMobile: false
  }

  render() {
    const {
      Search
    } = Input;

    return (
      <div className = "textbox">
      <div className="innerwrapper">
      <p>Please enter your <b>Amazon ORDER ID</b> here.</p>
      <p style={{fontSize:"16px"}}>ORDER ID example: 123-1234567-1234567.</p>
        <a rel="noreferrer" style={{fontSize:"18px",display:"block",marginTop:"40px",fontStyle:"italic",textDecoration:"underline"}} href="https://www.amazon.com/gp/css/order-history?ie=UTF8&amp;amp;ref_=nav_nav_orders_first" target="_blank">Click here to find my orders »</a>

        <Search
          className="searchbar"
          placeholder="Your Amazon Order ID"
          enterButton="Search"
          size="large"
          onSearch={
            // value => this.props.checkOrderId('113-5621044-3121068')
            value => this.props.checkOrderId(value)
          }
        />
  <br/>
  
        <p className="bottomtext">Please feel free to contact us if there are any problems. <br/>Email address: {config.get('email')}</p>
        </div>
        <div className="backimg"><img src={cat}/></div>
      </div>
    );
  }
}

export default  Responsive(OrderId);
