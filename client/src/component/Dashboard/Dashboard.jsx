import React, { useEffect } from 'react';
import Card from '../../common/Card';
import { Container, Topbar, Wrapper } from './Dashboard.style';
import { useDispatch, useSelector } from 'react-redux';
import { getAll } from '../../store/Action/Recipe';
const Dashboard = () => {
  const state = useSelector(state => state);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAll());
  }, []);

  return (
    <Container>
      <Topbar>Welcome To All Recipes</Topbar>
      <Wrapper>
        {state?.recipe?.recipes?.map(item => {
          return <Card data={item} />;
        })}
      </Wrapper>
    </Container>
  );
};

export default Dashboard;
