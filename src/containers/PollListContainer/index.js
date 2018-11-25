// @vendors
import React from 'react';
import { Query } from "react-apollo";

// @components
import PollList from '../../components/PollList';
import { getAllPolls } from './queries';

const PollListContainer = () => (
    <Query query={getAllPolls}>
        {({ data, error, loading }) => {
            if (loading) return <p>Loading...</p>;
            if (error) return <p>Error</p>;

            return (
                <PollList polls={data.AllPolls} />
            );
        }}
    </Query>
);

export default PollListContainer;