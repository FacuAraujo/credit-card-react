import React, { Component } from 'react';

class Form extends Component {

    render() {
        return (
            <div>
                <form onSubmit={ (e) => {this.props.onSubmit(e)} }>
                    <div className="form-group">
                        <label htmlFor="cardNumber">Card number</label>
                        <input type="text" className="form-control" name="cardNumber" value={this.props.cardNumber} placeholder="4444 5555 4444 5555" maxLength="16" minLength="16" onChange={ e => {this.props.onChange(e)} } required/>                       
                    </div>
                    <div className="form-group d-flex">
                        <div className="name-input mr-2">
                            <label htmlFor="cardName">Name</label>
                            <input type="text" className="form-control" name="cardName" placeholder="Name" minLength="2" onChange={ e => {this.props.onChange(e)} } required/>
                        </div>
                    
                        <div className="lastname-input">
                            <label htmlFor="cardLastName">Last Name</label>
                            <input type="text" className="form-control" name="cardLastName" placeholder="Last name" minLength="2" onChange={ e => {this.props.onChange(e)} } required/>
                        </div>
                    </div>
                    <div className="form-group">
                        <label htmlFor="cardDate">Valid thru</label>                        
                        <div className="date-input d-flex">
                            {/* Select MES */}
                            <select className="custom-select mr-2" name="cardMonth" defaultValue="Month" onChange={ e => {this.props.onChange(e)} } required>
                                <option disabled="disabled">Month</option>
                                <option value="01">Enero</option>
                                <option value="02">Febrero</option>
                                <option value="03">Marzo</option>
                                <option value="04">Abril</option>
                                <option value="05">Mayo</option>
                                <option value="06">Junio</option>
                                <option value="07">Julio</option>
                                <option value="08">Agosto</option>
                                <option value="09">Septiembre</option>
                                <option value="10">Octubre</option>
                                <option value="11">Noviembre</option>
                                <option value="12">Diciembre</option>
                            </select>
                            {/* Select AÑO */}
                            <select className="custom-select" name="cardYear" defaultValue="Year" onChange={ e => {this.props.onChange(e)} } required>
                                <option disabled="disabled">Year</option>
                                <option value="2020">2020</option>
                                <option value="2021">2021</option>
                                <option value="2022">2022</option>
                                <option value="2023">2023</option>
                                <option value="2024">2024</option>
                                <option value="2025">2025</option>
                                <option value="2026">2026</option>
                                <option value="2027">2027</option>
                                <option value="2028">2028</option>
                            </select>
                        </div>
                    </div>

                    <div className="form-group">
                        <label htmlFor="CVV">CVV</label>
                        <input type="text" 
                        className="form-control w-25" id="inputcvv" name="cardCvv" value={this.props.cardCvv} 
                        placeholder="333" 
                        maxLength="3" minLength="3" 
                        onChange={ e => {this.props.onChange(e)} } 
                        required
                        onFocus={ () => {this.props.onFocus()} } 
                        onBlur={ () => {this.props.onBlur()} }                      
                        />                       
                    </div>
                    <button type="submit" id="submitButton" className="btn btn-block btn-lg form-cta">
                        <div className="submit-text">Submit</div>
                        <div className="submit-icon"><i className="fas fa-check"></i></div>
                    </button>
                </form>
            </div>
        );
    }
}

export default Form;