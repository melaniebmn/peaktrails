import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import SectionHeading from './SectionHeading';
import BlogPostTile from './BlogPostTile';
import posts from './blog.json';

class Blog extends Component {
  render() {
    return (
      <section className={`grid ${ this.props.className }`}>
        <SectionHeading text="Blog" />

        {posts.map((post, i) => (
          <Link
            to={`/blog/${post.id}`}
            className="grid__col-sm-6 grid__col-12"
            key={i}
          >
            <BlogPostTile
              key={post.id}
              img={post.img}
              url={post.url}
              title={post.title}
            />
          </Link>
        ))}
      </section>
    );
  }
}

export default styled(Blog)`
  justify-content: space-between;
  padding: 0 25px;
  a {
    color: inherit;
  }
`;
