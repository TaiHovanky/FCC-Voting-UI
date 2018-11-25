// @vendors
import React, { Component } from 'react';
import axios from 'axios';
import List from 'react-md/lib/Lists/List';
import ListItem from 'react-md/lib/Lists/ListItem';

class PollList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            polls: []
        }
    }

    componentDidMount () {
        /* In order to make sure the UI can grab data from the API,
        for now I'm having an axios call in componentDidMount. Later,
        I'll wrap this component in a container that uses Apollo's query
        component to fetch the data. */
        axios.get('http://localhost:3000/allpolls').then(response => {
            this.setState({
                polls: response.data
            });
        });
    }

    render () {
        return (
            <List>
                {this.state.polls.map(poll => (
                    <ListItem
                        key={poll._id}
                        primaryText={poll.question}
                    />
                ))}
            </List>
        );
    }
}

export default PollList;
