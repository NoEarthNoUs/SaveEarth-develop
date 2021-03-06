import React from 'react';
import styled from 'styled-components';
import { Header, Footer } from '../components/common';
import ReactHtmlParser from 'react-html-parser';

const Wrapper = styled.div`
  > .story-inner {
    margin-top: ${(props) => props.theme.margin1};
    padding: 0 20%;

    > img {
      width: 100%;
    }

    > .story-desc {
      > h1 {
        font-weight: bold;
        font-size: ${(props) => props.theme.detailTitle};
      }
      > .story-contents {
        margin-top: ${(props) => props.theme.margin3};
        font-size: ${(props) => props.theme.subTitle};
        > p + p {
          margin-top: ${(props) => props.theme.margin3};
        }
        strong {
          font-weight: bold;
        }
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
        <img src={story.imgUrl} alt={story.title} title={story.title}></img>
        <div className='story-desc'>
          <h1>{story.title}</h1>
          <span>{story.createDateTime}</span>
          <div className='story-contents'>
            {ReactHtmlParser(story.contents)}
          </div>
        </div>
      </div>
      <Footer />
    </Wrapper>
  );
};

export default StoryDetail;
