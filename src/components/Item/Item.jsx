import React from 'react';
import * as Styled from './styles';

const Item = (props) => {
  return (
    <Styled.ImageContainer key={props.key} onClick={props.onClick}>
      <Styled.Image src={props.src} alt={props.title}/>
    </Styled.ImageContainer>
  )
}

export default Item;