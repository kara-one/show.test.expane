// import React from 'react';

export const CLIENTS_REQUEST = 'CLIENTS/CLIENTS_REQUEST';
export const CLIENTS_SUCCESS = 'CLIENTS/CLIENTS_SUCCESS';
export const CLIENTS_FAIL = 'CLIENTS/CLIENTS_FAIL';

export const initialState = { loading: true, clients: [] };
export const fakeState = {
    loading: false,
    clients: [
        {
            id: 1,
            firstName: 'Jane',
            lastName: 'Cooper',
            phone: '1234-3455-677',
            avatarUrl:
                'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=4&w=256&h=256&q=60',
        },
    ],
};

export const reducerClients = (state, action) => {
    switch (action.type) {
        case CLIENTS_REQUEST:
            return { loading: true, clients: [] };
        case CLIENTS_SUCCESS:
            return {
                loading: false,
                clients: action.payload,
            };
        case CLIENTS_FAIL:
            return { loading: false, error: action.payload };

        default:
            return state;
    }
};
