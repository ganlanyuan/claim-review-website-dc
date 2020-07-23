import React from 'react';
import GetReview from './getReview/GetReview';
import Background from './background.jpg';
import { OverflowDetector } from 'react-overflow';
import style from './index.css'

function handleOverflowChange(isOverflowed) {
  console.log(isOverflowed);
}
 
//test 2

function App() {
  return (
    <div

      className="overwapper"
    >

        <GetReview/>

    </div>

  );
}

export default App;
