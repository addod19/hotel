import React from 'react';

import { RoomContext } from '../context';

class FeaturedRooms extends React.Component {

    static contextType = RoomContext;

    render() {
        const {name, greeting } = this.context;

        return(
            <>
                <h1>{greeting} {name} from featured rooms</h1>
            </>
        )
    }
}

export default FeaturedRooms;