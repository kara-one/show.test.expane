/* This example requires Tailwind CSS v2.0+ */
import ClientsPagination from './ClientsPagination';
import ClientsFilter from './ClientsFilter';
import ClientsActions from './ClientsActions';

export default function ClientsHeading() {
    return (
        <div className="lg:flex lg:items-center lg:justify-between lg:items-stretch mb-4 sm:px-0 px-4">
            <div className="flex flex-col justify-between min-w-0">
                <h2 className="mb-3 text-2xl font-bold text-left leading-7 text-gray-900 sm:text-3xl sm:truncate">
                    Clients
                </h2>
                <div className="flex flex-row justify-end sm:justify-start items-end flex-wrap space-x-3">
                    <ClientsFilter />
                </div>
            </div>
            <div className="mt-3 lg:mt-0 lg:ml-4 flex flex-col justify-end items-end">
                <div className="mt-1 mb-3 flex flex-row justify-end items-end flex-wrap space-x-3">
                    <ClientsActions />
                </div>
                <div className="mt-1 flex flex-row justify-end items-end flex-wrap">
                    <ClientsPagination />
                </div>
            </div>
        </div>
    );
}
