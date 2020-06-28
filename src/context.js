import React from 'react';

const RoomContext = React.createContext();

class RoomProvider extends React.Component {

    state = {
        greeting: 'hello friends',
        name: 'Daniel'
    };
    render() {
        return(
            <>
                <RoomContext.Provider value={ {...this.state} }>
                    { this.props.children }
                </RoomContext.Provider>
            </>
        )
    }
}

const RoomConsumer = RoomContext.Consumer;

export { RoomProvider, RoomConsumer, RoomContext };