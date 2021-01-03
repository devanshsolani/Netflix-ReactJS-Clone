import React from 'react';
import { Button } from './Button';
import styled from 'styled-components';
import OnPh from '../images/tab-tablet.png';
import OnTv from '../images/OnTV.jpeg';
import { Link } from 'react-router-dom';
import { NavLink } from 'react-router-dom';


function TabContentTwo() {
  return (
    <TabContainer>
      <div className="tab-content">
        <div className="tab-top-content">
          <span style={{ fontSize: '1.5rem' }}>
            Watch TV shows and movies anytime, anywhere — personalized for you.
          </span>
          <Link className="btn" to="/choose-plan">
            <Button>try it now</Button>
          </Link>
        </div>
       
        <div className="tab-bottom-content">
        
          <div>
            <img src={OnTv} alt="tv" />
            <h3>Watch on your TV</h3>
            <p>
              Smart TVs, PlayStation, Xbox, Chromecast, Apple TV, Blu-ray
              players and more.
            </p>
          </div>
       
          <div>
         
          
         
          <img src={OnPh} alt="tablet" />
          <Link to="/Fortv"> <h3>Watch on your Phone</h3> </Link>
            <p>
              Smart TVs, PlayStation, Xbox, Chromecast, Apple TV, Blu-ray
              players and more.
            </p>
          </div>
       
         
        </div>
      </div>
    </TabContainer>
  );
}

export default TabContentTwo;




const TabContainer = styled.div`
  background: var(--main-deep-dark);

  .tab-content {
    margin: 0 10%;
  }

  .tab-top-content {
    display: grid;
    grid-template-columns: repeat(12, 1fr);
    padding: 2.5rem 0;

  }

  img {
    width: 370px;
    height:290px;
  }

  span {
    grid-column: 1 / 8;
 
  }

  .btn {
    margin: 0 1.25rem 1.25rem;
    grid-column: 10 / 12;

  }


  .tab-bottom-content {
    display: grid;
    grid-template-columns: auto auto auto;
    grid-gap: 2rem;
    text-align: center;
    margin-top: 2rem;

  }

  h3 {
    margin: 0.5rem 0;
  }

  p {
    color: var(--main-grey);
  }
`;
