import type { FC, ReactNode } from 'react';
import React from 'react';
import { IoCheckmarkCircleOutline } from 'react-icons/io5';

interface ToastProps {
  title: string;
  description?: string;
  actionButtons?: ReactNode;
  actionLink?: ReactNode;
  onClose?: () => void;
}

const Toast: FC<ToastProps> = ({
  title,
  description,
  actionButtons,
  actionLink,
  onClose,
}) => {
  return (
    <div className="flex items-center justify-between rounded-lg bg-white p-4 shadow-lg ring-1 ring-black ring-opacity-5 dark:bg-neutral-800">
      <div className="flex items-center">
        <IoCheckmarkCircleOutline className="size-6 text-green-500" />
        <div className="ml-3">
          <p className="text-sm font-medium text-neutral-900 dark:text-neutral-100">{title}</p>
          {description && (
            <p className="mt-1 text-sm text-neutral-500 dark:text-neutral-400">{description}</p>
          )}
          {actionButtons && <div className="mt-3 flex space-x-2">{actionButtons}</div>}
          {actionLink && <div className="mt-3 text-sm">{actionLink}</div>}
        </div>
      </div>
      {onClose && (
        <button
          type="button"
          className="-mx-1.5 -my-1.5 ml-auto inline-flex h-8 w-8 rounded-lg bg-white p-1.5 text-neutral-400 hover:bg-neutral-100 hover:text-neutral-900 focus:ring-2 focus:ring-neutral-300 dark:bg-neutral-800 dark:text-neutral-500 dark:hover:bg-neutral-700 dark:hover:text-white"
          onClick={onClose}
        >
          <span className="sr-only">Close</span>
          <svg
            className="h-5 w-5"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
              clipRule="evenodd"
            />
          </svg>
        </button>
      )}
    </div>
  );
};

export default Toast;