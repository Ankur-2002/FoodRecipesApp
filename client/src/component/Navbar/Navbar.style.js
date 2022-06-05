import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 10px;
  max-height: 2.5rem;
  background: red;
  align-items: center;
`;
export const Left = styled.div``;
export const Mid = styled.div`
  input {
    border: none;
    background: transparent;
    outline: none;
    padding: 5px;
    width: 100%;
  }
  background: white;
  display: flex;
  min-width: 20rem;
  align-items: center;
  padding: 10px;
  border-radius: 10px;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;

  img {
    cursor: pointer;
  }
`;
export const Right = styled.div`
  .user {
    & img {
      border-radius: 50%;
      cursor: pointer;
    }
    position: relative;
    transition: 250ms;

    &:hover {
      .dropdown {
        display: flex;
      }
    }

    .dropdown {
      position: absolute;
      background: #fff;
      width: 90px;
      height: 60px;
      left: -150%;
      display: none;
      flex-direction: column;
      justify-content: space-between;
      & a {
        text-decoration: none;
        color: #000;
      }
      & div {
        height: 30px;
        display: flex;
        align-items: center;
        justify-content: center;
        cursor: pointer;
        &:hover {
          background: #f0f0f0;
        }
      }
    }
  }
`;
