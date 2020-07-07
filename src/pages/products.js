import React from "react"
import { graphql, Link } from "gatsby";
import Layout from '../component/layout';
import styles from '../component/products.module.css';
import Image from "gatsby-image";

const ComponentName = ({ data }) => {
    const { allContentfulProduct: { nodes: products } } = data;
    console.log(products);
    return (
        <Layout>
            <section className={styles.page}>
                {products.map(product => (
                    <article key={product.id}>
                        <Image className={styles.img} fluid={product.image.fluid} alt={product.title} />
                        <h3>{product.title} <span>${product.price}</span></h3>
                        <Link to={`/products/${product.slug}`}>More Details</Link>
                    </article>
                ))}
            </section>

        </Layout>
    )
}

export const query = graphql`
{
    allContentfulProduct {
        nodes {
            price
            title
            id
            slug
            image {
                fluid {
                    ...GatsbyContentfulFluid
                }
            }
        }
    }
}
`

export default ComponentName
