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

            <h1 className="mb-5 text-center top-heading">Lightweight hosted comments</h1>



        </div>

        <div class="container">
<div class="row">
<div class="col-md-4">
<div>
<i class="fas fa-eye-slash fa-5x"></i>
</div>

<h2 className="text-center">Privacy</h2>
<p class="text-center">There are zero external tracking scripts. We do not track or profile users.</p>
</div>
<div class="col-md-4">
<div>
<i class="fas fa-exclamation-triangle fa-5x"></i>
</div>

<h2 className="text-center">No ads</h2>
<p class="text-center">Since we charge website owners to use our commenting platform, our business model does not depend on ads. </p>
</div>
<div class="col-md-4">
<div >
<i class="fas fa-bolt fa-5x"></i>

<h2 className="text-center">Blazing fast</h2>
<p class="text-center">Our focus on delivering a solid comments platform without ads and tracking enables us to use less resources without any compromises.</p>
</div>
</div>

</div>
</div>
<div className="demo col-11 mx-auto col-md-6">
                <h4>Demo</h4>
                <section id="isso-thread"></section>
              </div>

              
      </section>
    )
  }
}

IndexPage.propTypes = {

}

