import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import { useDispatch } from 'react-redux';
import styled from 'styled-components';
import Button from '../../common/Button';
import { addRecipe } from '../../store/Action/Recipe';

const Form = ({ close }) => {
  const [count, setCount] = useState(1);
  const [title, setTitle] = useState('');
  const [photo, setPhoto] = useState('');
  const [note, setNote] = useState('');

  const addStep = () => {
    if (count + 1 >= 6) return;
    const steps = document.getElementById('steps');

    const temp = document.getElementById('temp');
    const newtemp = temp.cloneNode(true);

    newtemp.setAttribute('id', '');
    newtemp.lastChild.setAttribute('id', count + 1);

    newtemp.style.display = 'flex';
    steps.appendChild(newtemp);
    setCount(count + 1);
  };
  const dispatch = useDispatch();
  const adData = () => {
    const ingredients = [];
    for (let i = 1; i < 6; i++) {
      const stepData = document.getElementById(i)?.value;
      if (stepData?.trim().length) ingredients.push(stepData.trim());
    }

    const data = {
      title: title,
      ingredients: ingredients,
      photo: photo,
      note: note,
      author: localStorage.getItem('id'),
    };
    dispatch(addRecipe(data, close));
  };
  return (
    <>
      <Background />
      <Tile
        style={{
          display: 'none',
        }}
        id="temp"
      >
        <label htmlFor="step">Step: </label>
        <input id="step" />
      </Tile>
      <Wrapper>
        <Container>
          <Tile>
            <label htmlFor="title">Title: </label>
            <input id="title" onChange={e => setTitle(e.target.value)} />
          </Tile>
          <Tile>
            <label htmlFor="url">Photo URL: </label>
            <input id="url" onChange={e => setPhoto(e.target.value)} />
          </Tile>

          <Tile>
            <label htmlFor="note">Note: </label>
            <input
              type="text"
              id="note"
              onChange={e => setNote(e.target.value)}
            />
          </Tile>

          <div id="steps">
            <Tile>
              <label htmlFor="step">Step: </label>
              <input id="1" />
            </Tile>
          </div>
          <Tile>
            <div onClick={() => addStep()}>+</div>
          </Tile>

          <Tile>
            <div className="button">
              <Button onClick={() => adData()}>Create</Button>
            </div>
          </Tile>
        </Container>
      </Wrapper>
    </>
  );
};

export default Form;
const Background = styled.div`
  position: fixed;
  background: #000;
  width: 100vw;
  height: 100vh;
  opacity: 0.5;
  top: 0;
  z-index: 100;
`;
const Wrapper = styled.div`
  position: fixed;
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 101;
  top: 0;
`;
const Container = styled.div`
  background: #f0f0f0;
  z-index: 150;
  padding: 3rem 2rem 2rem 2rem;
  border-radius: 10px;
  position: relative;
  & img {
    position: absolute;
    right: 5%;
    top: 10%;
    cursor: pointer;
  }
`;
const Tile = styled.div`
  width: 300px;
  height: 40px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: #000;
  font-size: 16px;
  font-weight: 600;
  & input {
    border: none;
    outline: none;
    padding: 5px;
    border-bottom: 0.1px solid #000;
  }

  .button {
    align-self: center;
    flex: 1;
    display: flex;
    justify-content: center;
    margin-top: 2rem;
    & button {
      width: 150px;
      border: 1px solid #000;
      transition: 0.3s;
      font-weight: 600;

      &:hover {
        background: #000;
        color: #fff;
      }
    }
  }

  .signup {
    position: absolute;
    bottom: 5%;
    font-size: 12px;
    color: blue;
    font-weight: 500;
    cursor: pointer;
    display: flex;
    justify-content: center;
    width: 300px;
  }
`;
