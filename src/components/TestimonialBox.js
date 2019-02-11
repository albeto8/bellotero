import React from 'react';

const container = {
  backgroundColor: 'white',
  display: 'flex',
  flexDirection: 'row'
};

const nameContainer = {
  display: 'flex',
  flex: 1
};

const commentContainer = {
  display: 'flex',
  flex: 2
};


const TestimonialBox = ({ review }) => {
  return (
    <div style={container}>
      <div style={nameContainer}>
        {review.name}
        {review.position}
      </div>
      <div style={commentContainer}>
        {review.comment}
      </div>
    </div>
  )
}

export default TestimonialBox;
