import React from 'react';

import Hero from '../components/Hero';
import Banner from '../components/Banner';
import defaultBcg from '../images/room-2.jpeg';
import { Link } from 'react-router-dom';
import { RoomContext } from '../context';

class SingleRoom extends React.Component {

    constructor(props) {
        super(props);
        // console.log(this.props);
        this.state = {
            slug: this.props.match.params.slug,
            defaultBcg
        }
    }

    static contextType = RoomContext;

    // componentDidMount(){}
   
    render() {
        const { getRoom } = this.context;
        const room = getRoom(this.state.slug);
        if (!room) {
            return(
                <div className="error">
                    <h3>No such room available</h3>
                    <Link to='/' className="btn-primary" >
                        Back to rooms
                    </Link>
                </div>
            )
        }
        const { name, description, pets, size, capacity, price, extras, breakfast, images} = room;
        return(
            <Hero hero="roomsHero">
                <Banner title={`${name} room`}>
                    <Link to="/" className="btn-primary">
                        Back to rooms
                    </Link>
                </Banner>
            </Hero>
        )
    }
}

export default SingleRoom;