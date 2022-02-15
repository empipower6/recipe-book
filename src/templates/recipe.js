import React from "react"
import Layout from '../components/layout';
import { GatsbyImage,getImage } from "gatsby-plugin-image"
import * as styles from '../styles/recipe.module.scss';
import { Helmet } from "react-helmet"

export default function Recipe(props) {
  const data = props.pageContext.content;
  const recipeImage = getImage(data.mainImage)
  const stepsImages = [];
  data.steps.map((step)=>{
    stepsImages[step.stepNumber] = step.stepImage?getImage(step.stepImage):'';
  })
  return (
    <><Helmet
      title={`${data.title} Recipe`}
      meta={[
        {
          name: `description`,
          content: `This is the delicious recipe of ${data.title}. I have no doubt that you will enjoy it.`,
        },
        {
          property: `og:title`,
          content: `${data.title} Recipe`,
        },
        {
          property: `og:description`,
          content: `This is the delicious recipe of ${data.title}. I have no doubt that you will enjoy it.`,
        },
        {
          property: `og:type`,
          content: `website`,
        },
        {
          name: `twitter:card`,
          content: `This is the delicious recipe of ${data.title}. I have no doubt that you will enjoy it.`,
        },
        {
          name: `twitter:title`,
          content: `${data.title} Recipe`,
        },
        {
          name: `twitter:description`,
          content: `This is the delicious recipe of ${data.title}. I have no doubt that you will enjoy it.`,
        },
      ]} />
      <Layout>
        <h1 className={styles.title}>{String(data.title).toLowerCase()}</h1>
        <div className={styles.greySection}>
          <div className={styles.ingredientsSection}>
            <h2>ingredients</h2>
            <div>
              {data.ingredients.split('\n').map(item => (
                <p className={styles.listItem}>{String(item).toLowerCase()}</p>
              ))}
            </div>
          </div>
          <div className={styles.imageWrapperOut}>
            <div className={styles.imageWrapperIn}>
              <GatsbyImage imgClassName={styles.recipeImage}
                placeholder={"tracedSVG"}
                image={recipeImage}
                alt={`The image for the recipe ${data.title}`} />
            </div>
          </div>
        </div>
        <div className={styles.stepsWrapper}>
          <h2>preparations</h2>
          <hr />
          <div className={styles.steps}>
            {data.steps.map((step, index) => (
              <div className={step.stepImage ? styles.stepWithImage : styles.stepWithoutImage}>
                {step.stepImage ?
                  <div>
                    <GatsbyImage
                      image={stepsImages[step.stepNumber]}
                      placeholder={"tracedSVG"}
                      alt={`Step ${step.stepNumber} for the ${data.title} recipe`} />
                  </div>
                  : ''}
                <p><span className={styles.number}>{step.stepNumber}.</span> {step.explanation.text}</p>
              </div>
            )
            )}
          </div>
        </div>
      </Layout></>
  )
}
