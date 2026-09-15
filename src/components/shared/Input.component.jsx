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
      className={`input min-w-0 w-full bg-transparent text-sm font-semibold text-foreground outline-none placeholder:text-muted-foreground sm:text-base ${className}`}
      disabled={disabled}
      aria-label="Task title"
    />
  );
};

export default Input;
