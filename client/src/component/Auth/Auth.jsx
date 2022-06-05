import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import Button from '../../common/Button';
import Close from '../../assets/close.png';
import { useDispatch, useSelector } from 'react-redux';
import { LoginAction, SignupAction } from '../../store/Action/Auth';
const Login = ({ close }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [signup, setSignUp] = useState(false);
  const state = useSelector(state => state.auth);
  const dispatch = useDispatch();
  useEffect(() => {
    console.log(state);
  }, [state]);
  const sumbitHandler = () => {
    dispatch(
      signup
        ? SignupAction(
            {
              email: email,
              name: name,
              password: password,
            },
            close
          )
        : LoginAction(
            {
              email: email,
              password: password,
            },
            close
          )
    );
  };
  return (
    <>
      <Background />
      <Wrapper>
        <Container>
          <img src={Close} alt="" width={15} height={15} onClick={close} />
          {signup && (
            <Tile>
              <label htmlFor="name">Name: </label>
              <input
                type="text"
                id="name"
                onChange={e => setName(e.target.value)}
              />
            </Tile>
          )}
          <Tile>
            <label htmlFor="email">Email: </label>
            <input
              id="email"
              type="email"
              onChange={e => setEmail(e.target.value)}
            />
          </Tile>
          <Tile>
            <label htmlFor="password">Password: </label>
            <input
              id="password"
              type="password"
              onChange={e => setPassword(e.target.value)}
            />
          </Tile>

          <Tile>
            <div className="button">
              <Button onClick={sumbitHandler}>
                {signup ? 'Sign Up' : 'Login'}
              </Button>
            </div>
          </Tile>

          <Tile>
            <div onClick={() => setSignUp(!signup)} className="signup">
              {!signup ? 'Signup' : 'Login'}
            </div>
          </Tile>
        </Container>
      </Wrapper>
    </>
  );
};
export default Login;
const Background = styled.div`
  position: fixed;
  background: #000;
  width: 100vw;
  height: 100vh;
  opacity: 0.5;
`;
const Wrapper = styled.div`
  position: fixed;
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 10;
`;
const Container = styled.div`
  background: #f0f0f0;
  z-index: 100;
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
  letter-spacing: 0.09rem;

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
