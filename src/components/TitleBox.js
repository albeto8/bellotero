import React from 'react';

const style = {
  backgroundColor: '#071eb3',
  color: 'white',
  fontSize: '36px',
  marginTop: 100,
  fontFamily: 'Roboto',
  fontWeight: 900
}

const TitleBox = ({ title }) => {
  return (
    <p style={style}>{title}</p>
  )
}

export default TitleBox;
