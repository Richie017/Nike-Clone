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
          <Heading size={1000} marginLeft={20} marginRight={20}>
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
                <Heading size={600} className='txt'>
                  Liverpool FC 2021/22 Home Jersey
                </Heading>
                <Button className='btn'> Shop </Button>
              </Pane>
            </Pane>
            <Pane className='img-container' marginLeft={5}>
              <img src={shoe1} alt='' />
              <Pane className='btn-txt'>
                <Heading size={600} className='txt'>
                  Nike Football Impulse Pack
                </Heading>
                <Button className='btn'> Shop </Button>
              </Pane>
            </Pane>
          </Pane>
        </Pane>
      </Pane>
    );
  }
}

export default Trending;
