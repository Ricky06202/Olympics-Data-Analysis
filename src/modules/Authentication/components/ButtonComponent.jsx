export default function ButtonComponent({ classPlus, text, onClick }) {
  return (
    <button
      className={" text-3xl font-bold rounded-sm text-white" + " " + classPlus}
      onClick={onClick}
    >
      {text}
    </button>
  );
}
