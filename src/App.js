import logo from './logo.svg';
import './App.css';
import checkBalance from './helpers/arweaveWallet'
import React from 'react';



export default class App extends React.Component {
  constructor(props){
    super(props);
    this.state={balance:'asd'};
  }

  render() {
    console.log("Inside render ")
    return(
      <div>
        sdv
        <button>as{this.state.balance}</button>
        
      </div>
    )

  }

  onClick = async() => {
    let data=await checkBalance();
    this.setState({balance:data});
    console.log("Value of balance:---"+this.state.balance)



  }

  componentDidMount() {
    console.log("Inside componentDidUpdate ")
    this.setState({balance:325});
    this.onClick();

  }

  
}
