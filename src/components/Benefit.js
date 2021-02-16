import React, {Component} from 'react';
import { Input, Radio, Icon, Row, Button, Col,message,notification } from 'antd';
import Responsive from 'react-responsive-decorator';
import cat from '../backcat.png';
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import { ActionCreators } from '../actions'
import config from 'react-global-configuration'
class Benefit extends Component {

  constructor(props){
    super(props);
    this.state={
      benefit:this.props.order_info['benefit'],
      userName:this.props.user_info['userName'],
      email:this.props.user_info['email'],
    }
  }

  componentDidMount() {

  }

  validateEmail(email) {
    var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
  }

  handleInformationSubmit(){
    var seller_id = this.props.order_info['seller_id']
    var asin = this.props.order_info['items'][0]['ASIN']
    var country = this.props.order_info['items'][0]['country']
  
    var order_id = this.props.order_info['AmazonOrderId']
    console.log(this.state.benefit)
    if (this.state.benefit !== "" && this.state.email !== "" && this.state.userName !== ""){
      if (this.validateEmail(this.state.email)) {

        this.props.setUserInfo(this.state.userName,this.state.email)
        this.props.setBenefit(this.state.benefit)
        this.props.send_feedback()
        this.props.gotoGetBenefit()
      } else {
        notification['error']({
          message: 'Check your email!',
          description:
            <div>
              <p>Please check your email, the format is not right.</p>
            </div>
        });
      }
    } else {
      notification['error']({
        message: 'Notification Title',
        description:
          <div><p>Please check if you have fulfill the user name, email, and benefit method</p>
          </div>
      });
    }
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

  handleBenefitMethod= e =>{
    this.setState({
      benefit: e.target.value,
    })
  }

  goback(){
    this.props.back()
  }

  render() {

    return (

      <div className="feedbox">
      <div className="feedwrapper">
        <span style={{marginBottom:"20px"}}>Please select your benefit and enter your name, email to receive it.</span>
              <br/>
          <Radio.Group onChange={this.handleBenefitMethod} value={this.state.benefit}>
            <Radio value={"Same Free Product"}>
            Same Free Product
            </Radio>
            <Radio value={`Amazon Gift Card`}>
            ${this.props.order_info['reward']} Amazon Gift Card
            </Radio>
          </Radio.Group>
      </div>

      <div className="feedwrapper">
        <Input
          onChange = {
            value => this.handleUserNameChange(value)
          }
          className="myinput"
          size='large'
          value = {this.state.userName}
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
       
          value = {this.state.email}
          placeholder="Enter your Email"
          prefix={<Icon type="mail" style={{ color: 'rgba(0,0,0,.25)' }} />}
        />
            <br/>
        <Button type="primary" style={{marginTop:"20px"}} className="mybtn" onClick={this.handleInformationSubmit.bind(this)}>Submit</Button>
        <Button type="default" className="mydefaultbtn" onClick={this.goback.bind(this)}>Go Back </Button>
          <p className="bottomtext bottomtextb"><strong>{config.get('source')}</strong> is the sole owner of information collected from its customers. We will not sell or share this information with third parties in ways different from what is disclosed in our Privacy Policy.</p>


    </div>


       <div className="backimg"><img src={cat}/></div>
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
export default connect(mapStateToProps,mapDispatchToProps)(Benefit);