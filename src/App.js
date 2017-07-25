import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  NavLink
} from 'react-router-dom'
import './App.css';
import App from 'grommet/components/App';
import Box from 'grommet/components/Box';
import Menu from 'grommet/components/Menu';
import Footer from 'grommet/components/Footer';
import Paragraph from 'grommet/components/Paragraph';
import Section from 'grommet/components/Section';


import Header from 'grommet/components/Header';

import Title from 'grommet/components/Title';
import Actions from 'grommet/components/icons/base/Actions';
import Anchor from 'grommet/components/Anchor';

import Home from './Home';
import About from './About';
import Topics from './Topics';


class MyApp  extends React.Component  {
  render() {
    return (
      <App>

        <Header>
          <Title>
            Sample Title
          </Title>

          <Box flex={true}
            justify='end'
            direction='row'
            responsive={false}>
            <Menu icon={<Actions />}
              dropAlign={{"right": "right"}}>
              <Anchor href='#'
                className='active'>
                First
              </Anchor>
              <Anchor href='#'>
                Second
              </Anchor>
              <Anchor href='#'>
                Third
              </Anchor>
            </Menu>
          </Box>
        </Header>        


      <Section>
        <p>Hello from a Grommet page!</p>
        <p>Hello from a Grommet page!</p>
        <p>Hello from a Grommet page!</p>
        <p>Hello from a Grommet page!</p>
        <p>Hello from a Grommet page!</p>
        <p>Hello from a Grommet page!</p>
      </Section>


        <Footer justify='end'>
          <Box direction='row'
            align='center'
            pad={{"between": "medium"}}>
            <Paragraph margin='none'>
              © 2016 Grommet Labs
            </Paragraph>
            <Menu direction='row'
              size='small'
              dropAlign={{"right": "right"}}>
              <Anchor href='#'>
                Support
              </Anchor>
              <Anchor href='#'>
                Contact
              </Anchor>
              <Anchor href='#'>
                About
              </Anchor>
            </Menu>
          </Box>
        </Footer>
      
      </App>
    );
  }
}

export default MyApp;
