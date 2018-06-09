import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import SectionHeading from './SectionHeading';
import posts from './blog.json';

const ContentContainer = styled.div`
  width: 85%;
  max-width: 855px;
  margin: 0 auto;
  p {
    font-family: 'Cantarell', sans-serif;
    margin: 0 auto 35px;
  }
  a {
    color: var(--accent-color);
  }
`;

const BlogPost = ({ match: { params: { postId } } }) => {
  const post = posts.find(
    _post => _post.id === postId,
  );

  return (
    <section>
      <SectionHeading text={post.title} />
      <ContentContainer>
        {post.content.map((p, i) =>
          <p key={i}>{p}</p>
        )}
        <p><small>[Source: <a href={post.src} target="_blank">{post.source}</a>]</small></p>
      </ContentContainer>
    </section>
  );
};

BlogPost.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      postId: PropTypes.string.isRequired
    }).isRequired
  }).isRequired
};

export default BlogPost;
