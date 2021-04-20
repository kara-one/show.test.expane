import {
    CheckIcon,
    ChevronDownIcon,
    ChevronLeftIcon,
    ChevronRightIcon,
    LinkIcon,
    PencilIcon,
    PlusIcon,
    TrashIcon,
} from '@heroicons/react/solid';

import { forwardRef } from 'react';

const iconsAttrs = {
    className: 'h-5 w-5 text-current',
    'aria-hidden': 'true',
};
const icons = {
    check: <CheckIcon {...iconsAttrs} />,
    link: <LinkIcon {...iconsAttrs} />,
    pencil: <PencilIcon {...iconsAttrs} />,
    trash: <TrashIcon {...iconsAttrs} />,
    plus: <PlusIcon {...iconsAttrs} />,
    chevronLeft: <ChevronLeftIcon {...iconsAttrs} />,
    chevronRight: <ChevronRightIcon {...iconsAttrs} />,
    chevronDown: <ChevronDownIcon {...iconsAttrs} />,
};

const colors = {
    light: `border-gray-200 text-gray-400 bg-white hover:bg-gray-200 hover:text-black active:bg-gray-50 active:text-black focus:ring-gray-200 focus:bg-gray-200 focus:text-black`,
    'light-danger': `border-gray-200 text-gray-400 bg-white hover:bg-red-500 hover:text-white active:bg-red-500 active:text-white focus:ring-red-500 focus:bg-red-500 focus:text-white`,
    primary: `border-blue-300 text-blue-500 bg-blue-100 hover:bg-blue-700 hover:text-white active:bg-blue-700 active:text-white focus:ring-indigo-500 focus:bg-blue-700 focus:text-white`,
    success: `border-green-300 text-green-700 bg-green-100 hover:bg-green-500 hover:text-white active:bg-green-500 active:text-white focus:ring-green-500 focus:bg-green-500 focus:text-white`,
    danger: `border-red-300 text-red-700 bg-red-100 hover:bg-red-500 hover:text-white active:bg-red-500 active:text-white focus:ring-red-500 focus:bg-red-500 focus:text-white`,
    dark: `border-black text-gray-900 bg-gray-100 hover:bg-black hover:text-white active:bg-black active:text-white focus:ring-black focus:bg-black focus:text-white`,
    warning: `border-yellow-300 text-yellow-700 bg-yellow-100 hover:bg-yellow-500 hover:text-white active:bg-yellow-500 active:text-white focus:ring-yellow-500 focus:bg-yellow-500 focus:text-white`,
    indigo: `border-indigo-300 text-indigo-700 bg-indigo-100 hover:bg-indigo-900 hover:text-white active:bg-indigo-900 active:text-white focus:ring-indigo-500 focus:bg-indigo-900 focus:text-white`,
};
const activeColors = {
    light: `bg-gray-200 text-black`,
    'light-danger': `:bg-red-500 text-white`,
    primary: `bg-blue-700 text-white`,
    success: `bg-green-500 text-white`,
    danger: `bg-red-500 text-white`,
    dark: `bg-black text-white`,
    warning: `bg-yellow-500 text-white`,
    indigo: `bg-indigo-900 text-white`,
};

const Button = forwardRef(
    (
        { children, color, icon, iconPosition = 'left', active=false, ...props },
        ref,
    ) => (
        <button
            {...props}
            ref={ref}
            className={`${colors[color]} ${
                active && activeColors[color]
            } inline-flex items-center text-white border focus:outline-none focus:ring-2 focus:ring-offset-2 rounded-md shadow-sm px-2 py-2 text-sm font-black space-x-2 `}
        >
            {iconPosition === 'left' && icons[icon]}
            {children}
            {iconPosition === 'right' && icons[icon]}
        </button>
    ),
);
export default Button;
