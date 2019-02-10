import React from 'react';
import { connect } from 'react-redux'
import { getTestimonialInfo } from '../actions';

class Testimonial extends React.Component {

  componentDidMount() {
    this.props.getTestimonialInfo();
  }

  render() {
    const { title } = this.props.testimonialInfo.slider;
    return (
      <div>{title}</div>
    );
  }
}

const mapStateToProps = ({ testimonialReducer }) => {
  const { loading, testimonialInfo, error } = testimonialReducer;
  return { loading, testimonialInfo, error };
};

export default connect(mapStateToProps, {
  getTestimonialInfo
})(Testimonial);
