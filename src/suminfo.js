import React from 'react'

export default function SumInfo({ color, totalSum }) {
    return (
      <div className='suminfo'>
      <h1 style={{ color, fontSize: '50px' }}>Sum = {totalSum}</h1>
      {totalSum > 10 && <p>Over limit</p>}
    </div>
    );
  }


