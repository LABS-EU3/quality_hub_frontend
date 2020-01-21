import React from 'react';
import { connect } from 'react-redux';
import {
  BodyDiv,
  FAQContainer,
  AskedQuestionDiv,
  AnsweredQuestionDiv,
} from './FaqStyles';
import * as actionCreators from '../../state/actions/faqActions';

import plusIcon from '../../img/plus-icon.svg';
import minusIcon from '../../img/minus-icon.svg';

const icons = { plusIcon, minusIcon };

const General = props => {
  const {
    text1,
    text2,
    image1,
    image2,
    showText1,
    showText2,
    showImage1,
    showImage2,
  } = props;

  const getImage1 = () => (image1 ? 'plusIcon' : 'minusIcon');
  const getImage2 = () => (image2 ? 'plusIcon' : 'minusIcon');

  return (
    <div>
      <BodyDiv>
        <FAQContainer>
          <AskedQuestionDiv
            onClick={display => {
              showText1(display);
              showImage1(display);
            }}
          >
            <p>What is DevCoach?</p>
            {<img src={icons[getImage1()]} alt='icon' />}
          </AskedQuestionDiv>
          {text1 && (
            <AnsweredQuestionDiv>
              DevCoach is a large network of experienced professionals
              ready to help your next career move be a big success.
            </AnsweredQuestionDiv>
          )}

          <AskedQuestionDiv
            onClick={display => {
              showText2(display);
              showImage2(display);
            }}
          >
            <p>How does it work?</p>
            {<img src={icons[getImage2()]} alt='icon' />}
          </AskedQuestionDiv>
          {text2 && (
            <AnsweredQuestionDiv>
              <li>Choose a quality you want to improve</li>
              <li>Connect with real professionals</li>
              <li>Iterate on your skills</li>
              <li>Become career ready</li>
            </AnsweredQuestionDiv>
          )}
        </FAQContainer>
      </BodyDiv>
    </div>
  );
};

export default connect(
  state => state.faqReducers,
  actionCreators,
)(General);
