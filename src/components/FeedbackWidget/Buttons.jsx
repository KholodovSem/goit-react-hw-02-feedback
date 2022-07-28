import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const ButtonList = styled.ul`
  display: flex;

  padding: 0;

  list-style: none;
`;

const ListItem = styled.li`
  &:not(:last-child){
    margin-right: 20px;
  }
`;

const Button = styled.button`
  min-width: 80px;

  padding: 5px;

  border: 1px solid black;
  cursor: pointer;

  &:hover{
    transform: scale(1.1);
  }
`;

const GreenButton = styled(Button)`
background-color: limegreen;
`;

const RedButton = styled(Button)`
background-color: red;
`;



const Buttons = ({tipGoodFeedback, tipNeutralFeedback, tipBadFeedback}) => (
  <ButtonList>
    <ListItem>
      <GreenButton onClick={tipGoodFeedback}>Good</GreenButton>
    </ListItem>
    <ListItem>
      <Button onClick={tipNeutralFeedback}>Neutral</Button>
    </ListItem>
    <ListItem>
      <RedButton onClick={tipBadFeedback}>Bad</RedButton>
    </ListItem>
  </ButtonList>
)

Buttons.propTypes = {
  tipBadFeedback: PropTypes.func.isRequired,
  tipGoodFeedback: PropTypes.func.isRequired,
  tipNeutralFeedback: PropTypes.func.isRequired
}

export default Buttons;

