import React, { Component } from 'react';
import styled from 'styled-components';

class SectionHeading extends Component {
  render() {
    return (
      <h2 className={`${ this.props.className }`}>
        {this.props.text}
      </h2>
    );
  }
}

export default styled(SectionHeading)`
  width: 80%;
  max-width: 855px;
  font-size: 30px;
  letter-spacing: 2px;
  text-align: center;
  margin: 65px auto 7%;
  padding: 20px 0;
  border-top: 1px solid var(--border-color);
  border-bottom: 1px solid var(--border-color);
`;