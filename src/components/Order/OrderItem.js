import React from "react";

export default function OrderItem({ item, value }) {
  const { id, title, price, ingredients, count, total } = item;
  const { increment, decrement, clearItem } = value;
  let myComponent = require(`../../img/${title}.png`);
  return (
    <div className='row my-1 text-capitalize text-center'>
      <div className='col-10 col-lg-2'>
        <img
          className='img-fluid'
          src={myComponent}
          style={{ width: "3rem", height: "3rem" }}
          alt='product'
        />
      </div>
      <div className='col-10 mt-1 mx-auto col-lg-2'>
        <span className='d-lg-none'>item :</span>
        {title}
      </div>
      <div className='col-10 mx-auto col-lg-2 my-2 my-lg-0'>
        <div className='d-flex justify-content-center'>
          <span
            className='btn btn-crement mx-1'
            onClick={() => {
              decrement(id);
            }}>
            -
          </span>
          <span className='btn btn-crement mx-1'>{count}</span>
          <span
            className='btn btn-crement mx-1'
            onClick={() => {
              increment(id);
            }}>
            +
          </span>
        </div>
      </div>
      <div className='col-10 mt-1 mx-auto col-lg-2'>
        <span className='d-lg-none'>price :</span>
        {price} {`₴`}
      </div>
      <div className='col-10 mx-auto col-lg-2'>
        <div className='cart-icon'>
          <i
            className='fas fa-trash'
            onClick={() => {
              clearItem(id);
            }}
          />
        </div>
      </div>
      <div className='col-10 mx-auto col-lg-2'>
        <strong>
          {" "}
          item total : {total} {`₴`}
        </strong>
      </div>
    </div>
  );
}
