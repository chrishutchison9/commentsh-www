import React from 'react'
import PropTypes from 'prop-types'
import Link from 'gatsby-link'

export default class IndexPage extends React.Component {
  componentDidMount () {
    const script = document.createElement("script");

    script.src = "https://comments.comment.sh/comment-sh/js/embed.min.js";
    script.async = true;

    document.body.appendChild(script);
  }
  render() {
    const { data } = this.props

    return (
      <section className="section">
        <div className="container">

 


            <div className="row align-items-center">

              <div className="col-md-6 order-md-1 text-md-left">
              <h1 className="mb-3 bd-text-purple-bright">Lightweight hosted comments powered by Isso</h1>

                <h5>A Disqus alternative without the bloat and ads. Communicate with your readers with a comment box that is elegant and lightweight with a focus on privacy. Setup on your site in minutes. Just embed a script tag and be done - perfect for static sites.</h5>

                <h3 class="card-title">Features</h3>

                <ul className="leadUl">
                  <li>Moderation</li>
                  <li>Email notifications</li>
                  <li>Comments written in Markdown</li>
                  <li>Disqus &amp; WordPress Import</li>
                  <li>Export SQlite database</li>
                  <li>Configurable JS client</li>
                </ul>

                <div className="d-flex flex-column flex-md-row lead mb-3">
                  <a href="https://dashboard.comment.sh" className="btn btn-lg btn-secondary" >Free Signup</a>
                </div>
              </div>
              <div className="col-11 mx-auto col-md-6">
                <h4>Demo</h4>
                <section id="isso-thread"></section>
              </div>
            </div>

        </div>
      </section>
    )
  }
}

IndexPage.propTypes = {

}

