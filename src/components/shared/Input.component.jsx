/**
 * Reusable input component.
 * @see Input - shadcn input component
 */
const Input = ({
  id,
  type = 'text',
  placeholder = '',
  value,
  onChange,
  className = '',
  disabled,
}) => {
  return (
    <input
      id={id}
      type={type}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      className={`input font-semibold w-full bg-transparent text-sm text-foreground placeholder:text-muted-foreground outline-none ${className}`}
      disabled={disabled}
      aria-label="Task title"
    />
  );
};

export default Input;
