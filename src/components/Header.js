import React from 'react';
import { connect } from 'react-redux'
import { Link } from 'react-router-dom';
import { getGlobalInfo } from '../actions';

class Header extends React.Component {

  componentDidMount() {
    this.props.getGlobalInfo();
  }

  render() {
    console.log(this.props);
    return (
      <div className="ui secondary pointing menu">
        <Link to="/" className="item" >
          Bellotero
        </Link>
        <div className="right menu">
          <Link to="/" className="item" >
            Bellotero
          </Link>
        </div>
      </div>
    )
  }
}

const mapStateToProps = ({ infoReducer }) => {
  const { loading, globalInfo, error } = infoReducer;
  return { loading, globalInfo, error };
}

export default connect(mapStateToProps, {
  getGlobalInfo
})(Header);
