import React, { useState, useEffect } from 'react';
import { FaChevronRight, FaChevronLeft } from 'react-icons/fa';
import StatItem from '../MainData/StatItem';
import './style.scss';

const SLIDE_TIME = 2000;

const Carousel = ({ list, numOfShowItem }) => {
  const [left, setLeft] = useState(0);
  const [right, setRight] = useState(numOfShowItem - 1);
  const [array, setArray] = useState([]);
  const [slideStyle, setSlideStyle] = useState('');
  const [disableStyle, setDisableStyle] = useState('');

  const handleClickPrev = () => {
    setSlideStyle('slideToLeft');
    setDisableStyle('disable');
    setTimeout(() => {
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
    }, SLIDE_TIME);
  };

  const handleClickNext = () => {
    setSlideStyle('slideToRight');
    setDisableStyle('disable');
    setTimeout(() => {
      if (left === list.length - 1) {
        setLeft(0);
        setRight(right + 1);
        return;
      } else if (right === list.length - 1) {
        setLeft(left + 1);
        setRight(0);
        return;
      }
      setLeft(left + 1);
      setRight(right + 1);
    }, SLIDE_TIME);
  };

  useEffect(() => {
    setSlideStyle('');
    setDisableStyle('');
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
      <FaChevronLeft className={`prev ${disableStyle}`} onClick={handleClickPrev} />
      <div className="showList">
        {array[0] === undefined ? (
          <></>
        ) : (
          array.map((elem, index) => (
            <StatItem
              slideStyle={slideStyle}
              key={index}
              name={elem.name}
              icon={elem.icon}
              value={elem.value}
            />
          ))
        )}
      </div>
      <FaChevronRight className={`next ${disableStyle}`} onClick={handleClickNext} />
    </div>
  );
};

export default Carousel;
