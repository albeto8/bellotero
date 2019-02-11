import React from 'react';
import { connect } from 'react-redux'
import { getTestimonialInfo } from '../actions';
import TestimonialBox from './TestimonialBox';
import TitleBox from './TitleBox';

const mainContainer = {
  marginTop: 5,
  display: 'flex',
  alignItems: 'flex-start',
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
      <TestimonialBox
        review={reviews[reviewIndex]}
        onPreviousClick={this.onPreviousClick.bind(this)}
        onNextClick={this.onNextClick.bind(this)}
        index={reviewIndex + 1}
        length={reviews.length}
      />
    );
  }

  render() {
    const { title } = this.props.testimonialInfo.slider;
    return (
      <div style={mainContainer}>
        <TitleBox title={title} />
        <div>
          {this.renderTestimonialBox()}
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
