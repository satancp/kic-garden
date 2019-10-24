import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import Slider from 'react-slick';
import './index.css';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import services from '../../services';
import QueueAnim from 'rc-queue-anim';
import { OverPack } from 'rc-scroll-anim';
import LAN from '../../strings';
import shortcut1 from '../../assets/shortcut1.jpg';
import shortcut2 from '../../assets/shortcut2.jpg';
import shortcut3 from '../../assets/shortcut3.jpg';

class MainPage extends Component {
    constructor() {
        super();
        this.state = { inLabelLink: false, hotNews: [] };
    }

    async componentDidMount() {
        const { currentLan } = this.props;
        const hotNews = await services.hotNewsService.getHotNews(currentLan);
        this.setState({
            hotNews,
        });
    }

    render() {
        const { currentLan } = this.props;
        const { inLabelLink, hotNews } = this.state;
        let linkCenterWidth = 5;
        if (inLabelLink) {
            linkCenterWidth = 20;
        }
        return (
            <div className="kic-garden-mainpage-container">
                <OverPack>
                    <div className="kic-garden-mainpage-hot-news-container">
                        <QueueAnim delay={300} leaveReverse>
                            <Slider
                                dots={true}
                                fade={true}
                                infinite={true}
                                speed={500}
                                autoplay={true}
                                arrows={false}
                                slidesToShow={1}
                                slidesToScroll={1}>
                                {hotNews.map((v, index) => {
                                    return (
                                        <div key={index} className="kic-garden-mainpage-hot-news-single-container">
                                            <img
                                                className="kic-garden-mainpage-hot-news-single-background"
                                                src={v.img_url}
                                            />
                                            <div className="kic-garden-mainpage-hot-news-single-label-container">
                                                <div className="kic-garden-mainpage-hot-news-single-content-container">
                                                    <div className="kic-garden-mainpage-hot-news-single-label-title">
                                                        {v.translations.title}
                                                    </div>
                                                    <div className="kic-garden-mainpage-hot-news-single-label-subtitle">
                                                        {v.translations.desc}
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
                                                        {v.translations.link_desc}
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
                        </QueueAnim>
                    </div>
                    <div className="kic-garden-mainpage-shortcut-container">
                        <QueueAnim delay={300} leaveReverse className="kic-garden-mainpage-shortcut-anim-container">
                            <div className="kic-garden-mainpage-shortcut-single-container">
                                <div className="kic-garden-mainpage-shortcut-single-real-container">
                                    <img className="kic-garden-mainpage-shortcut-single-image" src={shortcut1}></img>
                                    <div className="kic-garden-mainpage-shortcut-single-text">
                                        {LAN[currentLan].SHORTCUT[0].TITLE}
                                    </div>
                                </div>
                            </div>
                            <div className="kic-garden-mainpage-shortcut-single-container">
                                <div className="kic-garden-mainpage-shortcut-single-real-container">
                                    <img className="kic-garden-mainpage-shortcut-single-image" src={shortcut2}></img>
                                    <div className="kic-garden-mainpage-shortcut-single-text">
                                        {LAN[currentLan].SHORTCUT[1].TITLE}
                                    </div>
                                </div>
                            </div>
                            <div className="kic-garden-mainpage-shortcut-single-container">
                                <div className="kic-garden-mainpage-shortcut-single-real-container">
                                    <img className="kic-garden-mainpage-shortcut-single-image" src={shortcut3}></img>
                                    <div className="kic-garden-mainpage-shortcut-single-text">
                                        {LAN[currentLan].SHORTCUT[2].TITLE}
                                    </div>
                                </div>
                            </div>
                        </QueueAnim>
                    </div>
                </OverPack>
            </div>
        );
    }
}

export default withRouter(MainPage);
