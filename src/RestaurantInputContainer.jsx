import React from 'react';

import { useDispatch } from 'react-redux';

import {
  addRestaurants,
  changeName,
  changeType,
  changeAddress,
} from './actions';

export default function App() {
  const dispatch = useDispatch();

  const handleClickAddRestaurants = () => {
    dispatch(addRestaurants());
  };

  const handleChangeName = (value) => {
    dispatch(changeName(value));
  };

  const handleChangeType = (value) => {
    dispatch(changeType(value));
  };

  const handleChangeAddress = (value) => {
    dispatch(changeAddress(value));
  };

  return (
    <div>
      <input
        placeholder="이름"
        onChange={(event) => handleChangeName(event.target.value)}
      />
      <input
        placeholder="분류"
        onChange={(event) => handleChangeType(event.target.value)}
      />
      <input
        placeholder="주소"
        onChange={(event) => handleChangeAddress(event.target.value)}
      />
      <button
        type="button"
        onClick={handleClickAddRestaurants}
      >
        등록
      </button>
    </div>
  );
}