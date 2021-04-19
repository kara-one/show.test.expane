import { forwardRef } from 'react';
import {
    CheckIcon,
    ChevronDownIcon,
    LinkIcon,
    PencilIcon,
    TrashIcon,
} from '@heroicons/react/solid';

const colors = {
    light: `border border-gray-300 text-gray-700 bg-white hover:bg-gray-50`,
    primary: `border border-transparent text-white bg-indigo-600 hover:bg-indigo-700 active:bg-blue-700 active:text-white`,
    success: `border-green-700 border-2 text-green-700 active:bg-green-700 active:text-white`,
    danger: `border border-red-300 text-red-700 bg-red-100 hover:bg-red-500 hover:text-white`,
    dark: `border-black border-2 text-gray-900 active:bg-black active:text-white`,
    warning: `border-yellow-500 border-2 text-yellow-500 active:bg-yellow-500 active:text-white`,
    indigo: `border-indigo-900 border-2 text-indigo-900 active:bg-indigo-900 active:text-white`,
};
const iconsAttrs = {
    className: '-ml-1 mr-2 h-5 w-5 text-current',
    'aria-hidden': 'true',
};
const icons = {
    check: <CheckIcon {...iconsAttrs} />,
    'chevron-down': <ChevronDownIcon {...iconsAttrs} />,
    link: <LinkIcon {...iconsAttrs} />,
    pencil: <PencilIcon {...iconsAttrs} />,
    trash: <TrashIcon {...iconsAttrs} />,
};

const Button = forwardRef(({ children, color, icon, ...props }, ref) => (
    <button
        {...props}
        ref={ref}
        className={`${colors[color]} inline-flex items-center text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 rounded-md shadow-sm px-4 py-2 text-sm font-black `}
    >
        {icons[icon]} {children}
    </button>
));
export default Button;
