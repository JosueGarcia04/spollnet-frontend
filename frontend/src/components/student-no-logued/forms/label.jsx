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
        <label className="text-[#E31FAE] font-semibold" htmlFor="completeName"{...props}>{props.children}</label>
    );
}
 
export default Label;