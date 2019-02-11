import React from 'react';
import { connect } from 'react-redux'
import { getTestimonialInfo } from '../actions';
import TestimonialBox from './TestimonialBox';

const mainContainer = {
  marginTop: 5,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'flex-start',
  height: '80vh',
  flexDirection: 'column'
};

class Testimonial extends React.Component {

  state = {
    reviewIndex: 0
  }

  componentDidMount() {
    this.props.getTestimonialInfo();
  }

  onNextClick() {
    const { reviewIndex } = this.state;
    const { reviews } = this.props.testimonialInfo.slider;
    if (reviewIndex < reviews.length - 1) {
      this.setState({ reviewIndex: reviewIndex + 1 });
    }
  }

  onPreviousClick() {
    const { reviewIndex } = this.state;
    if (reviewIndex > 0) {
      this.setState({ reviewIndex: reviewIndex - 1 });
    }
  }

  renderTestimonialBox() {
    const { reviews } = this.props.testimonialInfo.slider;
    const { reviewIndex } = this.state;
    if (reviews.length === 0) {
      return null;
    }
    return (
      <TestimonialBox review={reviews[reviewIndex]}/>
    );
  }

  renderPagination() {
    const { reviews } = this.props.testimonialInfo.slider;
    const { reviewIndex } = this.state;
    return (
      <div>
        <div>{reviewIndex + 1} / {reviews.length}</div>
        <button onClick={this.onPreviousClick.bind(this)}>
          Previous
        </button>
        <button onClick={this.onNextClick.bind(this)}>
          Next
        </button>
      </div>
    )
  }

  render() {
    const { title } = this.props.testimonialInfo.slider;
    return (
      <div style={mainContainer}>
        <p style={{ backgroundColor: '#071eb3', color: 'white', fontSize: '36px' }}>{title}</p>
        <div>
          {this.renderTestimonialBox()}
          {this.renderPagination()}
        </div>
      </div>
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
