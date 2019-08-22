import React, {Component} from 'react';
import {Consumer} from '../context';
import MenuItems from './MenuItems';

class Menu extends Component {
    render() {
        return (
            <Consumer>
                {value => {
                    //console.log(value);
                    const {burger_Menu, heading} = value;
                    if (heading === 'Burger’s Menu') {
                        return (
                            <React.Fragment>
                                <h1 className="text-center mb-4">{heading}<br/>
                                <span className="badge badge-pill badge-warning">Just taste</span></h1>
                                <div className="row">
                                    {burger_Menu.map(item=>(
                                        <MenuItems key={item.id} item={item} value={value}/>
                                    ))}
                                </div>
                            </React.Fragment>
                        )
                    }
                }}
            </Consumer>
        )
    }
}

export default Menu;