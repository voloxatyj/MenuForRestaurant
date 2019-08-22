import React, { Component } from "react";

export const Context = React.createContext();

export class Provider extends Component {
  state = {
    burger_Menu: [],
    heading: "Burger’s Menu",
    Order: [],
    orderSubTotal: 0,
    taxes: 0,
    orderTotal: 0
  };
  async componentDidMount() {
    const endpoint =
      "https://raw.githubusercontent.com/voloxatyj/demo/master/db.json";
    const response = await fetch(endpoint);
    const data = await response.json();
    this.setState({
      burger_Menu: data.menu
    });
    //console.log(data.menu)
  }
  getItem = id => {
    const product = this.state.burger_Menu.find(item => item.id === id);
    return product;
  };
  addToOrder = id => {
    let menu = [...this.state.burger_Menu];
    const index = menu.indexOf(this.getItem(id));
    const product = menu[index];
    product.inOrder = true;
    product.count = 1;
    const price = product.price;
    product.total = price;
    this.setState(
      () => {
        return {
          burger_Menu: menu,
          Order: [...this.state.Order, product]
        };
      },
      () => {
        this.addTotals();
      }
    );
  };
  addTotals = () => {
    let subTotal = 0;
    this.state.Order.map(item => {
      subTotal += item.total;
    });
    const temptax = subTotal * 0.13;
    const tax = parseInt(temptax);
    const total = subTotal + tax;
    this.setState(() => {
      return {
        orderSubTotal: subTotal,
        taxes: tax,
        orderTotal: total
      };
    });
  };
  increment = id => {
    let order = [...this.state.Order];
    const selectItem = order.find(item => item.id === id);
    const index = order.indexOf(selectItem);
    const product = order[index];
    product.count += 1;
    product.total = product.count * product.price;
    this.setState(
      () => {
        return { Order: [...order] };
      },
      () => {
        this.addTotals();
      }
    );
  };
  decrement = id => {
    let order = [...this.state.Order];
    const selectItem = order.find(item => item.id === id);
    const index = order.indexOf(selectItem);
    const product = order[index];
    product.count -= 1;
    if (product.count === 0) {
      return this.clearItem(id);
    } else {
      product.total = product.count * product.price;
      this.setState(
        () => {
          return { Order: [...order] };
        },
        () => {
          this.addTotals();
        }
      );
    }
  };
  clearItem = id => {
    const menu = [...this.state.burger_Menu];
    let order = [...this.state.Order];
    order = order.filter(item => item.id !== id);
    const index = menu.indexOf(this.getItem(id));
    const remItem = menu[index];
    remItem.inOrder = false;
    remItem.count = 0;
    remItem.total = 0;
    this.setState(() => {
      return {
        Order: [...order],
        burger_Menu: [...menu]
      };
    });
  };
  clearOrder = () => {
    this.setState(
      () => {
        return { Order: [] };
      },
      () => {
        this.componentDidMount();
      }
    );
  };

  handleClick = (id, item) => {
    const menu = [...this.state.burger_Menu];
    const order = [...this.state.Order];
    const index = menu.indexOf(this.getItem(id));
    console.log(index);
    const product = menu[index];
    console.log(product);
    let price = product.price;
    console.log(price);
    //burger
    if (id === 0 && item === "XL") {
      price = 57;
      product.price = parseInt(price * 1.5);
    } else if (id === 0 && item === "XXL") {
      price = 57;
      product.price = parseInt(price * 1.8);
    } else if (id === 0 && item === "Standart") {
      price = 57;
      product.price = price;
    }
    //french_fries
    else if (id === 1 && item === "XL") {
      price = 23;
      product.price = parseInt(price * 1.5);
    } else if (id === 1 && item === "XXL") {
      price = 23;
      product.price = parseInt(price * 1.8);
    } else if (id === 1 && item === "Standart") {
      price = 23;
      product.price = price;
    }
    //nuggets
    if (id === 2 && item === "XL") {
      price = 27;
      product.price = parseInt(price * 1.5);
    } else if (id === 2 && item === "XXL") {
      price = 27;
      product.price = parseInt(price * 1.8);
    } else if (id === 2 && item === "Standart") {
      price = 27;
      product.price = price;
    }
    //dessert
    if (id === 3 && item === "XL") {
      price = 31;
      product.price = parseInt(price * 1.5);
    } else if (id === 3 && item === "XXL") {
      price = 31;
      product.price = parseInt(price * 1.8);
    } else if (id === 3 && item === "Standart") {
      price = 31;
      product.price = price;
    }
    //coffee
    if (id === 4 && item === "XL") {
      price = 15;
      product.price = parseInt(price * 1.5);
    } else if (id === 4 && item === "XXL") {
      price = 15;
      product.price = parseInt(price * 1.8);
    } else if (id === 4 && item === "Standart") {
      price = 15;
      product.price = price;
    }
    //roll
    if (id === 5 && item === "XL") {
      price = 77;
      product.price = parseInt(price * 1.5);
    } else if (id === 5 && item === "XXL") {
      price = 77;
      product.price = parseInt(price * 1.8);
    } else if (id === 5 && item === "Standart") {
      price = 77;
      product.price = price;
    }
    this.setState(() => {
      return {
        burger_Menu: [...menu],
        Order: [...order]
      };
    });
  };
  render() {
    return (
      <Context.Provider
        value={{
          ...this.state,
          addToOrder: this.addToOrder,
          increment: this.increment,
          decrement: this.decrement,
          clearItem: this.clearItem,
          clearOrder: this.clearOrder,
          handleClick: this.handleClick
        }}>
        {this.props.children}
      </Context.Provider>
    );
  }
}

export const Consumer = Context.Consumer;
