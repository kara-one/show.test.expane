import Button from './Button';
import { useMemo } from 'react';

export default function Pagination({
    total,
    page,
    countPages,
    offset,
    limit,
    handler,
}) {
    const generatePages = (page, countPages) => {
        const items = [1];

        if (page < 4 || countPages - 3 < page) {
            items.push(2);
        }

        if (page === 2) {
            items.push(3);
        }

        if (page === 3) {
            items.push(3);
            items.push(4);
            items.push('...');
        } else items.push('...');

        if (3 < page && page < countPages - 2) {
            items.push(page - 1);
            items.push(page);
            items.push(page + 1);
            items.push('...');
        }

        if (page === countPages - 2) {
            items.push(page - 1);
            items.push(page);
        }

        if (page === countPages - 1) {
            items.push(page - 1);
        }

        if (page < 4 || (countPages - 3 < page && page <= countPages)) {
            items.push(countPages - 1);
        }
        items.push(countPages);

        return items;
    };
    const displayPages = useMemo(() => generatePages(page, countPages), [
        page,
        countPages,
    ]);
    const showingTo = useMemo(
        () => (limit * page < total ? limit * page : total),
        [limit, page, total],
    );

    return (
        <div className="bg-white flex items-center justify-between px-0">
            <div className="flex-1 flex sm:items-center justify-between space-x-3 sm:space-x-0">
                <div className="mr-3 hidden sm:block">
                    <p className="text-sm text-gray-700">
                        Showing{' '}
                        <span className="font-medium">{offset + 1}</span> to{' '}
                        <span className="font-medium">{showingTo}</span> of{' '}
                        <span className="font-medium">{total}</span> results
                    </p>
                </div>
                <div>
                    <nav
                        className="relative z-0 inline-flex rounded-md shadow-sm -space-x-px"
                        aria-label="Pagination"
                    >
                        <Button
                            color="light"
                            icon="chevronLeft"
                            onClick={() => handler(page - 1)}
                            disabled={page - 1 === 0}
                        >
                            <span className="sm:hidden">Previous</span>
                        </Button>

                        {displayPages.map((item, index) => (
                            <div
                                key={index}
                                className={`sm:block ${
                                    page !== item ? 'hidden' : ''
                                }`}
                            >
                                <Button
                                    color="light"
                                    onClick={() =>
                                        handler(item !== '...' ? item : 0)
                                    }
                                    active={page === item}
                                >
                                    <span className="mx-1">{item}</span>
                                </Button>
                            </div>
                        ))}

                        <Button
                            color="light"
                            icon="chevronRight"
                            onClick={() => handler(page + 1)}
                            disabled={page === countPages}
                            iconPosition="right"
                        >
                            <span className="sm:hidden">Next</span>
                        </Button>
                    </nav>
                </div>
            </div>
        </div>
    );
}
