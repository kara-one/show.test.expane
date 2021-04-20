import {
    CHANGE_PAGE,
    CLIENTS_FAIL,
    CLIENTS_REQUEST,
    CLIENTS_SUCCESS,
} from '../reducers/reducerClients';
import { gql, request } from 'graphql-request';

export const clientsRequest = async (dispatch) => {
    dispatch({ type: CLIENTS_REQUEST });

    const query = gql`
        {
            getClients {
                id
                firstName
                lastName
                phone
                avatarUrl
            }
        }
    `;

    try {
        const data = await request(
            'https://test-task.expane.pro/api/graphql',
            query,
        );
        const clients = data.getClients;
        clients.sort((a, b) => a.id - b.id);

        dispatch({ type: CLIENTS_SUCCESS, payload: clients });

        return clients;
    } catch (error) {
        dispatch({ type: CLIENTS_FAIL, error: error.message });
    }
};

export const changePage = (page) => (state, dispatch) => {
    dispatch({ type: CHANGE_PAGE, page });
};
