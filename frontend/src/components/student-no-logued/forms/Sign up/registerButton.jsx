const RegisterButton = ({ text }) => {
  return (
    <button type="submit" className="w-full bg-gradient-to-r from-[#e7148c] to-[#6e1d5c] text-white py-2 rounded-full hover:bg-[#E41FAE] transition-colors duration-300">{text}</button>
  );
}

export default RegisterButton;
