import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import Card from '../../common/Card';
import { Container, Wrapper, Profile } from './Account.style';
import Form from './Form';

const Account = () => {
  const state = useSelector(state => state.user);
  useEffect(() => {
    console.log(state);
  }, [state]);
  const [form, setForm] = useState(false);
  return (
    <Container>
      {form && <Form close={() => setForm(false)} />}
      <Profile>
        <img
          src="https://previews.123rf.com/images/triken/triken1608/triken160800029/61320775-.jpg"
          width={140}
          height={140}
          alt=""
        />
        <span>{state.name}</span>
        <span onClick={() => setForm(true)} className="create">
          Create Recipes
        </span>
      </Profile>
      <Wrapper>
        {state?.recipies?.map(item => {
          return <Card data={item} key={item._id} />;
        })}
      </Wrapper>
    </Container>
  );
};

export default Account;
