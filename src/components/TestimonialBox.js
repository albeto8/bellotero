import React from 'react';
import Icon from '@material-ui/core/Icon';

const container = {
  backgroundColor: 'white',
  display: 'flex',
  flexDirection: 'row',
  width: 1000,
  justifyContent: 'center'
};

const nameContainer = {
  display: 'flex',
  flex: 1,
  flexDirection: 'column',
  marginLeft: '32px',
  marginTop: '32px'
};

const commentContainer = {
  display: 'flex',
  flex: 2,
  flexDirection: 'column'
};

const paginationContainer = {
  display: 'flex',
  flexDirection: 'row',
  width: '100vh',
  justifyContent: 'flex-end'
}

const textPositionStyle = {
  fontSize: '14px',
  color: '#a5a5a5'
}

const commentTextStyle = {
  fontSize: '24px',
  color: '#161616',
  fontWeight: 'bold',
  marginTop: '32px',
  marginRight: '32px',
}

const nameText = {
  fontSize: '32px',
  fontWeight: 'bold',
  marginBottom: 0,
}

const pageIndexContainer =  {
  width: 120,
  height: 56,
  backgroundColor: '#071eb3',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  marginRight: 2
}

const indexTextStyle = {
  color: 'white',
  fontStyle: 'italic',
  fontFamily: 'CormorantGaramond-SemiBoldItalic',
  fontSize: '24px'
}

const arrowContainerStyle = {
  width: 60,
  height: 56,
  backgroundColor: '#071eb3',
  margin: 0,
  borderRadius: 0
}

const arrowIconStyle = {
  color: 'white',
}

const TestimonialBox = ({ review, index, length, onPreviousClick, onNextClick }) => {
  return (
    <div style={container}>
      <div style={nameContainer}>
        <p style={nameText}>{review.name}</p>
        <div style={textPositionStyle}>{review.position}</div>
      </div>
      <div style={commentContainer}>
        <p style={commentTextStyle}>"{review.comment}"</p>
        <PaginationBox
          index={index}
          length={length}
          onPreviousClick={onPreviousClick}
          onNextClick={onNextClick}
        />
      </div>
    </div>
  )
}

const PaginationBox = ({ index, length, onPreviousClick, onNextClick }) => {
  return (
    <div style={paginationContainer}>
      <div style={pageIndexContainer}>
        <p style={indexTextStyle}>{index} / {length}</p>
      </div>
      <button class="ui button" style={arrowContainerStyle} onClick={onPreviousClick}>
        <Icon style={arrowIconStyle}>arrow_back</Icon>
      </button>
      <button  class="ui button" style={arrowContainerStyle} onClick={onNextClick}>
        <Icon style={arrowIconStyle}>arrow_forward</Icon>
      </button>
    </div>
  )
}

export default TestimonialBox;
