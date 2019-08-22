import React from 'react';
import {Link} from 'react-router-dom';

export default function OrderTotal({value}) {
    const { orderSubTotal, taxes, orderTotal, clearOrder } = value;
    return (
        <React.Fragment>
            <div className="container">
                <div className="row">
                    <div className="col-10 mt-2 ml-sm-5 ml-md-auto col-sm-8 text-capitalize text-right">
                        <Link to="/">
                            <button className="btn btn-outline-danger text-uppercase mb-3 px-5" type="button" onClick={()=>{clearOrder()}}>clear order</button>
                        </Link>
                        <h5><span className="text-title">orderSubTotal :</span>{orderSubTotal} {`₴`}</h5>
                        <h5><span className="text-title">taxes :</span>{taxes} {`₴`}</h5>
                        <h5><span className="text-title">orderTotal :</span>{orderTotal} {`₴`}</h5>
                    </div>
                </div>
            </div>
        </React.Fragment>  
  )
}
