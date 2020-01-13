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

const Profile = props => {
  const {
    text1,
    text2,
    text3,
    image1,
    image2,
    image3,
    showText1,
    showText2,
    showText3,
    showImage1,
    showImage2,
    showImage3,
  } = props;

  const getImage1 = () => (image1 ? 'plusIcon' : 'minusIcon');
  const getImage2 = () => (image2 ? 'plusIcon' : 'minusIcon');
  const getImage3 = () => (image3 ? 'plusIcon' : 'minusIcon');

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
            <p>How do I update my profile?</p>
            {<img src={icons[getImage1()]} alt='icon' />}
          </AskedQuestionDiv>
          {text1 && (
            <AnsweredQuestionDiv>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Nulla id tristique magna, et gravida nibh. Phasellus
              tempus sem a mi consectetur, ac ultricies mauris
              condimentum. Duis nec metus ante. Morbi feugiat mauris
              non lectus sodales sodales. Proin eu auctor elit,
              facilisis tincidunt velit. Sed in lectus non urna varius
              eleifend ac ut ligula. In eleifend at mi in molestie.
            </AnsweredQuestionDiv>
          )}

          <AskedQuestionDiv
            onClick={display => {
              showText2(display);
              showImage2(display);
            }}
          >
            <p>Is it compulsory to have a picture?</p>
            {<img src={icons[getImage2()]} alt='icon' />}
          </AskedQuestionDiv>
          {text2 && (
            <AnsweredQuestionDiv>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Nulla id tristique magna, et gravida nibh. Phasellus
              tempus sem a mi consectetur, ac ultricies mauris
              condimentum. Duis nec metus ante. Morbi feugiat mauris
              non lectus sodales sodales. Proin eu auctor elit,
              facilisis tincidunt velit. Sed in lectus non urna varius
              eleifend ac ut ligula. In eleifend at mi in molestie.
            </AnsweredQuestionDiv>
          )}

          <AskedQuestionDiv
            onClick={display => {
              showText3(display);
              showImage3(display);
            }}
          >
            <p>Is it compulsory to have a picture?</p>
            {<img src={icons[getImage3()]} alt='icon' />}
          </AskedQuestionDiv>
          {text3 && (
            <AnsweredQuestionDiv>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Nulla id tristique magna, et gravida nibh. Phasellus
              tempus sem a mi consectetur, ac ultricies mauris
              condimentum. Duis nec metus ante. Morbi feugiat mauris
              non lectus sodales sodales. Proin eu auctor elit,
              facilisis tincidunt velit. Sed in lectus non urna varius
              eleifend ac ut ligula. In eleifend at mi in molestie.
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
)(Profile);
