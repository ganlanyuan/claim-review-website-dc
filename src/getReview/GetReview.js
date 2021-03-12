import React, {
  Component,
} from 'react';
import Benefit from '../components/Benefit';
import GetBenefit from '../components/GetBenefit';
import OrderId from '../components/OrderId';
import NegtiveReview from '../components/NegtiveReview';
import Feedback from '../components/Feedback';

import PositiveReview from '../components/PositiveReview';
import SuccessBanner from '../components/SuccessBanner';
import Responsive from 'react-responsive-decorator';
import config from 'react-global-configuration';
import myData from '../data/reward.json';
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
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

import logo from '../logo.png'



const remoteUrl = config.get('remotehost')

const headStyle = {
  backgroundColor: 'transparent',
  textAlign: "center",
  fontSize: 24,
  width: '100%',
  border: 0,
  overflowX: 'auto',
  overflowY: 'auto',
};



const backwrap = {

  backgroundColor: '#fff',
  borderRadius: 10,
  boxShadow: "1px 3px 1px rgba(0,0,0,0.4)"
};

const defaultReward = 10;


class GetReview extends Component {
  constructor(props) {
    super(props);
    this.state = {
      step: this.props.step_info[this.props.step_info.length - 1]
    }
  }

  componentDidMount() {

  }


  componentDidUpdate(prevProps) {

    let step_stack = this.props.step_info
    if (step_stack != undefined) {
      var step = step_stack[step_stack.length - 1]
      // this.setState({step:step})
      if (step != this.state.step) {
        this.setState({ step: step })
      }
    }
  }

  stephighlightAdjust() {
    return this.props.step_info.includes("negativeReview") ? 1 : 0
  }


  render() {

    const contentListNoTitle = {
      order: <OrderId/>,
      feedback: <Feedback/>,
      benefit: <Benefit/>,
      getbenefit: <GetBenefit/>,
      negativeReview: <NegtiveReview/>,
      SuccessBanner: <SuccessBanner/>


    };

    return (

      <div className="desktop">
        <div className="logoline">
          <img src={logo}/>
        </div>
        <div className="toptitle">
          <h1>Claim Your Benefit Now!!!</h1>
        </div>
        <div className="panel">

          <div className="tablist">
            <div id="order" className={this.props.step_info.length > 1 ? "tabunit passedTab" : "tabunit activeTab" }>
              Your Order
            </div>
            <div id="feedback"  className={this.props.step_info.length > 2 ? "tabunit passedTab" : this.props.step_info.length > 1 ? "tabunit activeTab" : "tabunit" }>
              Your Feedback
            </div>
            <div id="benefit" className={this.props.step_info.length > 3 && this.props.order_info['star'] > 3 ? "tabunit passedTab" : this.props.step_info.length > 2 && this.props.order_info['star'] > 3 ? "tabunit activeTab" : "tabunit" }>
              Your Benefit
            </div>
            <div id="getbenefit" className={this.props.step_info.length > 3 && this.props.order_info['star'] > 3 ? "tabunit activeTab" : "tabunit" }>
              Unlock Benefit
            </div>
          </div>
          <Card
            type="inner"
            headStyle={headStyle}>
            {contentListNoTitle[ this.state.step]}

          </Card>
          <div className="clear"></div>
        </div>

      </div>
    )
  }
}


function mapStateToProps(state) {
  return {
    order_info: state.order_info,
    step_info: state.step_info,
    user_info: state.user_info
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(ActionCreators, dispatch);
}
export default connect(mapStateToProps, mapDispatchToProps)(GetReview);