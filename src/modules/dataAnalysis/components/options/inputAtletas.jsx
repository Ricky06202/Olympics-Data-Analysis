import { useEffect } from "react";

export default function InputAtletas({ value, onChange }) {
  return (
    <div className="flex items-center justify-between px-4 py-3">
      <input
        className="w-full py-2 pl-10 pr-4 text-gray-700 bg-gray-200 rounded-full focus:outline-none focus:bg-white focus:shadow"
        type="text"
        placeholder="Buscar..."
        value={value}
        onChange={onChange}
      />
    </div>
  );
}
