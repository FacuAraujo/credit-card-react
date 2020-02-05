import React, { Component } from 'react';
import Form from './components/Form';
import Card from './components/Card';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cardName: 'Nombre',
      cardLastName: 'Apellido',
      cardNumber: '',
      cardMonth: 'xx',
      cardYear: 'xxxx',
      cardCvv: '',
      // Input focus
      focused: false,
    }
  }

  // Input CVV focus
  onFocus() {
    this.setState({ focused: true });
  }

  // Input CVV blur
  onBlur() {
    this.setState({ focused: false });
  }

  // Input values
  onChange(e) {
    const { name, value } = e.target;

    if(name === 'cardNumber' || name === 'cardCvv'){
      if(!/^([0-9])*$/.test(value)){
        return console.log('No es un caractér válido');
      } 
      else {
        this.setState({
          [name]: value,
        });
      }
    }

    this.setState({
      [name]: value,
    });    
  }

  // Send Input
  onSubmit(e) {    
    e.preventDefault();
    console.log('Enviado !');

    // Animacion boton enviando
    let submitCheck = document.querySelector('.submit-icon');
    let submitText = document.querySelector('.submit-text');
    let button = document.querySelector('#submitButton');
    submitCheck.classList.add('check-animate');
    submitText.classList.add('check-text-submit');
    button.classList.add('animate-bg');

    setTimeout(() => {
      submitCheck.classList.remove('check-animate');
      submitText.classList.remove('check-text-submit');
      button.classList.remove('animate-bg');
    }, 2000);
    
  }

  render() {
    return (
      <div className="contain">
        <Card
        cardName={this.state.cardName}
        cardLastName={this.state.cardLastName}
        cardNumber={this.state.cardNumber}
        cardMonth={this.state.cardMonth}
        cardYear={this.state.cardYear}
        cardCvv={this.state.cardCvv}
        focused={this.state.focused}
        />
        <Form
        cardNumber={this.state.cardNumber}
        cardCvv={this.state.cardCvv}
        onChange={ (e) => {this.onChange(e)} }
        onSubmit={ (e) => {this.onSubmit(e)} }
        onFocus={ () => {this.onFocus()} }
        onBlur={ () => {this.onBlur()} }
        />
      </div>
    );
  };
}

export default App;
