import React from 'react';

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
  flexDirection: 'column'
};

const commentContainer = {
  display: 'flex',
  flex: 2
};

const TestimonialBox = ({ review }) => {
  return (
    <div style={container}>
      <div style={nameContainer}>
        <h2>{review.name}</h2>
        <div>{review.position}</div>
      </div>
      <div style={commentContainer}>
        {review.comment}
      </div>
    </div>
  )
}

export default TestimonialBox;
