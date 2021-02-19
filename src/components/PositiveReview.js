import React, { Component } from 'react';
import UploadImage from './UploadImage';
import './component.css'
import {
  Button,
  Row,
  message,
  notification,
  Col,
} from 'antd';
import cat from '../backcat.png';
import screenshota from '../screenshot.jpg';
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import { ActionCreators } from '../actions'

import config from 'react-global-configuration'


const reviewCardStyle = {
  color : '#333',
  fontSize : 14,
  // paddingLeft: '30%',
  // paddingRight: '30%',
  margin: 'auto',
  width: '70%',
  overflowX : 'auto',
  overflowY : 'auto',
}


class PositiveReview extends Component {

  getRewardPrice(){
    var order_reward = this.props.order_info['reward']
    if (order_reward == null){
      return 10
    }else{
      return order_reward
    }
  }

  goback(){
    this.props.back()
  }

  submitReview(){
    this.props.push('SuccessBanner')
  }

  check_url_tail(country){
      if ( country == 'CA') {
        return 'ca'
      }else if( country == 'UK'){
        return 'co.uk'
      }else{
        return 'com'
      }
    }


  render() {
    var country = this.check_url_tail(this.props.order_info['items'][0]['country'])

    var asin = this.props.order_info['items'][0]['ASIN']
    var order_id = this.props.order_info['AmazonOrderId']

    return (
      <div id='reviewb' className="feedbox">
      <div className="contentbox">
        <p className="reviewCardStyle1">
         Greetings! Thank you for providing invaluable feedback about our product. We always strive to innovate and improve our products so that they will do more to improve the lives of our users. We will incorporate your feedback into our future product design and planning. 

 </p>

 <p className="reviewCardStyle1">As a new start-up company with several hard-working motivated staff members, we want you to know that low ratings might cause Amazon to limit the selling rights of our new store. We would like to ask if you could be kind and fair with your reviews so that we may have the opportunity to develop and improve our business services moving forward.

</p>

<p className="reviewCardStyle1">If you would kindly take a small amount of time to <strong>leave us a 5-star review</strong> on Amazon, it will not only help us serve you better, but will also help the consumer. An extra <strong>${config.get("extraAward")}</strong> Bonus will be given if you could include a video or 3-5 photos in your review.
</p>


        <Button type="primary" style={{marginTop:"20px",marginBottom:"20px"}}  className="mybtn mybtna"  target="_blank" href={`https://www.amazon.${country}/review/create-review/?asin=${asin}%3A5`}>Click To Leave A 5-Star Review
</Button>
<p className="reviewCardStyle1"> After the review is posted, you will receive a confirmation email from “Amazon Review” in two to three days. Please forward this confirmation Email to <strong>{config.get("email")}</strong>.
</p>

<p className="reviewCardStyle1">We suggest you record the Email address above for further reference. We have provided a sample of the confirmation email you’ll receive below.

</p>

<img src={screenshota} className="screenshotamazon"/>
<p className="reviewCardStyle1 special1" >We sincerely appreciate your business, and If you have any additional questions about this survey please contact us via Email at <strong>{config.get("email")}</strong></p>
  </div>
  <div className="contentbox">
        

         </div>
         <div className="backimg"><img src={cat}/></div>
      </div>
    );
  }
}
function mapStateToProps(state){
  return{
    order_info:state.order_info,
    step_info:state.step_info
  }
}
function mapDispatchToProps(dispatch) {
  return bindActionCreators(ActionCreators, dispatch);
}
export default connect(mapStateToProps,mapDispatchToProps)(PositiveReview);
