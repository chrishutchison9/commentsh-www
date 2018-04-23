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
              <div className="col-12 mx-auto col-md-12">
                <h1 className="mb-3 bd-text-purple-bright text-center">Lightweight hosted comments powered by Isso</h1>
              </div>
            </div>


            <div className="row align-items-center">
              <div className="col-11 mx-auto col-md-6 order-md-2">
                <script data-isso="https://comments.comment.sh/comment-sh" src="https://comments.comment.sh/comment-sh/js/embed.min.js"></script>

                <section id="isso-thread"></section>
              </div>
              <div className="col-md-6 order-md-1 text-center text-md-left pr-md-5">
                <ul className="leadUl">
                  <li><h3 id="comments-written-in-markdown">Comments written in Markdown</h3>

                  <p>Users can edit or delete own comments (within 15 minutes by default).
                  Comments in moderation queue are not publicly visible before activation.</p></li>

                  <li><h3 id="disqus-wordpress-import">Disqus &amp; WordPress Import</h3>

                  <p>You can migrate your Disqus/WordPress comments without any hassle.</p></li>

                  <li><h3 id="configurable-js-client">Configurable JS client</h3>

                  <p>Embed a single JS file, 40kb (12kb gzipped) and you are done.
                  Supports Firefox, Safari, Chrome and IE10.</p></li>
                </ul>

                <div className="d-flex flex-column flex-md-row lead mb-3">
                  <a href="https://dashboard.comment.sh" className="btn btn-lg btn-secondary" >Free Signup</a>
                </div>
              </div>
            </div>

        </div>
      </section>
    )
  }
}

IndexPage.propTypes = {

}

