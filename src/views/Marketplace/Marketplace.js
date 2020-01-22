import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import Pagination from 'antd/lib/pagination';
import 'antd/lib/pagination/style/index.css';
import Loader from 'react-loader-spinner';
import CoachCard from '../../components/Cards/CoachCard';
import {
  getCoaches,
  searchForKeyword,
  searchForPrice,
  searchForExperience,
} from '../../state/actions/marketplaceActions';
import { saveCoach } from '../../state/actions/bookingActions';
import { getFeedback } from '../../state/actions/feedbackActions';
import { saveForChat } from '../../state/actions/chatActions';
import SelectPrice from '../../components/Inputs/SelectPrice';
import SelectExperience from '../../components/Inputs/SelectExperience';
import SearchForKeyword from '../../components/Inputs/SearchForKeyword';

const StyledMarketplace = styled.div`
  display: flex;
  flex-direction: column;

  .top {
    display: flex;
    justify-content: space-around;
    align-items: center;
    padding-top: 1rem;

    .keyword {
      margin-top: 1rem;
    }
  }

  .coaches {
    display: flex;
    flex-wrap: wrap;
    width: 100%;
    justify-content: space-evenly;
    padding-top: 1rem;
  }

  .pagination {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;

    .ant-pagination-item-active {
      border-color: #4fad65;
    }

    .ant-pagination-item-active a {
      color: #4fad65;
    }
  }
  .loaderStyled {
    margin-top: 200px;
    margin-left: 35rem;
    margin-bottom: 200px;
  }
`;

const Marketplace = ({
  searchForKeyword,
  getCoaches,
  coaches,
  searchForPrice,
  searchForExperience,
  saveCoach,
  getFeedback,
  feedback,
  saveForChat,
}) => {
  const [minValue, setMinValue] = useState(0);
  const [maxValue, setMaxValue] = useState(6);

  useEffect(() => {
    getCoaches();
  }, [getCoaches]);

  const handlePagination = value => {
    if (value <= 1) {
      setMinValue(0);
      setMaxValue(6);
    } else {
      setMinValue(value * 6 - 6);
      setMaxValue(value * 6);
    }
  };

  return (
    <StyledMarketplace>
      <div className='top'>
        <SelectPrice searchForPrice={searchForPrice} />
        <SearchForKeyword
          searchForKeyword={e => searchForKeyword(e.target.value)}
        />
        <SelectExperience searchForExperience={searchForExperience} />
      </div>
      <div className='coaches'>
        {coaches ? (
          coaches.slice(minValue, maxValue).map(coach => (
            <CoachCard
              key={coach.first_name}
              coach={coach}
              saveCoach={() => saveCoach(coach)}
              getFeedback={getFeedback}
              feedback={feedback}
              saveForChat={() =>
                saveForChat({
                  email: coach.email,
                  name: `${coach.first_name} ${coach.last_name}`,
                })
              }
            />
          ))
        ) : (
          <div className='loaderStyled'>
            <Loader
              type='TailSpin'
              color='#2BAD60'
              height={80}
              width={80}
            />
          </div>
        )}
      </div>
      <div className='pagination'>
        <Pagination
          defaultCurrent={1}
          defaultPageSize={6}
          onChange={handlePagination}
          total={coaches && coaches.length}
        />
      </div>
    </StyledMarketplace>
  );
};
const mapStateToProps = state => {
  return {
    coaches: state.marketplaceReducer.coaches,
    feedback: state.feedbackReducer.feedback,
  };
};

export default connect(mapStateToProps, {
  getCoaches,
  searchForKeyword,
  searchForPrice,
  searchForExperience,
  saveCoach,
  getFeedback,
  saveForChat,
})(Marketplace);
