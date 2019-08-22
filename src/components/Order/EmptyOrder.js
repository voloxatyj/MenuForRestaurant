import React from "react";

export default function EmptyOrder() {
  return (
    <div className='container mt-5'>
      <div className='row'>
        <div className='col-10 mx-auto text-center text-uppercase'>
          <h1>you nothing ordered:)</h1>
          <img
            className='gif'
            src='https://media.giphy.com/media/BEob5qwFkSJ7G/giphy.gif'
            alt=''
          />
        </div>
      </div>
    </div>
  );
}
