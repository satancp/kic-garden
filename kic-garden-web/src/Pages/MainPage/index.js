import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import Slider from 'react-slick';
import './index.css';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

class MainPage extends Component {
    constructor() {
        super();
        this.state = { inLabelLink: false };
    }

    render() {
        const { inLabelLink } = this.state;
        let linkCenterWidth = 5;
        if (inLabelLink) {
            linkCenterWidth = 20;
        }
        return (
            <div className="kic-garden-mainpage-container">
                <div className="kic-garden-mainpage-hot-news-container">
                    <Slider
                        dots={true}
                        fade={true}
                        infinite={true}
                        speed={500}
                        autoplay={true}
                        slidesToShow={1}
                        slidesToScroll={1}>
                        {[
                            'https://s3.amazonaws.com/fhl-website/content/uploads/2019/09/27170026/New_Monuments-2.jpg',
                            'https://s3.amazonaws.com/fhl-website/content/uploads/2019/09/25150609/HL_FallGuide_Header_TimothySchenck_header.jpg',
                        ].map((v, index) => {
                            return (
                                <div key={index} className="kic-garden-mainpage-hot-news-single-container">
                                    <img className="kic-garden-mainpage-hot-news-single-background" src={v} />
                                    <div className="kic-garden-mainpage-hot-news-single-label-container">
                                        <div className="kic-garden-mainpage-hot-news-single-content-container">
                                            <div className="kic-garden-mainpage-hot-news-single-label-title">
                                                Free High Line Tours
                                            </div>
                                            <div className="kic-garden-mainpage-hot-news-single-label-subtitle">
                                                Every Tuesday
                                            </div>
                                        </div>
                                        <div
                                            className="kic-garden-mainpage-hot-news-single-label-link"
                                            onMouseEnter={() => {
                                                this.setState({
                                                    inLabelLink: true,
                                                });
                                            }}
                                            onMouseLeave={() => {
                                                this.setState({
                                                    inLabelLink: false,
                                                });
                                            }}>
                                            <div className="kic-garden-mainpage-hot-news-single-label-link-left">
                                                Learn more
                                            </div>
                                            <div
                                                className="kic-garden-mainpage-hot-news-single-label-link-center"
                                                style={{ width: linkCenterWidth }}
                                            />
                                            <div className="kic-garden-mainpage-hot-news-single-label-link-right">
                                                ->
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            );
                        })}
                    </Slider>
                </div>
            </div>
        );
    }
}

export default withRouter(MainPage);
