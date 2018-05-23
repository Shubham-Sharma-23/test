import React, { Component } from 'react';

import Nouislider from 'react-nouislider';
// import createreactclass from 'create-react-class'
//import ReactSlider from 'react-slider';

import "./style2.css";

class DateRangeSlider extends Component {
    render() {
        const toHandle = (value) => {return Math.ceil(Math.abs(value-1200))};
        const fromHandle  = (value ) => {return Math.ceil(Math.abs(value-1200))};

        return(
            <div>
            <Nouislider range={{min: 0, max: 2400}}
            start={[120, 1600]}
            connect= {true}
            tooltips 
            format=  {{
                to: toHandle,
                from: fromHandle
              }}/>
            {/* <ReactSlider defaultValue={[0, 100]} withBars/> */}
            </div>
        );
    }
}

export default DateRangeSlider;