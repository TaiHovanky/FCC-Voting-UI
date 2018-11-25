// @vendors
import React from 'react';
import ReactDOM from 'react-dom';
// import { ApolloClient } from 'apollo-client';
import ApolloClient from "apollo-boost";
import { ApolloLink } from 'apollo-link';
import { ApolloProvider } from 'react-apollo';

// @components
import VotingApp from './components/VotingApp';

const client = new ApolloClient();

ReactDOM.render(
    <ApolloProvider client={client}>
        <VotingApp />
    </ApolloProvider>,
    document.getElementById('root')
);