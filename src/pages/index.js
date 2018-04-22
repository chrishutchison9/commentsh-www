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
        <div class="intro-columns">
        <div class="intro-column is-content">
          <div class="intro-content">
            <h1 class="title intro-title">
              <strong>Bulma</strong> is an open source CSS framework based on <strong>Flexbox</strong> and used by more than <strong>100,000</strong> developers.
            </h1>

            <div id="ghbtns" class="intro-ghbtns">
              <iframe src="https://ghbtns.com/github-btn.html?user=jgthms&amp;repo=bulma&amp;type=star&amp;count=true&amp;size=large" frameborder="0" scrolling="0" width="160px" height="30px"></iframe>
              <a href="https://www.npmjs.com/package/bulma" target="_blank" rel="nofollow">
                <img src="https://img.shields.io/npm/dm/bulma.svg" />
              </a>
            </div>

            

            <pre id="npm" class="intro-npm"><code>npm install bulma</code><code id="npmCopy" class="intro-npm-copy" data-clipboard-text="npm install bulma">copy</code></pre>

            <nav class="intro-buttons">
              <a class="button is-primary is-large" href="https://github.com/jgthms/bulma/releases/download/0.7.0/bulma-0.7.0.zip">
                <span>
                  <strong>Download</strong>
                  <small>v0.7.0</small>
                </span>
              </a>
              <a class="button is-light is-large" href="/documentation">
                <span>
                  <span>View</span>
                  <strong>docs</strong>
                </span>
              </a>
            </nav>
          </div>
        </div>

        <div class="intro-column is-video">
          <div id="introVideo" class="intro-video has-loaded">
            <div class="intro-spinner"></div>
            <div class="intro-iframe">
              <iframe id="introIframe" src="https://player.vimeo.com/video/237608586?color=00d1b2" width="640" height="338" frameborder="0" webkitallowfullscreen="" mozallowfullscreen="" allowfullscreen="" data-vimeo-tracked="true" data-ready="true"></iframe>
            </div>
          </div>
          <p class="intro-author">
            <span>Video by <a href="http://www.vuemastery.com/" target="_blank">Vue Mastery</a></span>
          </p>
        </div>
      </div>
          <div className="content">
            <h3 className="has-text-weight-bold is-size-2">Lightweight hosted comments</h3>
          </div>
          <nav class="intro-buttons">
              <a class="button is-primary is-large" href="https://github.com/jgthms/bulma/releases/download/0.7.0/bulma-0.7.0.zip">
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
