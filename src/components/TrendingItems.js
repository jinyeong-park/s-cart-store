import React, { useState } from 'react';
import '../styles/TrendingItems.css';
import { useStateValue } from '../StateProvider';



function TrendingItems() {
  const trendingItemlist = ['Diptyque perfume', 'MacBook Laptop', 'Apple Watch', 'Patio Set', 'Chanel reissue']

  const [index, setIndex] = useState(1);
  const [item, setItem] = useState(trendingItemlist[0]);

  return (
    <div className='trendingitem__container'>
      <div className='trendingitem__eachItem'>
        <h4 className='trendingitem_number'><i>1</i></h4>
        <h4 className='trendingitem_name'>{trendingItemlist[0]}
        </h4>
      </div>

      <div className='trendingitem__eachItem'>
        <h4 className='trendingitem_number'><i>2</i></h4>
        <h4 className='trendingitem_name'>{trendingItemlist[1]}
        </h4>
      </div>

      <div className='trendingitem__eachItem'>
        <h4 className='trendingitem_number'><i>3</i></h4>
        <h4 className='trendingitem_name'>{trendingItemlist[2]}
        </h4>
      </div>

      <div className='trendingitem__eachItem'>
        <h4 className='trendingitem_number'><i>4</i></h4>
        <h4 className='trendingitem_name'>{trendingItemlist[3]}
        </h4>
      </div>

      <div className='trendingitem__eachItem'>
        <h4 className='trendingitem_number'><i>5</i></h4>
        <h4 className='trendingitem_name'>{trendingItemlist[4]}
        </h4>
      </div>
    </div>
  )
}

export default TrendingItems
