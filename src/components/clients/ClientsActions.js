import Button from '../../ui/Button';
import ClientAdd from './ClientAdd';
import { useState } from 'react';

export default function ClientsActions() {
    const [clientAddStatus, setClientAddStatus] = useState(false);

    const clientAddHandler = () => {
        setClientAddStatus(true);
    };

    const clientAddHideHandler = () => {
        setClientAddStatus(false);
    };

    return (
        <>
            <span>
                <Button color="danger" icon="trash">
                    Remove
                </Button>
            </span>

            <span>
                <Button color="primary" icon="plus" onClick={clientAddHandler}>
                     Add Client
                </Button>
            </span>

            <ClientAdd show={clientAddStatus} hide={clientAddHideHandler} />
        </>
    );
}
