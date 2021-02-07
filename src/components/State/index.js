import React, { PureComponent } from 'react';

class StateComponent extends PureComponent {
    constructor(props) {
        super(props);
        this.state = {
            color: 'white'
        }
    }
    
    render() {
        return (
            <div>
                {this.state.color}
                <button onClick={() => this.setState({ color: 'black'})}>Change to black</button>
                <button onClick={() => this.setState({ color: 'white'})}>Change to white</button>
            </div>
        );
    }
}

export default StateComponent;