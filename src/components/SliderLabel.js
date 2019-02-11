import React from 'react';
import Slider from '@material-ui/lab/Slider';

const container = {
  marginRight: 100,
  marginBottom: 46
}

const labelContainer = {
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
  justifyContent: 'space-between'
}

const valueBoxContainer = {
  display: 'flex',
  flex: 0
}

const sliderContainer = {
  marginTop: 22
}

const labelTextStyle = {
  fontFamily: 'Roboto-Bold',
  fontWeight: 'bold',
  fontSize: '14px',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center'
}

const ValueBox = ({ value }) => {
  return (
    <div className="ui card" style={valueBoxContainer}>
      <div className="content">
        <div className="center aligned header">{value}</div>
      </div>
    </div>
  )
}

const SliderLabel = ({ label, value, onChange, min, max, step }) => {
  return (
    <div style={container}>
      <div style={labelContainer}>
        <p style={labelTextStyle}>{label}</p>
        <ValueBox value={value}/>
      </div>
      <div style={sliderContainer}>
        <Slider
          min={min}
          max={max}
          step={step}
          value={value}
          aria-labelledby="label"
          onChange={onChange}
        />
      </div>
    </div>
  )
}

export default SliderLabel;
