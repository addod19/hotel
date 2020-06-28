import React from 'react';

import { RoomContext } from '../context';

class FeaturedRooms extends React.Component {

    static contextType = RoomContext;

    render() {
        const value = this.context;
        console.log(value);
        return(
            <>
                <h1>Hello from featured rooms {value}</h1>
            </>
        )
    }
}

export default FeaturedRooms;