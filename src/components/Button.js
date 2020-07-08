import React from "react";
import styled, { css } from "styled-components";
import { Wrapper, Fadein } from "./styled/index";
import { Link } from "react-router";
// const StyledButton = styled.button`
// padding:1rem 1.5rem;
// font-size:1.8rem;
// color:${props =>props.primary ? 'red' : '#fff'};
// outline:none;
// border:none;
// margin-bottom:1rem;
// background-color:#333;
// ${({primary}) => primary &&
// css`
// color:red;
// background-color:${({bgColor}) => bgColor } `}
// `;

const StyledButton = styled.button`
  background-color: ${(props) => props.theme.colors.light};
  color: ${(props) => props.theme.colors.main};
  font-size: ${(props) => props.theme.fontSizes.p};
  margin: 0.8rem;
  padding: 0.5rem 1rem;
  margin-top: ${({ theme }) => theme.spacers.large};
  border: 1px solid palevioletred;
  border-radius: 4px;
  animation: 2s ${Fadein} ease-in;

  &:hover {
    color: white;
    background-color: palevioletred;
  }
  ${({ primary }) =>
    primary &&
    css`
      background-color: palevioletred;
      color: white;
      box-shadow: 0 0.5rem 1.5rem rgba(0, 0, 0, 0.2);
      &:hover {
        color: palevioletred;
        background-color: white;
      }
    `}
    @media ${({ theme }) => theme.mediaQueries.bellow786}
`;

const OutterWrapper = styled.div`
  width: 100%;
  background-color: blueviolet;
  margin-top: 2rem;
  &:hover ${StyledButton} {
    color: blueviolet;
  }
`;

// const SuperButton = styled(StyledButton)
// `
//     font-size: 2.5rem;

// `;

// const StyledLink  = styled(Link)
// `

// `;
const Button = ({ primary, children }) => {
  return (
    <OutterWrapper>
      <StyledButton primary={primary}> {children}</StyledButton>
      {/* <SuperButton>{children} </SuperButton>  */}
    </OutterWrapper>
  );
};

export default Button;
