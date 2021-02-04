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
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import { ActionCreators } from '../actions'
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



function check_url_tail(country){
  if ( country == 'CA') {
    return 'ca'
  }else if( country == 'UK'){
    return 'co.uk'
  }else{
    return 'com'
  }
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
    if (this.props.order_info['imagelist'].length > 0) {

      message.success('Thank you for your feedback.')
      this.props.push('benefit')
    } else {
      notification['error']({
        message: 'Notification Title',
        description:
          <div><p>Please upload the screenshot of your review</p>
          </div>
      });
    }
  }




  render() {
    var country = this.props.order_info['items'][0]['country']
    var asin = this.props.order_info['items'][0]['ASIN']
    var order_id = this.props.order_info['AmazonOrderId']
    var url_country = check_url_tail(country)
    return (
      <div id='reviewb' className="feedbox">
      <div className="contentbox">
        <p className="reviewCardStyle">
          Thank you! We are so excited you came for your Benefit! </p>

         <p className="reviewCardStyle"> You can choose to receive either a <strong>${this.getRewardPrice()} amazon gift card </strong> OR <strong>the same product</strong> (for free) </p>

         <p className="reviewCardStyle">when you complete these steps. We truly appreciate your review on Amazon as it helps us immensely!</p>
         <p className="reviewCardStyle">Please kindly support our growing business by <strong>leaving us 5 stars</strong>.</p>
         <p className="reviewCardStyle">Please save your review screenshot and return here to upload it, </p>
         <p className="reviewCardStyle">so that you can unlock your benefit! </p>
         <p className="reviewCardStyle">Thank you for your business and your time!
        </p>

        <Button type="primary" style={{marginTop:"30px"}}  className="mybtn"  target="_blank" href={`https://www.amazon.${country}/review/create-review/?asin=${asin}%3A5`}>Leave Your Review</Button>

  </div>
  <div className="contentbox">
        <UploadImage className="uploadimage" upload_allowed={true} OrderId={order_id} ASIN={asin} handleReviewScreenShotSubmit={this.handleReviewScreenShotSubmit} OrderId={order_id}/>
    <p style={{fontSize:"14px",marginTop:'-10px'}}>maxiumn file size:1 MB</p>

            <Button type="primary" className="mybtn" onClick={this.submitReview.bind(this)}>Submit</Button>
            <Button type="default" className="mydefaultbtn" onClick={this.goback.bind(this)}>Go Back </Button>

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
