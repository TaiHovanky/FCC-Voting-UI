// @vendors
import React from 'react';
import { Card, CardTitle, CardText } from 'react-md';

// @components
import PollList from '../PollList';

import './style.scss';

const Home = (props) => (
    <Card className="md-block-centered">
        <CardTitle title="Voting App" subtitle="because democracy rules" />
        <CardText>
            <p>
                See all your polls with React and Redux
            </p>
        </CardText>
        <PollList />
    </Card>
);

export default Home;