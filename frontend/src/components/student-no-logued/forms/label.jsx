import React from 'react'
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
export const Label = (props) => {
    return (
        <label className="absolute left-0 text-white text-sm duration-300 transform -translate-y-6 scale-75 top-2 z-10 origin-[0] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6" htmlFor="completeName"{...props}>{props.children}</label>
    );
}
 
export default Label;