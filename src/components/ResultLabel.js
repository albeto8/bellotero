import React from 'react';
import colors from './styles/Colors';

const valueTextStyle = {
  color: colors.blueColor,
  fontFamily: 'Roboto',
  fontWeight: 500,
  fontSize: '60px',
  marginBottom: 0
}

const labelTextStyle = {
  color: '#161616',
  fontFamily: 'Roboto',
  fontWeight: 700,
  fontSize: '14px',
  marginRight: 10,
}

const labelContainer = {
  display: 'flex',
  width: '100%',
  justifyContent: 'flex-end'
}

const currencyText = {
  color: colors.blueColor,
  fontFamily: 'Roboto',
  fontWeight: 500,
  fontSize: '30px',
  marginBottom: 0
}

const container = {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'flex-start'
}

const textContainer = {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center'
}

const ResultLabel = ({ label, value }) => {
  const fixedValue =  Number.parseFloat(value).toFixed(2);
  return (
    <div style={container}>
      <div style={textContainer}>
        <p style={currencyText}>$</p>
        <p style={valueTextStyle}>{fixedValue}</p>
      </div>
      <div style={labelContainer}>
        <p style={labelTextStyle}>{label}</p>
      </div>
    </div>
  )
}

export default ResultLabel;
