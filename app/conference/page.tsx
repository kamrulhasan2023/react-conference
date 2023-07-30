"use client";
import SingleConferenceDetails from '@components/single-conference-details';
import React from 'react';
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';

const  singleEventPage = () => {
    const client = new ApolloClient({
    uri: 'https://api.react-finland.fi/graphql',
    cache: new InMemoryCache(),
    });
    return (
        <div className= "single-event-details mt-24 max-w-[1320px] mx-auto">
             <ApolloProvider client={client}>
                <SingleConferenceDetails />
             </ApolloProvider>
        </div>
    );
};

export default singleEventPage;