import React, { Component } from 'react';
import { Pane, Paragraph, Text } from 'evergreen-ui';

import '../../assets/css/header/banner.css';

class Banner extends Component {
    render() { 
        return (
            <Pane className="bannerWrap">
                <Pane className="swiperContainer">
                    <Pane className="swiperSlide">
                        <Text>Save Up to 40%</Text>
                        <Paragraph><a href="/#">Shop All Our New Markdowns</a></Paragraph>
                    </Pane>
                    {/*
                    <Pane className="swiperSlide">
                        <Text>Free Shipping & 60-Day Free Returns</Text>
                        <Paragraph><a href="/#">Join Now</a></Paragraph>
                    </Pane>
                    */}
                </Pane>
            </Pane>
        );
    }
}
 
export default Banner;