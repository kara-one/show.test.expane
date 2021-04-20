import Button from '../../ui/Button';
import nophoto from '../../assets/img/nophoto.jpg';

export default function ClientRow({ client }) {
    const imgErrorHandler = (elem) => {
        elem.target.src = nophoto;
        elem.target.onerror = null;
    };

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
                            onError={(e) => imgErrorHandler(e)}
                            // onError={imgErrorHandler.bind(this)}
                            // onerror="this.onerror=null;this.src='imagefound.gif';"
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
                <div className="flex justify-end space-x-2">
                    <Button color="light" icon="pencil" />
                    <Button color="light-danger" icon="trash" />
                </div>
            </td>
        </tr>
    );
}
