import React from 'react';
import { connect } from 'react-redux'
import Slider from '@material-ui/lab/Slider';
import { getConfiguratorInfo } from '../actions';
import './Configurator.css';

const mainContainer = {
  marginTop: 5,
  display: 'flex',
  alignItems: 'center',
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
  flex: 1
}

const titleText = {
  fontFamily: 'Roboto-Black',
  fontSize: '36px',
  color: 'white',
  fontWeight: 'bold',
  marginLeft: '4px',
  marginRight: '4px',
  marginTop: '8px',
  marginBottom: '8px'
}

const descriptionText = {
  fontFamily: 'Roboto-Regular',
  fontSize: '16px',
  width: '349px',
  display: 'flex',
  flex: 1,
  marginTop: '32px'
}

const titleBackground = {
  height: '40px',
  backgroundColor: '#071eb3',
  display: 'flex',
  alignItems: 'center'
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
      <div>
        <p>Employees Slider {fullTimeEmployees}</p>
        <Slider
          min={1}
          max={10}
          step={1}
          value={fullTimeEmployees}
          aria-labelledby="label"
          onChange={this.handleEmployeesChange}
        />
      </div>
    );
  }

  renderMonthSlider() {
    const { monthlyIngredientSpending } = this.state;
    return (
      <div>
        <p>Monthly Ingredient spending {monthlyIngredientSpending}</p>
        <Slider
          min={10}
          max={100}
          value={monthlyIngredientSpending}
          aria-labelledby="label"
          onChange={this.handleMonthChange}
        />
      </div>
    );
  }

  renderTitleBox() {
    const { title } = this.props.configuratorInfo.calculator;
    return (
      <div style={titleBackground}>
        <div style={titleText}>{title}</div>
      </div>
    );
  }

  render() {
    const { description } = this.props.configuratorInfo.calculator;
    return (
      <div style={mainContainer}>
        <div style={textContainer}>
          {this.renderTitleBox()}
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
