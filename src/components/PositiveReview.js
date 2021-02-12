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
    this.props.send_feedback()
    // if (this.props.order_info['imagelist'].length > 0) {

    //   message.success('Thank you for your feedback.')
    //   // this.props.push('benefit')
    //   this.props.send_feedback()
    // } else {
    //   notification['error']({
    //     message: 'Notification Title',
    //     description:
    //       <div><p>Please upload the screenshot of your review</p>
    //       </div>
    //   });
    // }
  }




  render() {
    var country = this.props.order_info['items'][0]['country']
    var asin = this.props.order_info['items'][0]['ASIN']
    var order_id = this.props.order_info['AmazonOrderId']
    var url_country = check_url_tail(country)
    return (
      <div id='reviewb' className="feedbox">
      <div className="contentbox">
        <p className="reviewCardStyle1">
         Dear customer, thank you so much for your precious feedback about our product! We have recorded it and will continue to improve our product according to your suggestions!

 </p>

 <p className="reviewCardStyle1">We are a newly start up business, with several young staff working together, trying everything possible to provide the best products and the most satisfying services to our customers. But as you may not know, low rating might cause Amazon to limit the selling rights of our new store, so we will never have any chance to develop and improve our business any more.
</p>

<p className="reviewCardStyle1">In this case, we want to kindly ask, could you do us a favor to <strong>leave us a 5-star review</strong> on Amazon? It will greatly help us to serve you better! Extra <strong>CDN$5</strong> Bonus will be given if you could include a video or 3-5 photos in your review.
</p>


        <Button type="primary" style={{marginTop:"20px",marginBottom:"20px"}}  className="mybtn mybtna"  target="_blank" href={`https://www.amazon.${country}/review/create-review/?asin=${asin}%3A5`}>Click To Leave A 5-Star Review
</Button>
<p className="reviewCardStyle1"> After the review is posted, you will receive one confirmation email from “Amazon Review” in 2-3 days, please forward this confirmation email to <strong>{process.env.REACT_APP_contact_email}</strong> , then we will send you the gift card or free product immediately!
</p>

<p className="reviewCardStyle1">We suggest you record the email address above for further reference. And here’s a sample of the confirmation email you’ll receive:
</p>

<img src={screenshota} style={{width:"400px"}}/>
  </div>
  <div className="contentbox">
        

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
