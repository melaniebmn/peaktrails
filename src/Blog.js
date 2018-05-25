import React, { Component } from 'react';
import styled, { css } from 'styled-components';
import SectionHeading from './SectionHeading';
import BlogPostTile from './BlogPostTile';
import imgPost1 from './assets/img/stanleypark.jpg';
import imgPost2 from './assets/img/dogmountain.jpg';
import imgPost3 from './assets/img/joffrelakes.jpg';

class Blog extends Component {
  render() {
    return (
      <section className={`grid ${ this.props.className }`}>
        <SectionHeading text="Blog" />
        <BlogPostTile
          img={imgPost1}
          url=""
          title="6 Adventurous Day Hikes Near Vancouver"
        />
        <BlogPostTile
          img={imgPost2}
          url=""
          title="Top 10 Survival Tips Every Hiker Should Know"
        />
        <BlogPostTile
          img={imgPost3}
          url=""
          title="14 Incredible Overnight Hikes around Vancouver"
        />
      </section>
    );
  }
}

export default styled(Blog)`
  justify-content: space-between;
  padding: 0 25px;
`;
