import React, { Component } from 'react';
import { Pane, Text, Button, Heading } from 'evergreen-ui';
import shoe1 from '../assets/images/shoe-1.png';
import liverpool from '../assets/images/liverpool-1.png';
import '../assets/css/ImageButton.css';
class Trending extends Component {
  render() {
    return (
      <Pane>
        <Pane>
          <Heading
            size={1400}
            color='#111'
            marginLeft={20}
            marginRight={20}
            paddingTop={10}
            paddingBottom={20}
            fontWeight={500}
            fontFamily='Helvetica Neue|Helvetica|Arial|sans-serif'>
            Trending
          </Heading>
          <Pane
            display='flex'
            position='relative'
            marginLeft={20}
            marginRight={20}>
            <Pane className='img-container' marginRight={5}>
              <img src={liverpool} alt='' />
              <Pane className='btn-txt'>
                <Heading size={700} className='txt'>
                  Liverpool FC 2021/22 Home Jersey
                </Heading>
                <Button height={45} className='btn'>
                  Shop
                </Button>
              </Pane>
            </Pane>
            <Pane className='img-container' marginLeft={5}>
              <img src={shoe1} alt='' />
              <Pane className='btn-txt'>
                <Heading size={700} className='txt'>
                  Nike Football Impulse Pack
                </Heading>
                <Button height={45} className='btn'>
                  Shop
                </Button>
              </Pane>
            </Pane>
          </Pane>
        </Pane>
      </Pane>
    );
  }
}

export default Trending;
