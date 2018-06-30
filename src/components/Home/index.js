import React from 'react';
import { Card, CardTitle, CardText } from 'react-md';

const Home = (props) => (
    <Card className="md-block-centered">
        <CardTitle title="Voting App" subtitle="because democracy rules" />
        <CardText>
            <p>
                See all your polls
            </p>
        </CardText>
    </Card>
);

export default Home;