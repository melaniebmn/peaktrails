import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import BlogPostTile from './BlogPostTile';
import Button from './Button';
import HomeTrailTile from './HomeTrailTile';
import bgInstagram from './assets/img/bg--cta.jpg';
import posts from './blog.json';
import trails from './trails.json';

const SectionInstagram = styled.section`
  background: url(${bgInstagram});
  background-size: cover;
  margin: 15% 0;
  padding: 15% 0;
  @media only screen and (min-width: 768px) {
    background-attachment: fixed;
  }
`;

const SectionBlogPosts = styled.section`
  a {
    color: inherit;
  }
`;

class Home extends Component {
  render() {
    const featuredTrails = trails.slice(0, 4);
    const blogPosts = posts.slice(0, 2);

    return (
      <div>
        <section>
          {featuredTrails.map((trail, i) => (
            <HomeTrailTile
              key={i}
              img={trail.img}
              title={trail.name}
              difficulty={trail.difficulty}
              time={trail.time}
              distance={trail.distance}
              url={trail.id}
            />
          ))}
        </section>
        <SectionInstagram>
          <Button
            blueWhite
            url="https://www.instagram.com/peaktrails/"
            target="_blank"
            text="Follow us on Instagram"
          />
        </SectionInstagram>
        <SectionBlogPosts className="grid">
          {blogPosts.map((post, i) => (
            <Link key={i} to={`/blog/${post.id}`} className="grid__col-sm-6 grid__col-12">
              <BlogPostTile
                img={post.img}
                title={post.title}
              />
            </Link>
          ))}
        </SectionBlogPosts>
      </div>
    );
  }
}

export default Home;
