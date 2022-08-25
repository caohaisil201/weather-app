import React, { useState, useEffect } from 'react';
import { FaChevronRight, FaChevronLeft } from 'react-icons/fa';
import StatItem from '../MainData/StatItem';
import './style.scss';

const Carousel = ({ list, numOfShowItem }) => {
  const [left, setLeft] = useState(0);
  const [right, setRight] = useState(numOfShowItem - 1);
  const [array, setArray] = useState([]);
  const handleClickPrev = () => {
    if (left === 0) {
      setLeft(list.length - 1);
      setRight(right - 1);
      return;
    } else if (right === 0) {
      setLeft(left - 1);
      setRight(list.length - 1);
      return;
    }
    setLeft(left - 1);
    setRight(right - 1);
  };

  const handleClickNext = () => {
    setLeft(left + 1);
    setRight(right + 1);
  };

  useEffect(() => {
    let arr = [];
    if (left < right) {
      arr = list.slice(left, right + 1);
    } else {
      arr = list.slice(left, list.length).concat(list.slice(0, right + 1));
    }

    if (left === 0) {
      arr.unshift(list[list.length - 1]);
    } else {
      arr.unshift(list[left - 1]);
    }

    if (right === list.length - 1) {
      arr.push(list[0]);
    } else {
      arr.push(list[right + 1]);
    }
    setArray([...arr]);
  }, [left, right, list]);
  
  return (
    <div className="carousel">
      <FaChevronLeft className="prev" onClick={handleClickPrev} />
      {array[0] === undefined ? (
        <></>
      ) : (
        array.map((elem, index) => {
          index === 0 || index === array.length - 1
            ? console.log(elem)
            : console.log('a');
          return (
            <StatItem
              classStyle={
                index === 0 || index === array.length - 1 ? 'hide' : ''
              }
              key={index}
              name={elem.name}
              icon={elem.icon}
              value={elem.value}
            />
          );
        })
      )}
      <FaChevronRight className="next" onClick={handleClickNext} />
    </div>
  );
};

export default Carousel;
