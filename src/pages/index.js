import * as React from "react"
import { graphql } from 'gatsby'
import Layout from '../components/layout';
import Card from '../components/card';
import * as styles from '../styles/home.module.scss';
// markup
const IndexPage = ({data}) => {
  return (
    <Layout>
      <div class={styles.cardsWrapper}>
        {data.allGraphCmsRecipe.nodes.map((node,index)=>(
          <div className={`${index > 1 ? styles.width30:styles.width48}`}>
                    <Card title={node.title} 
                          category={node.categoryPicker} 
                          image={node.mainImage}
                          slug={node.slug}
                          size={index > 1 ? 'smallCard':'bigCard'} />
          </div>
        ))}
      </div>
    </Layout>
  )
}

export default IndexPage

export const query = graphql`
query MyQuery {
  allGraphCmsRecipe(sort: {fields: createdAt, order: DESC}) {
    nodes {
      title
      slug
      categoryPicker
      ingredients
      steps {
        explanation {
          text
        }
        stepNumber
        stepImage {
          gatsbyImageData(placeholder: BLURRED)
        }
      }
      mainImage {
        gatsbyImageData(placeholder: BLURRED)
      }
    }
  }
}
`