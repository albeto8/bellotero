import React from 'react';
import { connect } from 'react-redux'
import { getConfiguratorInfo } from '../actions';

class Configurator extends React.Component {

  componentDidMount() {
    this.props.getConfiguratorInfo();
  }

  render() {
    const { title } = this.props.configuratorInfo.calculator;
    return (
      <div>{title}</div>
    );
  }
}

const mapStateToProps = ({ configuratorReducer }) => {
  const { loading, configuratorInfo, error } = configuratorReducer;
  return { loading, configuratorInfo, error };
}

export default connect(mapStateToProps, {
  getConfiguratorInfo
})(Configurator);
