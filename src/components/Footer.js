import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { Icon } from 'react-icons-kit';
import { iosWorld } from 'react-icons-kit/ionicons/iosWorld';

class Footer extends Component {

  render() {
    return (
      <FooterContainer>
        <span style={{ marginLeft: '15%', fontSize: '1.125rem' }}>
          Questions?<Link to="/">   Call 1-877-742-1335</Link>
        </span>
        <div className="footer-columns">
          <ul>
            <li>
              <Link to="/">FAQ</Link>
            </li>
            <li>
              <Link to="/">Investor Relations</Link>
            </li>
            <li>
              <Link to="/">Ways to Watch</Link>
            </li>
            <li>
              <Link to="/">Corporate Information</Link>
            </li>
          
          </ul>
          <ul>
            <li>
              <Link to="/">Help Center</Link>
            </li>
            <li>
              <Link to="/">Jobs</Link>
            </li>
            <li>
              <Link to="/">Terms of Use</Link>
            </li>
            <li>
              <Link to="/">Contact Us</Link>
            </li>
          </ul>
          <ul>
            <li>
              <Link to="/">Account</Link>
            </li>
            <li>
              <Link to="/">Redeem Gift Cards</Link>
            </li>
            <li>
              <Link to="/">Privacy</Link>
            </li>
            <li>
              <Link to="/">Speed Test</Link>
            </li>
          </ul>
         
         
          <div >
            <Icon icon={iosWorld} size={20} />
            English
           
          </div>
        </div>
        
      
        <br />
     
      </FooterContainer>
    );
  }
}

export default Footer;



const FooterContainer = styled.footer`
  background: var(--main-deep-dark);
  padding-top: 10rem;
  padding-bottom: 3rem;
  color: #FFF;

  .footer-columns {
    width: 70%;
    margin: 1rem auto 0;
    font-size: 0.9rem;
    
    display: grid;
    grid-template-columns: auto auto auto auto;
    grid-gap: 2rem;
  
  }

  ul li {
    list-style: none;
    line-height: 2.5;
  }

  a {
    color: #FFF;
  }

  a:hover {
    text-decoration: underline;
    cursor: pointer; background: #d30913;
  }



`;
