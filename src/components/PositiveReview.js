import React, { Component } from 'react';
import UploadImage from './UploadImage';
import './component.css'
import { Lightbox } from "react-modal-image";
import {
  Button,
  Row,
  Col,
} from 'antd';
import cat from '../backcat.png';
import instruction from '../instruction.png';
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
export default class PositiveReview extends Component {

  state = {
    open: false,
  }
  closeLightbox(){
    this.setState({open:false})
  }

  openLightbox(){
    this.setState({open:true})
  }

  getpopup(){
    if (this.state.open){
      return <Lightbox medium={instruction} hideZoom={true} alt="How to Leave your Review on Amazon?" onClose={()=>this.closeLightbox()}/>
    }else{
      return null
    }
  }


  render() {
    var url_country = check_url_tail(this.props.Country)
    return (
      <div id='reviewb' className="feedbox">
      <div className="contentbox">
        <p className="reviewCardStyle">
          Thank you! We are so excited you came for your Benefit! </p>

         <p className="reviewCardStyle"> You can choose to receive either a <strong>${this.props.reward} amazon gift card </strong> OR <strong>the same product</strong> (for free) </p>
         <p className="reviewCardStyle">when you complete these steps. We truly appreciate your review on Amazon as it helps us immensely!</p>
         <p className="reviewCardStyle">Please kindly support our growing business by <strong>leaving us 5 stars</strong>.</p>
         <p className="reviewCardStyle">Please save your review screenshot and return here to upload it, </p>
         <p className="reviewCardStyle">so that you can unlock your benefit! </p>
         <p className="reviewCardStyle">Thank you for your business and your time!
        </p>

        <Button type="primary" style={{marginTop:"30px"}}  className="mybtn"  target="_blank" href={`https://www.amazon.${url_country}/review/create-review/?asin=${this.props.ASIN}%3A5`}>Leave Your Review</Button>
        <div className="clean"></div>
        <a onClick={()=>this.openLightbox()} id="how_to" className="how_to" >How to Leave your Review on Amazon? </a>
  </div>


  {this.getpopup()}
  <div className="contentbox">
        <UploadImage className="uploadimage" OrderId={this.props.OrderId} ASIN={this.props.ASIN} handleReviewScreenShotSubmit={this.props.handleReviewScreenShotSubmit} OrderId={this.props.OrderId}/>
    <p style={{fontSize:"14px",marginTop:'-10px'}}>maximum file size:1 MB</p>

            <Button type="primary" className="mybtn" onClick={this.props.submitReview}>Submit</Button>
         </div>
         <div className="backimg"><img src={cat}/></div>
      </div>
    );
  }
}
