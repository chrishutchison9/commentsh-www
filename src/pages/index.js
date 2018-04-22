import React from 'react'
import PropTypes from 'prop-types'
import Link from 'gatsby-link'

export default class IndexPage extends React.Component {
  render() {
    const { data } = this.props
    const { edges: posts } = data.allMarkdownRemark

    return (
      <section className="section">
        <div className="container">

          <div className="content">
            <h3 className="has-text-weight-bold is-size-2">Lightweight hosted comments</h3>
          </div>
          <nav className="intro-buttons">
              <a className="button is-primary is-large" href="https://github.com/jgthms/bulma/releases/download/0.7.0/bulma-0.7.0.zip">
                <span>
                  <strong>Signup</strong>
                </span>
              </a>
            </nav>
        </div>
      </section>
    )
  }
}

IndexPage.propTypes = {
  data: PropTypes.shape({
    allMarkdownRemark: PropTypes.shape({
      edges: PropTypes.array,
    }),
  }),
}

export const pageQuery = graphql`
  query IndexQuery {
    allMarkdownRemark(sort: { order: DESC, fields: [frontmatter___date] }) {
      edges {
        node {
          excerpt(pruneLength: 400)
          id
          fields {
            slug
          }
          frontmatter {
            title
            templateKey
            date(formatString: "MMMM DD, YYYY")
          }
        }
      }
    }
  }
`
