function Input({
  label,
  type = "text",
  placeholder,
  ...props
}) {
  return (
    <div>
      <label className="mb-2 block font-medium text-gray-700">
        {label}
      </label>

      <input
        type={type}
        placeholder={placeholder}
        className="w-full rounded-xl border border-gray-300 px-4 py-3 outline-none transition focus:border-blue-900"
        {...props}
      />
    </div>
  );
}

export default Input;