export const ButtonContactMe = (props) => {
  return (
    <button className="px-6 py-2 font-bold text-white transition duration-500 ease-in-out transform rounded-lg shadow-lg cursor-pointer bg-gradient-to-r from-sky-700 to-blue-500 hover:from-sky-500 hover:to-blue-700 hover:shadow-xl hover:-translate-y-1">
      {props.children}
    </button>
  );
};
