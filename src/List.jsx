import React from 'react';

const List = ({dato}) => {
  return (
    <div key={dato.id} className='person'>
    <img src={dato.image} className='img' />
    <div>
    <h4>{dato.name}</h4>
    <p>{dato.age} Years</p>
    </div>
  </div>
  );
};

export default List;
