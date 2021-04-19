import './App.css';
import NavbarTop from './components/navbar/NavbarTop';
import Clients from './components/clients/Clients';
import { ClientsContext } from './context/Context';
import { useReducer } from 'react';
import { initialState, reducerClients } from './reducers/reducerClients';

function App() {
    const [state, dispatch] = useReducer(reducerClients, initialState);

    return (
        <div className="App">
            <NavbarTop />

            <main>
                <div className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
                    <ClientsContext.Provider value={{ dispatch, state }}>
                        <Clients />
                    </ClientsContext.Provider>
                </div>
            </main>
        </div>
    );
}

export default App;
