import React, { useCallback, useEffect, useReducer } from 'react';
import { initialState, reducerClients } from '../../reducers/reducerClients';

import ClientRow from './ClientRow';
import { ClientsContext } from '../../context/Context';
import ClientsHeading from './ClientsHeading';
import { clientsRequest } from '../../actions/clientsActions';

export default function Clients() {
    const [state, dispatch] = useReducer(reducerClients, initialState);

    const request = useCallback(() => {
        clientsRequest(dispatch);
    }, [dispatch]);
    useEffect(() => {
        request();
    }, [request]);

    return (
        <ClientsContext.Provider value={{ dispatch, state }}>
            <ClientsHeading />
            <div className="flex flex-col">
                <div className="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
                    <div className="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
                        <div className="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
                            <table className="min-w-full divide-y divide-gray-200">
                                <thead className="bg-gray-50">
                                    <tr>
                                        <th
                                            scope="col"
                                            className="pl-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                                        >
                                            <input
                                                name="select-all"
                                                type="checkbox"
                                                className="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300 rounded"
                                            />
                                        </th>
                                        <th
                                            scope="col"
                                            className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                                        >
                                            Name
                                        </th>
                                        <th
                                            scope="col"
                                            className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                                        >
                                            Phone
                                        </th>
                                        <th
                                            scope="col"
                                            className="relative px-6 py-3"
                                        >
                                            <span className="sr-only">
                                                Edit
                                            </span>
                                        </th>
                                    </tr>
                                </thead>
                                <tbody className="bg-white divide-y divide-gray-200">
                                    {state.loading ? (
                                        <tr>
                                            <td
                                                colSpan="4"
                                                className="pl-6 py-4 text-center"
                                            >
                                                ... Load data
                                            </td>
                                        </tr>
                                    ) : (
                                        state.clientsOnPage.map((client) => (
                                            <ClientRow
                                                client={client}
                                                key={client.id}
                                            />
                                        ))
                                    )}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </ClientsContext.Provider>
    );
}
