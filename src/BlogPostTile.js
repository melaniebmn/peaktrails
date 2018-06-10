import React, { Component } from 'react';
import styled from 'styled-components';

const PostTitle = styled.h3`
  position: absolute;
  bottom: 28px;
  left: 25px;
  width: calc(80% - 30px);
  min-height: 92px;
  font-size: 22px;
  padding: 20px;
  background: #fff;
  transition: all .5s;
  @media only screen and (max-width: 535px) {
    font-size: 20px;
    padding: 10px;
  }
`;

class BlogPostTile extends Component {
  render() {
    return (
      <article className={`${ this.props.className }`}>
        <img src={require(`assets/img/${this.props.img}`)} alt="Post Preview" />
        <PostTitle>{this.props.title}</PostTitle>
      </article>
    );
  }
}

export default styled(BlogPostTile)`
  position: relative;
  margin: 0 0 25px;
  padding: 25px;
  &:hover {
    h3 {
      background: var(--accent-color);
      color: var(--text-color--light);
    }
  }
`;