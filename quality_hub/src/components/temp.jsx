import logo from '../img/firelogo.png';
const vector2 = require('../img/landingvector.png');
const bgShape = require('../img/Rectangle5.png');
const handshakeVector = require('../img/Group.png');
const feedbackVector = require('../img/analytics1.png');
const hiredVetor = require('../img/startup1.png');

// styled components
const Logo = styled.div`
@@ -66,7 +70,7 @@ export const buttonTheme = {
export const invertTheme = {
  text: '#4fad65',
  background: 'white'
}
};

export const StyledButton = styled.button`
  background: ${props => props.theme.background};
@@ -162,6 +166,120 @@ const LandingVectorImageContainer = styled.div`
  }
`;

// middle section

const MiddleSectionContainer = styled.div`
  height: 100vh;
  width: 100%;
`;

const BgShape = styled.div`
  height: 100%;
  margin: 20px;
  background-image: url(${bgShape});
  background-size: 100% 100%;
  background-repeat: no-repeat;
  h2 {
    font-family: Ubuntu;
    font-style: normal;
    font-weight: bold;
    color: white;
    padding-top: 160px;
    font-size: 32px;
    text-align: center;
  }
`;

const SquaresContainer = styled.div`
  display: flex;
`;

const SquareLeft = styled.div`
  margin-top: 40px;
  margin-left: 40px;
  height: 270px;
  width: 28%;
  background: #ffffff;
  border: 1px solid #a3a3a3;
  box-sizing: border-box;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 5px;
  h3 {
    margin-left: 20px;
    margin-right: 20px;
    text-align: center;
    font-family: Ubuntu;
    font-style: normal;
    font-weight: bold;
    font-size: 28px;
  }
  p {
    margin-left: 40px;
    margin-right: 40px;
    font-family: Ubuntu;
    font-style: normal;
    font-weight: normal;
    font-size: 18px;
    line-height: 15px;
    text-align: center;
  }
`;

const ImgDiv = styled.div`
  margin-left: 20%;
  height: 30%;
  width: 75%;
  img {
    height: 100%;
    width: 80%;
  }
`;
const SquareRight = styled.div`
  margin-top: 40px;
  margin-left: 60px;
  height: 270px;
  width: 28%;
  background: #ffffff;
  border: 1px solid #a3a3a3;
  box-sizing: border-box;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 5px;
  h3 {
    margin-left: 20px;
    margin-right: 20px;
    text-align: center;
    font-family: Ubuntu;
    font-style: normal;
    font-weight: bold;
    font-size: 28px;
  }
  p {
    margin-left: 40px;
    margin-right: 40px;
    font-family: Ubuntu;
    font-style: normal;
    font-weight: normal;
    font-size: 18px;
    line-height: 15px;
    text-align: center;
  }
`;
const OtherImgDiv = styled.div`
  margin-left: 28%;
  height: 30%;
  width: 60%;
  img {
    height: 100%;
    width: 70%;
  }
`;
// react components

const SignUp = () => {
@@ -217,6 +335,43 @@ const Landing = () => {
          </LandingVectorImageContainer>
        </LandingRightContainer>
      </TopLandingContainer>
      <MiddleSectionContainer>
        <BgShape>
          <h2>Say goodbye to second guessing</h2>
          <SquaresContainer>
            <SquareLeft>
              <h3>Find your coach.</h3>
              <p>
                Match with an experienced professional, hand-selected by us for
                interviewing experience and mentoring ability.
              </p>
              <ImgDiv>
                <img src={handshakeVector} />
              </ImgDiv>
            </SquareLeft>
            <SquareRight>
              <h3>Get feedback.</h3>
              <p>
                Get targeted feedback on your own individual strengths and
                weaknesses, and a personalized plan to improve.
              </p>
              <OtherImgDiv>
                <img src={feedbackVector} />
              </OtherImgDiv>
            </SquareRight>
            <SquareRight>
              <h3>Get hired!</h3>
              <p>
                Take advantage of your newfound interview skills and land the
                job of your dreams.
              </p>
              <OtherImgDiv>
                <img src={hiredVetor}/>
              </OtherImgDiv>
            </SquareRight>
          </SquaresContainer>
        </BgShape>
      </MiddleSectionContainer>
    </div>
  );
};