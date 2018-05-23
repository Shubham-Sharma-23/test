import React, { Component } from 'react';

import RheoStatAirBb from 'rheostat';
import './RheoSlider.css';

class MyProgress extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div
                {...this.props}
                style={{
                ...this.props.style,
                backgroundColor: '#bbce36',
                cursor: 'ew-resize',
                height: 24,
                zIndex: 2,
                paddingRight: 20,
                marginLeft: -8
                }}
            ></div>
        );
    } 
}

class MyHandle extends Component {
    constructor(props) {
        super(props);
    }

    convertTo12(timein24) {
        let hours = Math.floor(timein24 / 60),
            minutes = timein24 - (hours * 60),
            AMPM = hours >= 13 ? " PM" : " AM" ;
        hours = hours >= 13 ? hours - 12 : (hours < 1 ? hours + 12 : hours); 
        minutes = minutes < 10 ? "0" + minutes : minutes; 
        return hours + ":" + minutes + AMPM;
    }

    render() {
        let range = "";
        if(this.props['data-handle-key']==0)
            range = this.convertTo12(this.props['aria-valuenow']) + " - " + this.convertTo12(this.props["aria-valuemax"]);

        return (
            <div
                {...this.props}
                style={{
                ...this.props.style,
                backgroundColor: '#bbce36',
                border: '1px solid #000f89',
                cursor: 'ew-resize',
                height: 18,
                width: 2,
                zIndex: 3,
                top: 5
                }}
            ><span className={"progressText"}>{range}</span></div>
        );
    }
} 



class TimeCustomization extends Component {

    constructor(props) {
        super(props);
    
        this.state = {
          values: props.values || [0],
        };
    
        this.updateValue = this.updateValue.bind(this);
    }

    updateValue(sliderState) {
        this.setState({
          values: sliderState.values,
        });
    }
    render() {
        return (
            <div>
                <RheoStatAirBb {...this.props} 
                    onValuesUpdated={this.updateValue} 
                    values={this.state.values} 
                    progressBar = {MyProgress}
                    handle={MyHandle}
                    ref="mainDiv"
                />
            </div>
        );
    }
}


export default TimeCustomization;