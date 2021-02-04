import React, {
  Component,
} from 'react';
import GetYourBenefit from '../components/GetYourBenefit';
import OrderId from '../components/OrderId';
import NegtiveReview from '../components/NegtiveReview';
import Feedback from '../components/Feedback';
import Feedback2 from '../components/Feedback2';
import PositiveReview from '../components/PositiveReview';
import SuccessBanner from '../components/SuccessBanner';
import Responsive from 'react-responsive-decorator';
import config from 'react-global-configuration';
import configuration from '../config/config';
import myData from '../data/reward.json';
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import { ActionCreators } from '../actions'
import {
  Card,
  message,
  notification,
  Badge,
} from 'antd';
import axios from 'axios';
import styles from './GetReview.css'
import REMOTEHOST from '../remote-host';

// const remoteUrl = process.env.NODE_ENV === 'development' ? "http://300gideon.local/" : "https://300gideon.com/"


const remoteUrl = REMOTEHOST;

const headStyle = {
  backgroundColor: 'transparent',
  textAlign: "center",
  fontSize: 24,
  width: '100%',
  border: 0,
  overflowX : 'auto',
  overflowY : 'auto',
};



const backwrap = {

  backgroundColor:'#fff',
  borderRadius:10,
  boxShadow: "1px 3px 1px rgba(0,0,0,0.4)"
};

const defaultReward = 10;


class GetReview extends Component {
  constructor(props){
    super(props);
    this.state={
      step:this.props.step_info[this.props.step_info.length - 1]
    }
  }

  componentDidMount() {

  }

  getstep(step_stack){
    if (step_stack != undefined){
      var step  = step_stack[step_stack.length - 1]
      // this.setState({step:step})
      if (step != this.state.step){
        this.setState({step:step})

      }
    }
  }

  componentDidUpdate(prevProps) {

  let step_stack = this.props.step_info
  if (step_stack != undefined){
    var step  = step_stack[step_stack.length - 1]
    // this.setState({step:step})
    if (step != this.state.step){
      this.setState({step:step})
    }
  }
}


  render() {

    const contentListNoTitle = {
      order:
        <OrderId/>
      ,
      feedback:
        <Feedback/>
      ,
      feedback2:
        <Feedback2/>
      ,
      benefit:
        <GetYourBenefit/>
      ,
      SuccessBanner:
        <SuccessBanner/>


    };


    return (

        <div className="desktop">
          <div  className="toptitle">
            <h1>Claim Your Benefit Now!!!</h1>
            {this.props.order_info['AmazonOrderId'] == '' ? null : <p className="orderside">Your Order Id: {this.props.order_info['AmazonOrderId']}</p>}

          </div>
        <div className="tablist">
        <div id="order" className="tabunit activeTab">
          <p>1. Your Order</p>
        </div>
        <div id="feedback"  className={this.props.step_info.length > 1 ? "tabunit activeTab" : "tabunit" }>
          <p>2. Your Feedback</p>
        </div>
        <div id="review" className={this.props.step_info.length > 3 && this.props.order_info['star'] >= 4 ? "tabunit activeTab" : "tabunit" }>
          <p>3. Your Benefit</p>
        </div>
        </div>

          <Card
            type="inner"
            headStyle={headStyle}>
            {contentListNoTitle[this.state.step]}

          </Card>
<div className="clear"></div>

      </div>
    )
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
export default connect(mapStateToProps,mapDispatchToProps)(GetReview);

