// import React from 'react';

export const CLIENTS_REQUEST = 'CLIENTS/CLIENTS_REQUEST';
export const CLIENTS_SUCCESS = 'CLIENTS/CLIENTS_SUCCESS';
export const CLIENTS_FAIL = 'CLIENTS/CLIENTS_FAIL';
export const CHANGE_PAGE = 'CLIENTS/CHANGE_PAGE';

export const initialState = {
    loading: true,
    clients: [],
    clientsOnPage: [],
    total: 0,
    countPages: 0,
    page: 1,
    limit: 5,
    offset: 0,
};
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

export const reducerClients = (state = initialState, action) => {
    let total, countPages, clientsOnPage, offset;

    switch (action.type) {
        case CLIENTS_REQUEST:
            return { ...state, loading: true, clients: [] };
        case CLIENTS_SUCCESS:
            total = action.payload.length;
            countPages = Math.ceil(total / state.limit);
            clientsOnPage = action.payload.filter(
                (item, index) =>
                    state.offset <= index && index < state.page * state.limit,
            );

            return {
                ...state,
                loading: false,
                clients: action.payload,
                total,
                countPages,
                clientsOnPage,
            };
        case CLIENTS_FAIL:
            return { ...state, loading: false, error: action.payload };
        case CHANGE_PAGE:
            offset = (action.page - 1) * state.limit;
            clientsOnPage = state.clients.filter(
                (item, index) =>
                    offset <= index && index < action.page * state.limit,
            );

            return { ...state, page: action.page, offset, clientsOnPage};

        default:
            return state;
    }
};
