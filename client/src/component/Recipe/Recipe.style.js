import styled from 'styled-components';

export const Wrapper = styled.div``;
export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 4rem 0 0 0;

  & span {
    font-family: 'Dancing Script', cursive;
    font-size: 60px;
    margin-bottom: 2rem;
  }
`;

export const Ingredients = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
export const Tile = styled.div`
  font-family: 'Roboto' sans-serif;
  font-size: 20px;
  font-weight: 400;
  width: 400px;
  margin-top: 20px;
  display: flex;
  flex-direction: column;
  gap: 10px;
  .step {
    font-weight: 600;
  }
`;
export const Note = styled.div`
  text-align: center;
  font-family: 'Roboto' sans-serif;
  font-size: 20px;
  font-weight: 600;
  margin: 0 30px;
  padding: 10px;
`;
export const Header = styled.div`
  text-align: center;
  font-family: 'Roboto' sans-serif;
  font-size: 40px;
  font-weight: 600;

  margin: 2rem 0;
`;
