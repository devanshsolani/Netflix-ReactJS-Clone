import React, { Component } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

class LoginFooter extends Component {
  state = {
    langContent: false
  };

  handleToggle = e => {
    e.preventDefault();
    this.setState({
      langContent: !this.state.langContent
    });
  };
  render() {
    return (
      <FooterContainer>
        <span style={{ marginLeft: '10%', color: '#999' }}>
          Questions?&nbsp;<Link to="/">Call 1-877-742-1335</Link>
        </span>
        <div className="footer-columns">
          <ul>
            <li>
              <Link to="/">Gift Card Terms</Link>
            </li>
          </ul>
          <ul>
            <li>
              <Link to="/">Terms of Use</Link>
            </li>
          </ul>
          <ul>
            <li>
              <Link to="/">Privacy Statement</Link>
            </li>
          </ul>
        </div>

        
      </FooterContainer>
    );
  }
}

export default LoginFooter;



const FooterContainer = styled.footer`
  justify-content: center;
  background: rgba(0, 0, 0, 0.8);
  padding-top: 3rem;
  padding-bottom: 4rem;
  margin-top: 6rem;
  position: relative;
  z-index: 5;


  .footer-columns {
    width: 80%;
    margin: 1rem auto 0;
    color: #999;
    font-size: 0.9rem;
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-gap: 2rem;

  }

  .question-link {
    margin-left: 10%;

  }

  a {
    color: #999;
    font-size: 0.9rem;
  }

  a:hover {
    text-decoration: underline;
    cursor: pointer;
  }

  ul li {
    list-style: none;
    line-height: 2.5;
  }

  ul li a:hover {
    text-decoration: underline;
    cursor: pointer;
  }

  // Language Button
  .lang-btn {
    background: transparent;
    border: 0.9px solid #333;
    margin-left: 10%;
    margin-top: 2rem;
    padding: 1rem;
    color: #999;
    width: 8rem;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    cursor: pointer;

  }

  // Toggle Language Content
  .lang-toggle {
    margin-left: 10%;
    position: absolute;

  }

  .lang-toggle ul {
    background: var(--main-deep-dark);
    width: 8.125rem;
    border: 1px solid #333;
    text-align: center;
    color: #999;
    &:hover {
      background: #0085ff;
      color: #fff;
    }
  }
`;
