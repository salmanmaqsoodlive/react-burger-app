import React, { Component } from 'react';

import Aux from '../../hoc/Aux';
import Burger from '../../components/Burger/Burger';
import BuildControls from '../../components/Burger/BuildControls/BuildControls';
import Modal from '../../components/UI/Modal/Modal';
import OrderSummary from '../../components/Burger/OrderSummary/OrderSummary';
import axios from '../../axios-orders';
const ingredientPrices = {
  salad: 0.2,
  meat: 1.5,
  cheese: 0.5,
};
class BurgerBuiler extends Component {
  state = {
    ingredients: {
      salad: 0,
      cheese: 0,
      meat: 0,
    },
    totalPrice: 3,
    purchasable: false,
    showSummary: false,
  };

  showModal = () => {
    this.setState({
      showSummary: true,
    });
  };
  closeModal = () => {
    this.setState({
      showSummary: false,
    });
  };

  updatePurchasableState = (ingredients) => {
    const sum = Object.keys(ingredients)
      .map((igKey) => {
        return ingredients[igKey];
      })
      .reduce((sum, element) => {
        return sum + element;
      }, 0);
    this.setState({
      purchasable: sum > 0,
    });
  };

  addIngredientHandler = (type) => {
    const oldCount = this.state.ingredients[type];
    const updateCount = oldCount + 1;
    const updateIngredients = {
      ...this.state.ingredients,
    };
    updateIngredients[type] = updateCount;
    const priceAddition = ingredientPrices[type];
    const oldPrice = this.state.totalPrice;
    const newPrice = oldPrice + priceAddition;
    this.setState({
      totalPrice: newPrice,
      ingredients: updateIngredients,
    });
    this.updatePurchasableState(updateIngredients);
  };

  removeIngredientHandler = (type) => {
    const oldCount = this.state.ingredients[type];
    if (oldCount <= 0) {
      return;
    }
    const updateCount = oldCount - 1;
    const updateIngredients = {
      ...this.state.ingredients,
    };
    updateIngredients[type] = updateCount;
    const priceDeduction = ingredientPrices[type];
    const oldPrice = this.state.totalPrice;
    const newPrice = oldPrice - priceDeduction;
    this.setState({
      totalPrice: newPrice,
      ingredients: updateIngredients,
    });
    this.updatePurchasableState(updateIngredients);
  };

  orderCheckout = () => {
    const orders = {
      ingredients: this.state.ingredients,
      totalPrice: this.state.totalPrice,
      customerInfo: {
        address: {
          street: 'test Street',
          zipCode: '5400',
          country: 'Pakistan',
        },
        name: 'Salman',
      },
    };

    axios
      .post('/orders.json', orders)
      .then((response) => console.log(response))
      .catch((error) => console.log(error));
  };

  render() {
    const disableButton = {
      ...this.state.ingredients,
    };
    for (let key in disableButton) {
      disableButton[key] = disableButton[key] <= 0;
    }
    return (
      <Aux>
        <Modal show={this.state.showSummary} modalClosed={this.closeModal}>
          <OrderSummary
            ingredients={this.state.ingredients}
            price={this.state.totalPrice}
            modalClosed={this.closeModal}
            orderContinue={this.orderCheckout}
          />
        </Modal>
        <Burger ingredients={this.state.ingredients} />
        <BuildControls
          ingredientAdded={this.addIngredientHandler}
          ingredientRemoved={this.removeIngredientHandler}
          disable={disableButton}
          showSummary={this.showModal}
          price={this.state.totalPrice}
          purchase={this.state.purchasable}
        />
      </Aux>
    );
  }
}

export default BurgerBuiler;
