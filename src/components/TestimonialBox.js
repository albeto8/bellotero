import React from 'react';

const TestimonialBox = ({ review }) => {
  return (
    <div>
      {review.name}
      {review.position}
      {review.comment}
    </div>
  )
}

export default TestimonialBox;
