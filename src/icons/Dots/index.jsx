import React from "react";
import styled from "styled-components";

const Dots = ({ type, totalLine }) => {
  const Wrapper = styled.div`
    display: flex;
    cursor: pointer;
  `;

  const DotsWrapper = styled.div`
    display: flex;
    flex-direction: ${(props) => (props.type === 'vertical' || props.type === 'vertical-one-line') ? 'column' : 'row'};;
    margin-right: ${(props) => props.type === 'vertical' ? '2.87px' : 0};
  `

  const Dot = styled.div`
    height: ${(props) => props.type === "vertical" ? "4px" : "2.55px"};
    width: ${(props) => props.type === "vertical" ? "4px" : "2.67px"};
    border-radius: 50%;
    margin-bottom: ${(props) => (props.type === "vertical" && !props.lastChild ) ? "3px" : "0"};
    margin-right: ${(props) =>
      (props.type === "horizontal" && !props.lastChild )? "2.55px" : "none"};
    background-color: ${(props) =>
      props.type === "vertical" ? "#BCC0D0" : "#252A3C"};
  `;

  return (
    <Wrapper type={type}>
      {type === "vertical" ? (
        <>
          <DotsWrapper type={type}>
            <Dot type={type} />
            <Dot type={type} />
            <Dot type={type} lastChild />
          </DotsWrapper>
          <DotsWrapper type={type}>
            <Dot type={type} />
            <Dot type={type} />
            <Dot type={type} lastChild />
          </DotsWrapper>
        </>
      ) : (
        <DotsWrapper>
          <Dot type={type} />
          <Dot type={type} />
          <Dot type={type} lastChild />
        </DotsWrapper>
      )}
    </Wrapper>
  );
};

export default Dots;
