import React, { Component } from 'react';
import visaLogo from '../assets/img/visa-logo.svg';

class Card extends Component {
    render() {
        let flipCard = '';
        if(this.props.focused){
            flipCard = 'card-flip';
        }else {
            flipCard = '';
        }

        // Render tarjeta entera
        return (
            <div className="flip-container">
                <div className={"credit-card " + flipCard}>                
                    <div className="card-front">
                        <div className="background-card"></div>                        
                        <div className="visa-logo">
                            <img src={visaLogo} alt="Visa" />
                        </div>

                        <div className="data-number">
                            <Number number={this.props.cardNumber} />
                        </div>

                        <div className="data-name">
                            <Name name={this.props.cardName} /> 
                            <LastName lastName={this.props.cardLastName} />
                        </div>

                        <div className="data-date">
                            <Date 
                                month={this.props.cardMonth} 
                                year={this.props.cardYear}
                            />
                        </div>
                    </div>

                    <div className="card-back">
                        <div className="background-card"></div>  
                        <div className="magnetic-bar"></div>
                        <div className="back-info">
                            <div className="white-bar"></div>
                            <div className="data-cvv">
                                <Cvv cvv={this.props.cardCvv} />
                            </div>
                        </div>
                        <div className="visa-logo-back">
                            <img src={visaLogo} alt="Visa" />
                        </div>                      
                    </div>
                </div>
            </div>
        );
    }
}

// Componente numero de tarjeta
function Number(props) {
    let points = 'XXXXXXXXXXXXXXXX';
    let numLength = props.number.length;
    points = points.slice(numLength, 17);
    return <span className="card-data number">
                {props.number.slice(0, 4)} {props.number.slice(4, 8)} {props.number.slice(8, 12)} {props.number.slice(12, 16)}
                {points.slice(12, 16)} {points.slice(8, 12)} {points.slice(4, 8)} {points.slice(0, 4)}
            </span>;             
}

// Componente nombre de tarjeta
function Name(props) {
    return <>
    <div className="label">Card name</div>
    <span className="card-data name">{props.name}</span> 
    </>
}

// Componenete apellido de tarjeta
function LastName(props) {
    return <span className="card-data last-name">{props.lastName}</span>;
}

// Componenete fecha de tarjeta
function Date(props) {
    return (        
        <div className="card-date">
            <div className="label">Good Trhu</div>
            <span className="card-data date">{props.month}/{props.year.slice(-2)}</span>
        </div>
    );    
}

// Componente codigo de seguridad de tarjeta
function Cvv(props) {
    let points = 'XXX';
    let numLength = props.cvv.length;
    points = points.slice(numLength, 4);
    return <>
    <div className="label">CVV</div>
    <span className="card-data cvv">{props.cvv}{points}</span>
    </>;
}

export default Card;