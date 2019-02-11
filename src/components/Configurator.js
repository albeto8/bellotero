import React from 'react';
import { connect } from 'react-redux'
import { getConfiguratorInfo } from '../actions';
import './Configurator.css';
import TitleBox from './TitleBox';
import SliderLabel from './SliderLabel';
import colors from './styles/Colors';

const mainContainer = {
  marginTop: 5,
  display: 'flex',
  alignItems: 'flex-start',
  justifyContent: 'center',
  flex: 1,
  height: '80vh',
};

const textContainer = {
  flex: 1,
  alignItems: 'flex-start',
  marginLeft: 80,
  justifyContent: 'center',
  display: 'flex',
  flexDirection: 'column'
}

const sliderContainer =  {
  flex: 1,
  marginTop: 100,
}

const descriptionText = {
  fontFamily: 'Roboto-Regular',
  fontSize: '16px',
  width: '349px',
  display: 'flex',
  flex: 1,
  marginTop: '32px',
}

class Configurator extends React.Component {

  state = {
    fullTimeEmployees: 1,
    monthlyIngredientSpending: 10,
    foodCostSaving: 10 * 0.3
  }

  componentDidMount() {
    this.props.getConfiguratorInfo();
  }

  handleEmployeesChange = (event, value) => {
    this.setState({ fullTimeEmployees: value });
  }

  handleMonthChange = (event, value) => {
    this.setState({ monthlyIngredientSpending: value, foodCostSaving: value * 0.3 });
  }

  renderFoodCostSaving() {
    const { foodCostSaving } = this.state;
    return (
      <p>Estimated Food Cost Saving {foodCostSaving}</p>
    );
  }

  renderAnnualSavings() {
    const { foodCostSaving, fullTimeEmployees } = this.state;
    return (
      <p>Your estimated annual savings {fullTimeEmployees * 1337 + foodCostSaving}</p>
    );
  }

  renderEmployeesSlider() {
    const { fullTimeEmployees } = this.state;
    return (
      <SliderLabel
        label={'Full-time employees that process invoices'}
        min={1}
        max={10}
        step={1}
        value={fullTimeEmployees}
        aria-labelledby="label"
        onChange={this.handleEmployeesChange}
      />
    );
  }

  renderMonthSlider() {
    const { monthlyIngredientSpending } = this.state;
    return (
      <SliderLabel
        label={'Monthly ingredient spending'}
        min={10}
        max={100}
        step={0.1}
        value={monthlyIngredientSpending}
        aria-labelledby="label"
        onChange={this.handleMonthChange}
      />
    );
  }

  render() {
    const { description, title } = this.props.configuratorInfo.calculator;
    return (
      <div style={mainContainer}>
        <div style={textContainer}>
          <TitleBox title={title}/>
          <div style={descriptionText}>{description}</div>
        </div>
        <div style={sliderContainer}>
          {this.renderMonthSlider()}
          {this.renderEmployeesSlider()}
          {this.renderFoodCostSaving()}
          {this.renderAnnualSavings()}
        </div>
      </div>
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
