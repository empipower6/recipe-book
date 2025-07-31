const path= require('path');
exports.createPages = async function ({ actions, graphql }) {
    const result = await graphql(
        `
          {
            allHygraphRecipe {
              edges {
                node {
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
                        gatsbyImageData(placeholder: BLURRED, formats: NO_CHANGE)
                      }
                    }
                    mainImage {
                      gatsbyImageData(placeholder: BLURRED, formats: NO_CHANGE)
                    }
                  }
              }
            }
          }
        `
      )
    result.data.allHygraphRecipe.edges.forEach(({node})=> {
      
      actions.createPage({
        path: node.slug,
        component: path.resolve(`./src/templates/recipe.js`),
        context: { content:node },
      })
    })
  }