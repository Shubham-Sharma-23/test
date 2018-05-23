import React, { Component } from 'react';

import RheoStatAirBb from 'rheostat';
import './RheoSlider.css';

class MyProgress2 extends Component {
    componentDidMount() {
        debugger;
    }

    constructor(props) {
        super(props);
    }

    render() {
        console.log("-----------");
        debugger;
        console.log(this.props);
        console.log("-----------");
        return (
            <div
                {...this.props}
                style={{
                ...this.props.style,
                backgroundColor: '#bbce36',
                //   border: '1px solid #000f89',
                //   borderRadius: '100%',
                cursor: 'ew-resize',
                //  marginLeft: -13,
                height: 24,
                //width: 24,
                zIndex: 2,
                paddingRight: 20,
                marginLeft: -8
                }}
            ></div>
        );
    } 
}

class MyHandle2 extends Component {
    constructor(props) {
        super(props);
    }

    convertTo12(timein24) {
        let hours = Math.floor(timein24 / 60),
            minutes = timein24 - (hours * 60),
            AMPM = hours >= 13 ? " PM" : " AM" ;
        hours = hours >= 13 ? hours - 12 : (hours < 1 ? hours + 12 : hours); 
        return hours + ":" + minutes + AMPM
        //return timein24 >= 1300 ? timein24 - 1200 : (timein24 < 100 ? timein24 + 1200 : timein24); 
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
                //   borderRadius: '100%',
                cursor: 'ew-resize',
                //  marginLeft: -13,
                height: 22,
                width: 4,
                zIndex: 3,
                }}
            ><span className={"progressText"}>{range}</span></div>
        );
    }
} 

function MyHandle({ style, ...passProps }) {
    debugger;
    return (
      <div
        {...passProps}
        style={{
          ...style,
          backgroundColor: '#bbce36',
          border: '1px solid #000f89',
        //   borderRadius: '100%',
          cursor: 'ew-resize',
        //  marginLeft: -13,
          height: 22,
          width: 4,
          zIndex: 3,
        }}
      ></div>
    );
  }

function MyProgress({ style, ...passProps }) {
    console.log("-----------");
    debugger;
    console.log(passProps);
    console.log("-----------");
    return (
      <div
        {...passProps}
        style={{
          ...style,
          backgroundColor: '#bbce36',
        //   border: '1px solid #000f89',
        //   borderRadius: '100%',
          cursor: 'ew-resize',
        //  marginLeft: -13,
          height: 24,
          //width: 24,
          zIndex: 2,
          paddingRight: 20,
          marginLeft: -8
        }}
      ></div>
    );
  }


class Handle extends Component {
    render() {
        return (<button className={"rheostat-handle"} role={"slider"}> a</button>)
    }
}

class RheoStat extends Component {
    componentDidMount() {
        debugger;
    }

    constructor(props) {
        super(props);
    
        this.state = {
          values: props.values || [0],
        };
    
        this.updateValue = this.updateValue.bind(this);
    }

    updateValue(sliderState) {
        console.log("-------");
        console.log(sliderState.values);
        this.setState({
          values: sliderState.values,
        });
    }

    convertTo12(timein24) {
        let hours = Math.floor(timein24 / 60),
            minutes = timein24 - (hours * 60);
        hours = hours >= 13 ? hours - 12 : (hours < 1 ? hours + 12 : hours); 
        return hours + ":" + minutes
        //return timein24 >= 1300 ? timein24 - 1200 : (timein24 < 100 ? timein24 + 1200 : timein24); 
    }

    render() {
        //const { formatValue } = this.props;
        console.log("---render----");
        console.log(this.props); 
        //console.log(formatValue);
        console.log("---------------")
        return (
            <div>
                <RheoStatAirBb {...this.props} 
                    onValuesUpdated={this.updateValue} 
                    values={this.state.values} 
                    //handle={Handle} 
                    progressBar = {MyProgress2}
                    handle={MyHandle2}
                    ref="mainDiv"
                />

                {/* <ul className={"SlideValues"}> */}
                {/* <lh>Values</lh> */}
                {/* {this.state.values.map(value => (
                    <li key={value}>
                    {this.convertTo12(value)}
                    </li>
                ))}
                </ul> */}
            </div>
        );
    }
}


export default RheoStat;