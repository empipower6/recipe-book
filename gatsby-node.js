const path= require('path');
exports.createPages = async function ({ actions, graphql }) {
    const result = await graphql(
        `
          {
            allGraphCmsRecipe {
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
                        gatsbyImageData(placeholder: BLURRED)
                      }
                    }
                    mainImage {
                      gatsbyImageData(placeholder: BLURRED)
                    }
                  }
              }
            }
          }
        `
      )
    result.data.allGraphCmsRecipe.edges.forEach(({node})=> {
      
      actions.createPage({
        path: node.slug,
        component: path.resolve(`./src/templates/recipe.js`),
        context: { content:node },
      })
    })
  }