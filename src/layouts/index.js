import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'

import Navbar from '../components/Navbar'
import './all.scss'

const TemplateWrapper = ({ children }) => (
  <div>
    <Helmet title="Comment.sh - Lightweight hosted comments">
        <meta name="keywords" content="disqus alternative, isso hosting, hosted comment" />
        <meta name="description" content="Lightweight Disqus alternative. Hosted comments powered by the Isso commenting platform." />
    </Helmet>
    <Navbar />
    <div>{children()}</div>
  </div>
)

TemplateWrapper.propTypes = {
  children: PropTypes.func,
}

export default TemplateWrapper
