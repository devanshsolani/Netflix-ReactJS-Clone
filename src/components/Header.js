import React, { Component } from 'react';
import logo from '../svg/logo.svg';
import styled from 'styled-components';
import { NavLink, Link } from 'react-router-dom';
import { Button } from './Button';
import Icon from 'react-icons-kit';
import {plus} from 'react-icons-kit/fa/plus'
import {play} from 'react-icons-kit/fa/play'


class Header extends Component {
  render() {
    return (
      <HeaderContainer className="header-container">
        <div className="header-top">
          <Link to="/">
            <Logo className="logo" src={logo} />
          </Link>
          <NavLink to="/login" className="btn signIn-btn">
            Sign In
          </NavLink>
        </div>
       
        <div className="header-content">
          <Title>NARCOS</Title>
          <SubTitle><i>All You Do Is Sit Back And Watch Netflix</i></SubTitle>
          <Link to="/choose-plan">
            <Button className="main-offer-btn" primary>
              Watch Now
              <Icon className="Icon" size={32} icon={play} />
            </Button>
            <Button className="main-offer-btn" primary >
              Add to list
              <Icon className="Icon" size={32} icon={plus} />
            </Button>
          </Link>
        </div>
      </HeaderContainer>
    );
  }
}

export default Header;

const Logo = styled.img`
  width: 10rem;
  height: 3.5rem;
  position: absolute;
  top: 25%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

const HeaderContainer = styled.header`
.Icon svg {
  vertical-align: bottom !important;
  margin-left: 1.5rem;
 
}
  .signIn-btn {
    right: 0;
    margin: 1.125rem 3% 0;
    padding: 0.4375rem 1.0625rem;
    font-wight: 400;
    line-height: normal;
    border-radius: 0.1875rem;
    font-size: 1rem;
    background: var(--main-red);
    position: absolute;
    translate: transform(-50%, -50%);
    transition: background 0.5s ease-in; 
    &:hover {
      background: #d30913;
    }
  
  }

  .main-offer-btn {
   
    margin: 0 33%;
    font-size: 1.5rem;
  }


  .header-top {
    position: relative;
    height: 10rem;
    z-index: 2;
  }


  .header-content {
    width: 60%
    position: relative;
    margin: 4.5rem auto 0;
    display: flex;
    justify-content: center;
    align-content: center;
    text-align: center;
    flex-direction: column;
    z-index: 2;
  }
`;

const Title = styled.h1`
  margin: 0 0 1.2rem;
  font-size: 4.2rem;
  font-weight: 700;
  line-height: 1em;
  &:hover {
    background: grey;
  }
  text-transform: uppercase;
  transition: background 0.8s ease-in;
`;

const SubTitle = styled.h2`
  font-weight: 2000;
  font-size: 1.875rem;
  line-height: 1.25em;
  margin: 0 0 1.875rem;
  text-transform: uppercase;

`;
