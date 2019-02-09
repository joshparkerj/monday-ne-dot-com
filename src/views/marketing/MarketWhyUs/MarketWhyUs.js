import React, { Component } from 'react';
import './market-why-us.scss';
import GetStartedBtn from '../../../components/GetStartedBtn/GetStartedBtn';
import MarketFactCard from '../../../components/MarketFactCard/MarketFactCard';

class WhyUs extends Component {
    render() {
        return (
            <div className="why-us-container">
                <div className="header-wrapper">
                    <h1 className="header-text">
                        <span className="red-text"> 350,000 </span> people, from <span className="blue-text"> 76 </span> countries, in <span className="green-text"> 50,000 </span> teams manage their work with monday.com
                    </h1>
                    <GetStartedBtn />
                    <h1>
                        And <span className="red-text">here's</span> why
                    </h1>
                    <p>
                        Our customers are cool people doing cool things, and we're inspired by the creative, innovative, and brilliant ways they use our platform.
                    </p>
                </div>
                <MarketFactCard
                    text={'of our customers say monday.com helps them stay on top of all their work'}
                    percent={'91'}
                    logo={'Discovery'}
                    quote={'It’s a great tool that allows us to organize our work visually in a way that is easy to use and understand.'}
                    name={'Katherine Simano |Associate art director'}
                    color={'green-card'}
                />
                <MarketFactCard
                    text={'of our customers say monday.com helps them stay on top of all their work'}
                    percent={'91'}
                    logo={'Discovery'}
                    quote={'It’s a great tool that allows us to organize our work visually in a way that is easy to use and understand.'}
                    name={'Katherine Simano |Associate art director'}
                    color={'purple-card'}
                />
                <MarketFactCard
                    text={'of our customers say monday.com helps them stay on top of all their work'}
                    percent={'91'}
                    logo={'Discovery'}
                    quote={'It’s a great tool that allows us to organize our work visually in a way that is easy to use and understand.'}
                    name={'Katherine Simano |Associate art director'}
                    color={'blue-card'}
                />
            </div>
        )
    }
}

export default WhyUs;