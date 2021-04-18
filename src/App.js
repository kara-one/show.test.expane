import './App.css';
import NavbarTop from './components/navbar/NavbarTop';
import Clients from './components/clients/Clients';

function App() {
    return (
        <div className="App">
            <NavbarTop />

            <main>
                <div className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
                    <Clients />
                </div>
            </main>
        </div>
    );
}

export default App;
