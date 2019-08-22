import React, { Component } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { Consumer } from "../context";

export default function MenuItems({ item, value }) {
  const { id, title, price, size, inOrder, composition } = item;
  const { handleClick, addToOrder } = value;
  let myComponent = require(`../img/${title}.png`);
  return (
    <div className='col-sm-6'>
      <Link to={`/${title}`}>
        <img className='card-img-top mb-5' src={myComponent} alt='....' />
      </Link>
      <div className='card shadow-sm'>
        <div className='btn-group'>
          <button
            type='button'
            className='btn btn-warning dropdown-toggle dropdown-toggle-split'
            id='dropdownMenuReference'
            data-toggle='dropdown'
            aria-haspopup='true'
            aria-expanded='false'
            data-reference='parent'>
            <span className='sr-only'>Toggle Dropdown</span>
          </button>
          <div
            className='dropdown-menu'
            aria-labelledby='dropdownMenuReference'>
            {size.map(item => {
              return (
                <a
                  key={item}
                  className='dropdown-item'
                  onClick={() => {
                    handleClick(id, item);
                  }}>
                  {item}
                </a>
              );
            })}
          </div>
          <button type='button' className='btn btn-warning'>
            Choose your size)
          </button>
        </div>
        <div className='card-body text-center'>
          <h3>
            <strong>{title}</strong>
          </h3>
          <p className='card-text'>
            <strong>{composition}</strong>
          </p>
          <div className='orderPlace d-flex justify-content-center'>
            <h4>
              {price} {`₴`}
            </h4>
            <button
              className='card-btn btn-warning'
              disabled={inOrder ? true : false}
              onClick={() => {
                addToOrder(id);
              }}>
              {inOrder ? (
                <p className='text-capitalize mb-0'> Item already ordered</p>
              ) : (
                <i className='fas fa-wallet' />
              )}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
