import Button from '../../ui/Button';

export default function ClientsActions() {
    return (
        <>
            <span>
                <Button color="danger" icon="trash">
                    Remove
                </Button>
            </span>

            <span>
                <Button color="primary" icon="plus">
                    Add Client
                </Button>
            </span>
        </>
    );
}
