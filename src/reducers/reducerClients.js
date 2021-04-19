// import React from 'react';

export const constants = {
    'GET_ALL': 'CLIENTS/GET_ALL'
}

export const initialState = [
    {
        id: 1,
        firstName: 'Jane',
        lastName: 'Cooper',
        phone: '1234-3455-677',
        avatarUrl:
            'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=4&w=256&h=256&q=60',
    },
];

export const reducerClients = (state, action) => {
    const { type, id, payload, sortBy, order } = action;

    switch (type) {
        case constants.GET_ALL:
            return {
                ...state,
            };

        default:
            return state;
    }
};
