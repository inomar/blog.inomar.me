import { FaSlackHash } from "react-icons/fa";
import styled from 'styled-components';
import { typography, color, space } from 'styled-system';

const getColor = ({ theme }) => `
  background-color: ${theme.colors.base};
`;

const tagStyle = ({ theme }) => `
  align-items: center;
  border-radius: 6px;
  display: inline-flex;
  height: 2em;
  justify-content: center;
  line-height: 1.5;
  white-space: nowrap;
`;

const Content = styled.div`
  ${typography}
  ${getColor}
  ${space}
  border-radius: 6px;
  box-sizing: border-box;
  clear: both;
  position: relative;
  text-align: left;
`;

const TagMain = styled.div`
  align-items: center;
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
`;

const TagHead = styled.span`
  ${color}
  ${space}
  ${typography}
  ${tagStyle}
  border-bottom-right-radius: 0;
  border-top-right-radius: 0;
`;

const TagBody = styled.span`
  ${color}
  ${space}
  ${typography}
  ${tagStyle}
  border-bottom-left-radius: 0;
  border-top-left-radius: 0;
`;


const Tag = ({ id, color, name }) => {
  return (
    <Content mr={2}>
      <TagMain>
        <TagHead bg="primary" color="white" px={2} fontSize={0}>
          <FaSlackHash />
        </TagHead>
        <TagBody px={2} fontSize={0}>{name}</TagBody>
      </TagMain>
    </Content>
  )
}

export default Tag;