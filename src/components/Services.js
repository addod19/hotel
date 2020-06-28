import React from 'react';
import { FaCocktail, FaHiking, FaSHuttleVan, FaBeer, FaShuttleVan } from 'react-icons/fa';

import Title from './Title';

class Services extends React.Component {

    state = {
        services: [
            {
                icon: <FaCocktail />,
                title: 'free cocktails',
                info: 'I am a dummy text for eduxcaion purposes',
            },
            {
                icon: <FaHiking />,
                title: 'free hikings',
                info: 'I am a dummy text for eduxcaion purposes',
            },
            {
                icon: <FaBeer />,
                title: 'free Beer',
                info: 'I am a dummy text for eduxcaion purposes',
            },
            {
                icon: <FaShuttleVan />,
                title: 'free shuttleVan',
                info: 'I am a dummy text for eduxcaion purposes',
            }

        ]
    }

    render() {
        return(
            <section className="services">
                <Title title="services" />
                <div className="services-center">
                    { this.state.services.map( (item, index) => {
                        return <article key={index} className="service" >
                            <span>{item.icon}</span>
                            <h6>{item.title}</h6>
                            <p>{item.info}</p>
                        </article>
                    }
                    )}
                </div>
            </section>
        )
    }
}

export default Services;