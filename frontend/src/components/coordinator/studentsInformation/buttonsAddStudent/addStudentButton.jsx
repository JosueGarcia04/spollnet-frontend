export default function AddStudentButton({ text = "Agregar estudiante", additionalClasses = "" }) {
  return (
    <button className={`bg-[#E41FAE] text-white py-3 rounded-md shadow-md hover:bg-[#d81b9a] font-bold transition-colors duration-300 w-full ${additionalClasses}`}>
      {text}
    </button>
  );
}
