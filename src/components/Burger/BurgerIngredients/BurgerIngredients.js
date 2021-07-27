import React, { Component } from 'react';
import PropTypes from 'prop-types';

import style from './BurgerIngredients.css';

class BurgerIngredients extends Component {
  render() {
    let ingredient = null;

    switch (this.props.type) {
      case 'bread-bottom':
        ingredient = <div className={style.BreadBottom}></div>;
        break;
      case 'bread-top':
        ingredient = (
          <div className={style.BreadTop}>
            <div className={style.Seeds1}></div>
            <div className={style.Seeds2}></div>
          </div>
        );
        break;
      case 'meat':
        ingredient = <div className={style.Meat}></div>;
        break;
      case 'salad':
        ingredient = <div className={style.Salad}></div>;
        break;
      case 'cheese':
        ingredient = <div className={style.Cheese}></div>;
        break;
      default:
        ingredient = null;
    }
    return ingredient;
  }
}

BurgerIngredients.propTypes = {
  type: PropTypes.string.isRequired,
};

export default BurgerIngredients;
