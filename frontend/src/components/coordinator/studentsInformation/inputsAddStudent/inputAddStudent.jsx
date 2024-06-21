const InputAddStudent = ({ type, id, label, placeholder }) => {
  return (
    <div className="mb-5">
      <label htmlFor={id} className="mb-3 block text-base font-medium text-white">
        {label}
      </label>
      <input
        type={type}
        id={id}
        className="w-full appearance-none rounded-md border border-[#e0e0e0] bg-white py-2 px-6 text-base font-medium text-[#6B7280] outline-none"
        placeholder={placeholder}
      />
    </div>
  );
}

export default InputAddStudent;
