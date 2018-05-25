import React, { Component } from 'react';
import styled, { css } from 'styled-components';

const PostTitle = styled.h3`
  position: absolute;
  bottom: 25px;
  left: 25px;
  width: calc(80% - 30px);
  min-height: 92px;
  font-size: 22px;
  background: #fff;
  transition: all .5s;
  a {
    display: inline-block;
    padding: 20px;
    color: inherit;
  }
  &:hover {
    background: var(--accent-color);
    color: var(--text-color--light);
  }
`;

class BlogPostTile extends Component {
  render() {
    return (
      <article className={`grid__col-sm-6 grid__col-12 ${ this.props.className }`}>
        <img src={this.props.img} />
        <PostTitle>
          <a href={this.props.url}>{this.props.title}</a>
        </PostTitle>
      </article>
    );
  }
}

export default styled(BlogPostTile)`
  position: relative;
  margin: 0 0 25px;
  padding: 25px;
`;