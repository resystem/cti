import React, { useContext, useEffect } from 'react'
import Layout from '../components/layout'
import { actions, ModalsContext } from '../store';

const IndexPage = () => {
  const { dispatch } = useContext(ModalsContext);

  useEffect(() => {
    dispatch({
      type: actions.SET_LANGUAGE,
      data: 'pt',
    });
  }, []);
  
  return <Layout language="pt" />;
};

export default IndexPage;
