import React from "react";
import useForm from "../useForm";
import { Button, Form, Alert, Row, Col } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./CreditCardForm.css";
import Cards from "react-credit-cards";
import "react-credit-cards/es/styles-compiled.css";


const CreditCardForm = () => {

  const { handleChange, handleFocus, handleSubmit, values, errors } = useForm();
  const months=["January","Feburary","March","May","June","July","August","September",'October',"November","December"]
  const year=["2020","2021"]
  return (
    <div>
      <div className="container">
        <div className="box justify-content-center align-items-center">
          <div className="formDiv">
          <div className="creditCard">
            
          <Cards
            cvc={values.cardSecurityCode}
            expiry={values.cardExpiration}
            focused={values.focus}
            name={values.cardName}
            number={values.cardNumber}
           

          />
          </div>
          <Form onSubmit={handleSubmit}>
          <label class="label">Card Number</label>
            <Form.Group>
              <Form.Control
                type="number"
                id="cardNumber"
                data-testid="cardNumber"
                name="cardNumber"
                value={values.cardNumber}
                onChange={handleChange}
                onFocus={handleFocus}
                isValid={errors.cnumber}
              />
            </Form.Group>
            <label class="label">Card Name</label>
            <Form.Group>
              <Form.Control
                type="text"
                id="cardName"
                data-testid="cardName"
                name="cardName"
                value={values.cardName}
                onChange={handleChange}
                onFocus={handleFocus}
                isValid={errors.cname}
              />
            </Form.Group>
          
             <Row>
             <Col style={{minWidth:'70%'}}>
            <label  class="label">Expiration Date</label>
            </Col> 
            <Col>
            <label class="label">CVV</label> </Col>
             </Row>
            <Row>
           

            <Col>
                <Form.Group>
                <select 
                
                value={'hi'}>      
                {months?months.map((i)=>
                <>
                <option hidden value="">Month</option>
                 <option value={i}>{i}</option></>
                )   :null}  
                
               </select>
            
               
                </Form.Group>
              </Col>

              <Col>
                <Form.Group>
                <select 
                value={values.cardExpiration}
                 onChange={handleChange}
                 onFocus={handleFocus}
                >      
                {year?year.map((i)=>
                <>
               <option hidden value="">Year</option>
                 <option value={i}>{i}</option></>
                )   :null}  
                
               </select>
                
                </Form.Group>
              </Col>

              <Col>
                <Form.Group>
                
                  <Form.Control
                    type="number"
                    id="cardSecurityCode"
                    data-testid="cardSecurityCode"
                    name="cardSecurityCode"
                    value={values.cardSecurityCode}
                    onChange={handleChange}
                    onFocus={handleFocus}
                    isValid={errors.ccvv}
                  />
                </Form.Group>
              </Col>
            </Row>
            <Row>
            
           
           
            </Row>
            <Button
              size={"block"}
              data-testid="validateButton"
              id="validateButton"
              type="submit"
            >
              Submit
            </Button>
          </Form>
          </div>
          <Alert
            id="alertMessage"
            data-testid="alertMessage"
            variant={errors.variant}
            show={errors.show}
          >
            {errors.message}
          </Alert>{" "}
        </div>
      </div>
    </div>
  );
};

export default CreditCardForm;
