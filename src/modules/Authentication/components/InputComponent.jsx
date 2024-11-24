export default function InputComponent({ classPlus, text, value, onChange }) {
  return (
    <input
      className={"px-16 border border-gray-300 rounded-md" + " " + classPlus}
      type="text"
      value={value}
      placeholder={text}
      maxLength="50"
      onChange={onChange}
    />
  );
}
