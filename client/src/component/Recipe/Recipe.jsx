import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchRecipe } from '../../store/Action/Recipe';
import {
  Container,
  Wrapper,
  Ingredients,
  Tile,
  Note,
  Header,
} from './Recipe.style';

const Recipe = () => {
  const [data, setData] = useState({});
  const { id } = useParams();
  useEffect(() => {
    const get = async () => {
      let data = await fetchRecipe(id);
      setData(data.recipe);
    };
    get();
  }, []);
  console.log(data);
  return (
    <Wrapper key={data?._id}>
      <Container>
        <span>{data.title}</span>
        <img src={data?.photo} alt="" width={'400px'} height={'100%'} />
      </Container>
      <Header>Ingredients</Header>
      <Ingredients>
        {data?.ingredients?.map((item, index) => {
          return (
            <Tile>
              <span className="step">step{index}</span> <span>{item}</span>
            </Tile>
          );
        })}
      </Ingredients>
      <Header>Note</Header>
      <Note>{data?.note}</Note>
    </Wrapper>
  );
};

export default Recipe;
