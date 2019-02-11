import React from 'react';
import { connect } from 'react-redux'
import { Link } from 'react-router-dom';
import { getGlobalInfo } from '../actions';
import colors from './styles/Colors'

const container = {
  backgroundColor: colors.background,
  marginTop: 5
}

const menuText = {
  color: colors.blueColor,
  fontFamily: 'Roboto',
  fontWeight: 500
}

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
             <p style={menuText}>{item.text}</p>
           </Link>
         );
       })
    );
  }

  render() {
    return (
      <div style={container}>
        <div className="ui menu">
          <Link to="/" className="item" >
            <p style={menuText}>Bellotero</p>
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
