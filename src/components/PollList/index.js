// @vendors
import React, { Component } from 'react';
import axios from 'axios';
import List from 'react-md/lib/Lists/List';
import ListItem from 'react-md/lib/Lists/ListItem';

const PollList = ({ polls }) => (
    <List>
        {polls.map(poll => (
            <ListItem
                key={poll._id}
                primaryText={poll.question}
            />
        ))}
    </List>
);

export default PollList;
