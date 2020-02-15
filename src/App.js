import React, { Component } from "react";
import formatNumber from "format-number";
import photographer from "./images/girl.png";
import "./App.css";
import {withdrawal} from './action/action'
import {charity} from './action/action'
import {connect} from 'react-redux'


class App extends Component {

  dispatchBtnAction = (e) => {
    if(e.target.dataset.amount){
      const amount = e.target.dataset.amount;
      this.props.withdrawal(amount);
    }else{
      const giveaway = this.props.totalAmount;
      this.props.charity(giveaway);
    }
  }

  render() {
    return (
      <div className="App">
        <img className="App__userpic" src={photographer} alt="user" />
        <p className="App__username">Hello, {this.props.username}! </p>
        <div className="App__amount">
          {formatNumber({ prefix: "$" })(this.props.totalAmount)}
          <p className="App__amount--info">Total Amount</p>
        </div>

        <section className="App__buttons">
          <button data-amount="10000" onClick={this.dispatchBtnAction}>WITHDRAW $10,000</button>
          <button data-amount="5000" onClick={this.dispatchBtnAction}>WITHDRAW $5,000</button>
        </section>

        <p className="App__giveaway" onClick={this.dispatchBtnAction}>Give away all your cash to charity</p>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  console.log(state)
  return{  
    username : state.username,
    totalAmount : state.totalAmount
  }
}

const mapDispatchToProps = (dispatch) => {
  return{
    withdrawal: (cash) => dispatch(withdrawal(cash)),
    charity: (owo) => dispatch(charity(owo)),
  }
}




export default connect(mapStateToProps, mapDispatchToProps)(App);
