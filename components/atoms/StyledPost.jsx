import styled from 'styled-components';
import { space, typography } from 'styled-system';

const StyledPost = styled.div`
  ${space}
  ${typography}
  h1 {
    font-size: 2.5rem;
    margin: 2.5rem 0 0.8rem;
  }
  h2 {
    font-size: 1.5rem;
    border-bottom: 2px solid ${({ theme }) => theme.colors.primary };
    padding-bottom: 0.5rem;
    margin: 2.5rem 0 0.8rem;
  }
  h3 {
    font-size: 1.2rem;
    margin: 2.5rem 0 0.8rem;
    padding-bottom: 0.5rem;
  }
  h4 {
    font-size: 1rem;
    font-weight: bold;
    margin: 2.5rem 0 0.8rem;
    padding-bottom: 0.5rem;
  }
  h5 {
    font-size: 1rem;
    margin: 2.5rem 0 0.8rem;
    padding-bottom: 1rem;
  }

  ul, ol {
    padding: 0.2em 1em;
    list-style: none;
    margin-bottom: 0.5rem;
  }
  
  li {
    list-style: none;
    line-height: 1.5;
    padding: 0.2em 0.5;
    margin-bottom: 1.0rem;
    &::before {
      content:  "";
      width:  8px;
      height:  8px;
      display:  inline-block;
      background-color: ${({ theme }) => theme.colors.tertiary };
      border-radius:  50%;
      margin-right: 1.0rem;
    }
  }

  p {
    line-height: 1.7;
    margin-bottom: 1.5rem;
  }

  br {
    display: block;
  }

`;

StyledPost.defaultProps = {

}

export default StyledPost;
