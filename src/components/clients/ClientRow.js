import React from 'react';
import { PencilIcon, TrashIcon } from '@heroicons/react/solid';

export default function ClientRow({ client }) {
    return (
        <tr>
            <td className="pl-6 py-4 text-left">
                <input
                    name="select-one"
                    type="checkbox"
                    value={client.id}
                    className="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300 rounded"
                />
            </td>
            <td className="px-6 py-4 whitespace-nowrap">
                <div className="flex items-center">
                    <div className="flex-shrink-0 h-10 w-10">
                        <img
                            className="h-10 w-10 rounded-full"
                            src={client.avatarUrl}
                            alt=""
                        />
                    </div>
                    <div className="ml-4">
                        <div className="text-sm font-medium text-gray-900">
                            {client.firstName}
                        </div>
                        <div className="text-sm text-gray-500">
                            {client.lastName}
                        </div>
                    </div>
                </div>
            </td>
            <td className="px-6 py-4 whitespace-nowrap text-left">
                <div className="text-sm text-gray-900">{client.phone}</div>
            </td>
            <td className="px-6 py-4 whitespace-nowrap ">
                <div className="flex justify-end">
                    <PencilIcon
                        className="h-8 w-8 mr-2 p-1 text-gray-400 cursor-pointer rounded-sm hover:bg-blue-600 hover:text-white"
                        aria-hidden="true"
                    />
                    <TrashIcon
                        className="h-8 w-8 p-1 text-gray-400 cursor-pointer rounded-sm hover:bg-red-600 hover:text-white"
                        aria-hidden="true"
                    />
                </div>
            </td>
        </tr>
    );
}
