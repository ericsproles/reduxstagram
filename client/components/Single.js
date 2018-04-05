import React from 'react';
import Photo from './Photo';
// import comments

const Single = React.createClass({
  render() {
    // index of the post
    const i = this.props.posts.findIndex((post) => post.code === this.props.params.postId);
    console.log(this.props.params.postId, i);
    // get us the post
    const post = this.props.posts[i];
    console.log(post);

    return (
      <div className="single-photo">
      <Photo i={i} post={post} {...this.props} />
      </div>
    )
  }
});


export default Single;
