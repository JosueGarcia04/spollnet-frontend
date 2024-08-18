import React, { useState } from 'react';
import { EyeSlashIcon, EyeIcon } from '@heroicons/react/24/outline';

/**
 * @typedef {Object} Props
 * @property {string} [type] - The type of the input element.
 * @property {string} [placeholder] - The placeholder text.
 * @property {boolean} [disabled] - Whether the input is disabled.
 * @property {React.CSSProperties} [style] - The inline styles for the input element.
 * @property {string} [className] - The class name for the input element.
 * @property {(event: React.ChangeEvent<HTMLInputElement>) => void} [onChange] - The change event handler.
 */

/**
 * @param {Props} props - The props for the input component.
 */
export const Input = (props) => {
  const [showPassword, setShowPassword] = useState(false);
  
  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className="relative">
      <input
        {...props}
        type={props.type === 'password' && showPassword ? 'text' : props.type}
        className={`block w-full px-4 py-2 mt-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 text-xs focus:ring-[#E41FAE] focus:border-[#E41FAE] dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-[#E41FAE] dark:focus:border-[#E41FAE] ${props.className}`}
      />
      {props.type === 'password' && (
        <button
          type="button"
          onClick={togglePasswordVisibility}
          className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-transparent border-none cursor-pointer text-[#E41FAE]"
        >
          {showPassword ? (
            <EyeSlashIcon className="h-6 w-6" />
          ) : (
            <EyeIcon className="h-6 w-6" />
          )}
        </button>
      )}
    </div>
  );
}

export default Input;
