import { Fragment } from 'react';
import {
    CheckIcon,
    ChevronDownIcon,
    LinkIcon,
    PencilIcon,
    TrashIcon,
} from '@heroicons/react/solid';
import { Menu, Transition } from '@headlessui/react';
import ClientOrderList from './ClientOrderList';

function classNames(...classes) {
    return classes.filter(Boolean).join(' ');
}

export default function ClientsFilter() {
    return (
        <>
            <span className="hidden sm:block">
                <button
                    type="button"
                    className="inline-flex items-center px-4 py-2 border border-red-300 rounded-md shadow-sm text-sm font-black text-red-700 bg-red-100 hover:bg-red-500 hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                >
                    <TrashIcon
                        className="-ml-1 mr-2 h-5 w-5 text-current"
                        aria-hidden="true"
                    />
                    All
                </button>
            </span>

            <span className="hidden sm:block ml-3">
                <button
                    type="button"
                    className="inline-flex items-center px-4 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                >
                    <LinkIcon
                        className="-ml-1 mr-2 h-5 w-5 text-gray-500"
                        aria-hidden="true"
                    />
                    View
                </button>
            </span>

            <span className="sm:ml-3">
                <ClientOrderList />
            </span>

            <span className="sm:ml-3">
                <button
                    type="button"
                    className="inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                >
                    <CheckIcon
                        className="-ml-1 mr-2 h-5 w-5"
                        aria-hidden="true"
                    />
                    Publish
                </button>
            </span>

            {/* Dropdown */}
            <Menu as="span" className="ml-3 relative sm:hidden">
                {({ open }) => (
                    <>
                        <Menu.Button className="inline-flex items-center px-4 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                            More
                            <ChevronDownIcon
                                className="-mr-1 ml-2 h-5 w-5 text-gray-500"
                                aria-hidden="true"
                            />
                        </Menu.Button>

                        <Transition
                            show={open}
                            as={Fragment}
                            enter="transition ease-out duration-200"
                            enterFrom="transform opacity-0 scale-95"
                            enterTo="transform opacity-100 scale-100"
                            leave="transition ease-in duration-75"
                            leaveFrom="transform opacity-100 scale-100"
                            leaveTo="transform opacity-0 scale-95"
                        >
                            <Menu.Items
                                static
                                className="origin-top-right absolute right-0 mt-2 -mr-1 w-48 rounded-md shadow-lg py-1 bg-white ring-1 ring-black ring-opacity-5 focus:outline-none"
                            >
                                <Menu.Item>
                                    {({ active }) => (
                                        <a
                                            href="#"
                                            className={classNames(
                                                active ? 'bg-gray-100' : '',
                                                'block px-4 py-2 text-sm text-gray-700',
                                            )}
                                        >
                                            Edit
                                        </a>
                                    )}
                                </Menu.Item>
                                <Menu.Item>
                                    {({ active }) => (
                                        <a
                                            href="#"
                                            className={classNames(
                                                active ? 'bg-gray-100' : '',
                                                'block px-4 py-2 text-sm text-gray-700',
                                            )}
                                        >
                                            View
                                        </a>
                                    )}
                                </Menu.Item>
                            </Menu.Items>
                        </Transition>
                    </>
                )}
            </Menu>
        </>
    );
}
