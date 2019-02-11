import React from 'react';
import { connect } from 'react-redux'
import Slider from '@material-ui/lab/Slider';
import { getConfiguratorInfo } from '../actions';
import './Configurator.css';

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

  render() {
    const { title, description } = this.props.configuratorInfo.calculator;
    return (
      <div className="mainContainer">
        <div className="textContainer">
          <div className="titleText">
            {title}
          </div>
          <div>
            {description}
          </div>
        </div>
        <div className="sliderContainer">
          {this.renderEmployeesSlider()}
          {this.renderMonthSlider()}
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
