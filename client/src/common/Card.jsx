import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const Card = ({ data }) => {
  return (
    <Container>
      <Top>
        <img src={data.photo} alt="" width={'100%'} />
      </Top>
      <Bottom>
        <span className="title">
          {data?.title?.substring(0, 20) +
            (data?.title?.length > 20 ? '...' : '')}
        </span>
        <span className="view">
          <Link to={'/recipe/' + data?._id}>view more</Link>
        </span>
      </Bottom>
    </Container>
  );
};

export default Card;

const Container = styled.div`
  width: 15rem;
  height: 15rem;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
  border-radius: 8px;
  overflow: hidden;
`;
const Top = styled.div`
  width: 100%;
  height: 70%;
  background: blue;

  & img {
    width: 100%;
    height: 100%;
  }
`;
const Bottom = styled.div`
  height: 30%;
  background: #c0c0c0;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  font-size: 20px;
  font-weight: 600;

  .title {
    // white-space: nowrap;
    overflow: hidden;
    padding: 0 1rem;
    text-overflow: ellipsis;
  }

  .view {
    font-size: 15px;
    font-weight: 500;
    cursor: pointer;
    & a {
      text-decoration: none;
      color: blue;
    }
  }
`;
