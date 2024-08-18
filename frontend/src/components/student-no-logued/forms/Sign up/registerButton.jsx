const RegisterButton = ({ text }) => {
  return (
    <button className="bg-[#E41FAE] text-white px-6 py-3 rounded-md shadow-md hover:bg-[#d81b9a] font-bold transition-colors duration-300 w-full">
      {text}
    </button>
  );
}

export default RegisterButton;
