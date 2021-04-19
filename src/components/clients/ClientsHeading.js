/* This example requires Tailwind CSS v2.0+ */
import ClientsPagination from './ClientsPagination';
import ClientsFilter from './ClientsFilter';

function classNames(...classes) {
    return classes.filter(Boolean).join(' ');
}

export default function ClientsHeading() {
    return (
        <div className="lg:flex lg:items-center lg:justify-between lg:items-stretch mb-4 sm:px-0 px-4">
            <div className="flex-1 min-w-0">
                <h2 className="mb-3 text-2xl font-bold text-left leading-7 text-gray-900 sm:text-3xl sm:truncate">
                    Clients
                </h2>
                <div className="mt-1 flex flex-col sm:flex-row sm:flex-wrap sm:mt-0 sm:space-x-6">
                    <ClientsFilter />
                </div>
            </div>
            <div className="mt-5 flex justify-end items-end lg:mt-0 lg:ml-4">
                <ClientsPagination />
            </div>
        </div>
    );
}
