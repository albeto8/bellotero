import React from 'react';
import { connect } from 'react-redux'
import { Link } from 'react-router-dom';
import { getGlobalInfo } from '../actions';
import './Header.css';

class Header extends React.Component {

  componentDidMount() {
    this.props.getGlobalInfo();
  }

  renderRightMenuItems() {
    const { globalInfo, loading } = this.props;
    if (loading) {
      return null;
    }
    return (
       globalInfo.menu.items.map(item => {
         return (
           <Link key={item.text} to={`/${item.route}`} className="item" >
             {item.text}
           </Link>
         );
       })
    );
  }

  render() {
    return (
      <div className="header">
        <div className="ui menu">
          <Link to="/" className="item" >
            Bellotero
          </Link>
          <div className="right menu">
            {this.renderRightMenuItems()}
          </div>
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
