import { ClientsContext } from '../../context/Context';
import Pagination from '../../ui/Pagination';
import { changePage } from '../../actions/clientsActions';
import { useContext } from 'react';

export default function ClientsPagination() {
    const { state, dispatch } = useContext(ClientsContext);
    
    const changePageHandler = (id) => {
        if (id > 0) {
            changePage(id)(state, dispatch);
        }
    };
    
    const props = {
        total: state.total,
        page: state.page,
        countPages: state.countPages,
        offset: state.offset,
        limit: state.limit,
        handler: changePageHandler,
    };

    return <Pagination {...props} />;
}
