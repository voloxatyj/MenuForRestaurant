import React from "react";
import OrderItem from "./OrderItem";

export default function OrderList({ value }) {
  const { Order } = value;
  //console.log(burger_Menu)
  return (
    <div className='container-fluid'>
      {Order.map(item => {
        return <OrderItem key={item.id} item={item} value={value} />;
      })}
    </div>
  );
}
