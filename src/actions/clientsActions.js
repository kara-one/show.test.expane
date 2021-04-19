import {
    CLIENTS_FAIL,
    CLIENTS_REQUEST,
    CLIENTS_SUCCESS,
    fakeState,
} from '../reducers/reducerClients';

export const clientsRequest = async (dispatch) => {
    dispatch({ type: CLIENTS_REQUEST });

    try {
        // GET DATA await
        // const clients = fakeState.clients;
        let clients;
        await setTimeout(() => {
            dispatch({ type: CLIENTS_SUCCESS, payload: fakeState.clients });
        }, 1000);

        // dispatch({type: CLIENTS_SUCCESS, payload: clients})

        return clients;
    } catch (error) {
        dispatch({ type: CLIENTS_FAIL, error: error.message });
    }
};
