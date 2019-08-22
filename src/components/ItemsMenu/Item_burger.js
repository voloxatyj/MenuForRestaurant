import React, { Component } from "react";
import { Consumer } from "../../context";
import styled from "styled-components";
import { ButtonContainer } from "../Button";
import { Link } from "react-router-dom";

class Item_burger extends Component {
  render() {
    return (
      <React.Fragment>
        <Consumer>
          {value => {
            const {
              title,
              composition,
              inOrder,
              ingredients,
              price
            } = value.burger_Menu[0];
            let myComponent = require(`../../img/${title}.png`);
            return (
              <ItemWrapper>
                <div className='col-sm-6'>
                  <div className='card shadow-sm'>
                    <img
                      className='card-img-top mb-5'
                      src={myComponent}
                      alt='....'
                    />
                    <div className='card-body text-center'>
                      <h3>
                        <strong>{title}</strong>
                      </h3>
                      <h3>
                        <strong>
                          {price} {`₴`}
                        </strong>
                      </h3>
                    </div>
                  </div>
                </div>
                <div className='col-sm-6'>
                  <div className='card shadow-md'>
                    <h4 className='m-5'>{composition}</h4>
                    <br />
                    <h3 className='text-center'>
                      <strong>Ingredients you may choose</strong>
                    </h3>
                    <div className='ingredients'>
                      {ingredients.map(item => {
                        return (
                          <div
                            key={item}
                            className='custom-control custom-checkbox mt-2 mb-2'>
                            <input
                              type='checkbox'
                              className='custom-control-input'
                              id={item}
                            />
                            <label
                              className='custom-control-label'
                              htmlFor={item}>
                              {item}
                            </label>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                  <div className='containerButton d-flex justify-content-between mt-5'>
                    <Link to='/'>
                      <ButtonContainer cart>go back to menu</ButtonContainer>
                    </Link>
                    <ButtonContainer
                      cart
                      onClick={id => value.addToOrder("id")}
                      disabled={inOrder ? true : false}>
                      {inOrder ? "already ordered" : "add to order"}
                    </ButtonContainer>
                  </div>
                </div>
              </ItemWrapper>
            );
          }}
        </Consumer>
      </React.Fragment>
    );
  }
}

const ItemWrapper = styled.div`
  display: flex;
  text-align: justify;
`;

export default Item_burger;
