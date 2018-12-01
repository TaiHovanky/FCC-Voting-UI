// @vendors
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
// import { ApolloClient } from 'apollo-client';
import ApolloClient from "apollo-boost";
import { ApolloLink } from 'apollo-link';
import { ApolloProvider } from 'react-apollo';

// @components
import VotingApp from './components/VotingApp';
import SignUpForm from './components/SignUpForm';

const client = new ApolloClient();

ReactDOM.render(
    <ApolloProvider client={client}>
        <Router>
            <div>
                <nav>
                    <ul>
                        <li>
                            <Link to="/">Home</Link>
                        </li>
                        <li>
                            <Link to="/signup">Signup</Link>
                        </li>
                    </ul>
                </nav>

                <Route path="/" exact component={VotingApp} />
                <Route path="/signup" exact component={SignUpForm} />
            </div>
        </Router>
    </ApolloProvider>,
    document.getElementById('root')
);