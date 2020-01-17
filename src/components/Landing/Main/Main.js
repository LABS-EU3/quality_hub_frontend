import React from 'react';
import { MainContainer } from './Main-styles';

import aboutOne from './img/how-it-works-1.jpg';
import aboutTwo from './img/how-it-works-2.jpg';
import aboutThree from './img/how-it-works-3.jpg';
import personOne from './img/person-1.jpg';
import personTwo from './img/person-2.jpg';
import personThree from './img/person-3.jpg';

const Main = () => (
  <MainContainer>
    <div className='main-about-top'>
      <h2 className='main-about-title'>
        Enhance your skills. Land your dream job.
        <span className='logo'> DevCoach</span>
      </h2>
      <p className='main-about-intro'>
        We connect developers looking to improve their interviewing
        technique with experienced pros who have mastered the
        technical interview and can coach you through the process from
        start to finish.
      </p>
    </div>

    <div className='main-about-bottom'>
      <h4>How does DevCoach work?</h4>
      <div className='about-cards'>
        <div className='about-card'>
          <div className='image'>
            <img src={aboutTwo} alt='hand shake´' />
          </div>
          <div className='card-info'>
            <h6>Find Your Coach</h6>
            <p>
              Match with experienced professionals tailored to you
            </p>
          </div>
        </div>
        <div className='about-card'>
          <div className='image'>
            <img src={aboutOne} alt='analytics´' />
          </div>
          <div className='card-info'>
            <h6>Enhance Your Skills</h6>
            <p>Practice mock interviews one on one with your coach</p>
          </div>
        </div>
        <div className='about-card'>
          <div className='image'>
            <img src={aboutThree} alt='analytics´' />
          </div>
          <div className='card-info'>
            <h6>Get Hired</h6>
            <p>Ace the real interview and land that dream job</p>
          </div>
        </div>
      </div>
    </div>

    <div className='user-stories-container'>
      <h2 className='user-stories-title'>
        Hear more about how DevCoach helped students master the
        technical interview and land their dream job
      </h2>

      <div className='user-stories'>
        <div className='user-story'>
          <div className='user-header'>
            <img src={personOne} alt='user' />
            <h3>John Davidson</h3>
          </div>
          <p>
            DevCoach definitely played a role in my performance.
            Nothing beats mock coding interviews. I still remember my
            first coding interview a few years back with another
            company.
          </p>
        </div>
        <div className='user-story'>
          <div className='user-header'>
            <img src={personTwo} alt='user' />
            <h3>Aaron Ruiz</h3>
          </div>
          <p>
            Practicing with DevCoach gave me the confidence I needed
            to have a fun coding interview and eventually get the
            offers I wanted. Believe it or not, this time I wasn't
            even nervous when the day came
          </p>
        </div>
        <div className='user-story'>
          <div className='user-header'>
            <img src={personThree} alt='user' />
            <h3>Jessica Booth</h3>
          </div>
          <p>
            DevCoach helped me to get an amazing hands-on technical
            interview experience. After some preparation, I decided to
            test my skills in algorithms, so I scheduled a couple of
            DevCoach interviews.
          </p>
        </div>
      </div>
    </div>
  </MainContainer>
);

export default Main;
