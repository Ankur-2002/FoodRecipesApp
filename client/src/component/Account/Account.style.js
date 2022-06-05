import styled from 'styled-components';

export const Container = styled.div`
  margin: 0;
`;
export const Wrapper = styled.div`
  display: grid;
  grid-template-columns: auto auto auto;
  justify-content: space-around;
  gap: 2rem 1rem;
`;
export const Profile = styled.div`
  padding: 1rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 2rem 0 1rem 0;
  font-size: 20px;
  font-weight: 600;

  .create {
    margin-top: 1rem;
    border: 1px solid;
    width: 300px;
    text-align: center;
    padding: 5px;
    cursor: pointer;
    transition: 250ms;
    &:hover {
      background: #000;
      color: white;
    }
  }
`;
