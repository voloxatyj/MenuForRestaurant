import React, { Component } from "react";
import OrderColumns from "./OrderColumns";
import EmptyOrder from "./EmptyOrder";
import { Consumer } from "../../context";
import OrderList from "./OrderList";
import OrderTotal from "./OrderTotal";

class Order extends Component {
  render() {
    return (
      <React.Fragment>
        <Consumer>
          {value => {
            const { Order } = value;
            {
              if (Order.length > 0) {
                return (
                  <React.Fragment>
                    <div className='card-body text-center'>
                      <h3 className='text-uppercase'>
                        <strong>Your Order</strong>
                      </h3>
                    </div>
                    <OrderColumns />
                    <OrderList value={value} />
                    <OrderTotal value={value} />
                  </React.Fragment>
                );
              } else {
                return <EmptyOrder />;
              }
            }
          }}
        </Consumer>
      </React.Fragment>
    );
  }
}

export default Order;
