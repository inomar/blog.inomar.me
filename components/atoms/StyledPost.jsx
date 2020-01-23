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
    margin: 2.5rem 0 0.8rem;
  }
  h3 {
    font-size: 1.2rem;
    margin: 2.5rem 0 0.8rem;
  }
  h4 {
    font-size: 1rem;
    font-weight: bold;
    margin: 2.5rem 0 0.8rem;
  }
  h5 {
    font-size: 1rem;
    margin: 2.5rem 0 0.8rem;
  }

  ul, ol {
    padding: 0.2em 1em;
    list-style-type: disc;
    margin-bottom: 0.5rem;
  }
  
  li {
    line-height: 1.5;
    padding: 0.2em 0.5;
    margin-bottom: 1.0rem;
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
