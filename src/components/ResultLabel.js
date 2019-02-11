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
  fontSize: '14px'
}

const container = {
  margin: 0
}

const ResultLabel = ({ label, value }) => {
  const fixedValue =  Number.parseFloat(value).toFixed(2);
  return (
    <div style={container}>
      <p style={valueTextStyle}>${fixedValue}</p>
      <p style={labelTextStyle}>{label}</p>
    </div>
  )
}

export default ResultLabel;
