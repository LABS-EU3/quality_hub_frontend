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

const Payment = props => {
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
            <p>How does our payment system work?</p>
            {<img src={icons[getImage1()]} alt='icon' />}
          </AskedQuestionDiv>
          {text1 && (
            <AnsweredQuestionDiv>
              <li>Devcoach will take care of the payments</li>
              <li>
                Students must pay upfront when scheduling an
                appointment
              </li>
              <li>
                We are the middleman between the students and the
                coaches
              </li>
              <li>
                Coaches only get paid if the interview happenend
              </li>
              <li>
                If an appointment doesn't happen, the student will get
                the money from DevCoach back
              </li>
              <li>
                Both the coach and student are required to prove that
                the interview happened
              </li>
            </AnsweredQuestionDiv>
          )}

          <AskedQuestionDiv
            onClick={display => {
              showText2(display);
              showImage2(display);
            }}
          >
            <p>Which payments do you provide?</p>
            {<img src={icons[getImage2()]} alt='icon' />}
          </AskedQuestionDiv>
          {text2 && (
            <AnsweredQuestionDiv>
              Currently we provide:
              <li>Stripe</li>
              <li>Paypal</li>
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
)(Payment);
