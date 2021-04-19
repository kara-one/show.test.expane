import { forwardRef } from 'react';
import {
    CheckIcon,
    ChevronDownIcon,
    LinkIcon,
    PencilIcon,
    TrashIcon,
    PlusIcon,
} from '@heroicons/react/solid';

const colors = {
    light: `border-gray-200 text-gray-400 bg-white hover:bg-gray-200 hover:text-black active:bg-gray-50 active:text-black focus:ring-gray-500`,
    'light-danger': `border-gray-200 text-gray-400 bg-white hover:bg-red-500 hover:text-white active:bg-red-500 active:text-white focus:ring-red-500`,
    primary: `border-blue-300 text-blue-500 bg-blue-100 hover:bg-blue-700 hover:text-white active:bg-blue-700 active:text-white focus:ring-indigo-500`,
    success: `border-green-300 text-green-700 bg-green-100 hover:bg-green-500 hover:text-white active:bg-green-500 active:text-white focus:ring-green-500`,
    danger: `border-red-300 text-red-700 bg-red-100 hover:bg-red-500 hover:text-white active:bg-red-500 active:text-white focus:ring-red-500`,
    dark: `border-black text-gray-900 bg-gray-100 hover:bg-black hover:text-white active:bg-black active:text-white focus:ring-black`,
    warning: `border-yellow-300 text-yellow-700 bg-yellow-100 hover:bg-yellow-500 hover:text-white active:bg-yellow-500 active:text-white focus:ring-yellow-500`,
    indigo: `border-indigo-300 text-indigo-700 bg-indigo-100 hover:bg-indigo-900 hover:text-white active:bg-indigo-900 active:text-white focus:ring-indigo-500`,
};
const iconsAttrs = {
    className: 'h-5 w-5 text-current',
    'aria-hidden': 'true',
};
const icons = {
    check: <CheckIcon {...iconsAttrs} />,
    'chevron-down': <ChevronDownIcon {...iconsAttrs} />,
    link: <LinkIcon {...iconsAttrs} />,
    pencil: <PencilIcon {...iconsAttrs} />,
    trash: <TrashIcon {...iconsAttrs} />,
    plus: <PlusIcon {...iconsAttrs} />,
};

const Button = forwardRef(({ children, color, icon, ...props }, ref) => (
    <button
        {...props}
        ref={ref}
        className={`${colors[color]} inline-flex items-center text-white border focus:outline-none focus:ring-2 focus:ring-offset-2 rounded-md shadow-sm px-2 py-2 text-sm font-black `}
    >
        {icons[icon]} {children && <span className="ml-2">{children}</span>}
    </button>
));
export default Button;
