import React from 'react';
import Layout from '../component/layout';
import { ExampleButton } from '../component/button';
const home = () => (
  <Layout>
    <p>Hello from the homepage</p>
    <a href="https://www.gatsbyjs.org/">Gatsby</a>
    <ExampleButton>  Click Me  </ExampleButton>
  </Layout>
);

export default home;
