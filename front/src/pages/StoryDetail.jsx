import React from 'react';
import styled from 'styled-components';
import { Header, Footer } from '../components/common';

const Wrapper = styled.div`
  border: 1px solid red;

  > .story-inner {
    border: 1px solid blue;
    margin-top: ${(props) => props.theme.margin1};
    padding: 0 20%;

    > img {
      width: 100%;
    }

    > .story-desc {
      border: 1px solid red;

      > h1 {
        border: 1px solid blue;
        font-weight: bold;
        font-size: ${(props) => props.theme.detailTitle};
      }
      > span {
        border: 1px solid blue;
      }
      > p {
        border: 1px solid blue;
        margin-top: ${(props) => props.theme.margin3};
        font-size: ${(props) => props.theme.subTitle};
      }
    }
  }
`;

const StoryDetail = ({ location }) => {
  const story = location.state;
  return (
    <Wrapper>
      <Header />
      <div className='story-inner'>
        <img src={story.img} alt={story.title} title={story.title}></img>
        <div className='story-desc'>
          <h1>{story.title}</h1>
          <span>{story.createDateTime}</span>
          <p>{story.contents}</p>
        </div>
      </div>
      <Footer />
    </Wrapper>
  );
};

export default StoryDetail;
