/* Input.component.jsx */
//This file is for an input component that has a reusable structure.

const Input = ({ id, type = "text", placeholder = "", value, onChange, className = "", disabled }) => {
  return (
    <input
      id={id}
      type={type}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      className={`input font-semibold w-full bg-transparent text-sm text-foreground placeholder:text-foreground outline-none ${className}`}
      disabled={disabled}
    />
  );
};

export default Input;
