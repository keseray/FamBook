import React from 'react';
type PropType = { }
type StateType = {
name:string,
}
export default class Feed extends React.Component<PropType, StateType> {
    constructor(props: PropType) {
        super(props);
        this.state = {
            name: 'Aycan',
        };
    }

    render() {
        return (
            <div className="shopping-list">
                <h1>Shopping List for {this.state.name}</h1>
                <ul>
                    <li>Instagram</li>
                    <li>WhatsApp</li>
                    <li>Oculus</li>
                </ul>
            </div>
        );
    }
}

