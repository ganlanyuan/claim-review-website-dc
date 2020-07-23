import React, {Component} from 'react';
import { Input, Radio, Icon, Row, Button, Col } from 'antd';
import Responsive from 'react-responsive-decorator';
import cat from '../backcat.png';
class GetYourBenefit extends Component {

  constructor(props){
    super(props);
    this.state={
      value: 0
    }
  }

  state = {
    isMobile: false
  }

  componentDidMount() {

  }

  render() {

    return (
    
      <div className="feedbox">
         <div className="innerwrapper">
      <div className="feedwrapper">
        <span style={{marginBottom:"20px"}}>Please select your benefit and enter your name, email to receive it.</span>
          <Radio.Group onChange={this.props.handleBenefitMethod} value={this.props.benefit}>
            <Radio value={"Same Free Product"}>
            Same Free Product
            </Radio>
            <Radio value={"Amazon Gift Card"}>
            ${this.props.reward} Amazon Gift Card
            </Radio>
          </Radio.Group>
      </div>
      <div className="feedwrapper">
        <Input
          onChange = {
            value => this.props.handleUserNameChange(value)
          }
          className="myinput"
          size='large'
          placeholder="Enter your username"
          prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
        />
      <br/>
        <Input
          onChange = {
            value => this.props.handleEmailChange(value)
          }
          className="myinput"
          size='large'
          placeholder="Enter your Email"
          prefix={<Icon type="mail" style={{ color: 'rgba(0,0,0,.25)' }} />}
        />
            <br/>
        <Button type="primary" className="mybtn" onClick={this.props.handleInformationSubmit}>Submit</Button>
    </div>
            </div>
    
       <div className="backimg"><img src={cat}/></div>
      </div>
    )
  }
}

export default Responsive(GetYourBenefit);
