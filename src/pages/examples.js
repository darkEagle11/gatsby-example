import React from 'react';
import Layout from '../component/layout';
import Header from '../examples/Header';

import HeaderStatic from '../examples/HeaderStatic';
import { graphql } from "gatsby";

const examples = ({ data }) => {
    const { site: { info: { author, person: { name, title } } } } = data;
    return (
        <Layout>
            <p>Example Page</p>
            <Header />
            <HeaderStatic />
            <h5>{author}</h5>
        </Layout>

    )
}

export const data = graphql`
 {
    site {
      info: siteMetadata {
        author
        data
        description
        title
        person {
          name
        }
      }
    }
  }  
`;
export default examples
