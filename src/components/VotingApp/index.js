// @vendors
import React from 'react';
import { Card, CardTitle, CardText } from 'react-md';

// @components
import PollList from '../../containers/PollListContainer';

import './style.scss';

const VotingApp = (props) => (
    <Card className="md-block-centered">
        <CardTitle title="Voting App" subtitle="because democracy rules" />
        <CardText>
            <strong>
                See all of your polls:
            </strong>
        </CardText>
        <PollList />
    </Card>
);

export default VotingApp;