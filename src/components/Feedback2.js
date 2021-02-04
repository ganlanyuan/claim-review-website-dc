import React, { Component } from 'react';

import './component.css'
import cat from '../backcat.png';
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import { ActionCreators } from '../actions'
import PositiveReview from './PositiveReview'
import NegtiveReview from './NegtiveReview'

class Feedback2 extends Component {
  render() {

    return (
      <div>
      {this.props.order_info['star'] >= 4 ? <PositiveReview/> : <NegtiveReview/>}
      </div>
    )

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
export default connect(mapStateToProps,mapDispatchToProps)(Feedback2);
