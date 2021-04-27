import Modal from '../../ui/Modal';
import { useForm } from 'react-hook-form';

export default function ClientAdd({ show, hide }) {
    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
    } = useForm();

    const onSubmit = (data) => console.log(data);

    return (
        <Modal show={show} hide={hide} title="Add Client">
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className="py-5 bg-white space-y-6">
                    <div className="grid grid-cols-3 gap-6">
                        <div className="col-span-3 sm:col-span-2">
                            <label
                                htmlFor="company_website"
                                className="block text-sm font-medium text-gray-700"
                            >
                                Website
                            </label>
                            <div className="mt-1 flex rounded-md shadow-sm">
                                <span className="inline-flex items-center px-3 rounded-l-md border border-r-0 border-gray-300 bg-gray-50 text-gray-500 text-sm">
                                    http://
                                </span>
                                <input
                                    type="text"
                                    name="company_website"
                                    id="company_website"
                                    className="focus:ring-indigo-500 focus:border-indigo-500 flex-1 block w-full rounded-none rounded-r-md sm:text-sm border-gray-300"
                                    placeholder="www.example.com"
                                />
                            </div>
                        </div>
                    </div>
                </div>

                <input {...register('firstName')} />

                <input {...register('lastName', { required: true })} />
                {errors.exampleRequired && <span>This field is required</span>}

                <input type="submit" />
            </form>
        </Modal>
    );
}
