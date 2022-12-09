import React from 'react';
import styled from 'styled-components';

const Button = (props) => {
  const { children, onClick, type, width, height } = props;

  const ButtonWrap = styled.div`
    width: ${(props) => props.width}px;
    height: ${(props) => props.height}px;
    background-color: ${(props) => props.type === 'primary' ? '#6F32D2' : 'white'};
    border: ${(props) => props.type !== 'primary' ? '1px solid #6F32D2' : 'none'};
    border-radius: 8px;
    display: grid;
    place-items: center;
    color: ${(props) => props.type === 'primary' ? 'white' : '#6F32D2'};
    cursor: pointer;
  `

  return (
    <ButtonWrap type={type} width={width} height={height} onClick={() => onClick()}>{children}</ButtonWrap>
  )
}

export default Button;