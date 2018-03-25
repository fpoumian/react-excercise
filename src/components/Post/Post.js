import React from 'react'
import PropTypes from 'prop-types'

const Post = ({title, body}) => (
  <div className={`post`}>
      <div className={`post__field`}>
        <span className={`post__field__label`}>{`Title:`}</span>
        <span className={`post__field__value`}>"{title}"</span>
      </div>
      <div className={`post__field`}>
        <span className={`post__field__label`}>{`Body:`}</span>
        <span className={`post__field__value`}>"{body}"</span>
      </div>
  </div>
)


Post.propTypes = {
  title: PropTypes.string,
  body: PropTypes.string,
}

export default Post