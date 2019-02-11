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
  fontFamily: 'Roboto',
  fontWeight: 700,
  fontSize: '14px',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center'
  ,width: 160
}

const currencyText = {
  color: '#d6dcff',
  fontFamily: 'Roboto',
  fontWeight: 400,
  fontSize: '24px',
  marginBottom: 0,
  marginRight: '34px'
}

const valueText = {
  fontFamily: 'Roboto',
  fontWeight: 400,
  fontSize: '36px'
}

const valueTextContainer = {
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center'
}

const ValueBox = ({ value, currency }) => {
  const curencySign = currency ? <p style={currencyText}>$</p> : null;
  return (
    <div className="ui card" style={valueBoxContainer}>
      <div className="content" style={valueTextContainer}>
        {curencySign}
        <div style={valueText}>{value}</div>
      </div>
    </div>
  )
}

const SliderLabel = ({ label, value, onChange, min, max, step, currency }) => {
  return (
    <div style={container}>
      <div style={labelContainer}>
        <p style={labelTextStyle}>{label}</p>
        <ValueBox value={value} currency={currency}/>
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
