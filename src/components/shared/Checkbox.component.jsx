/**
 * Custom checkbox with consistent styling.
 * @see Checkbox - shadcn checkbox component
 */
import { Checkbox } from "@/components/ui/checkbox";

const CustomCheckbox = ({ checked, onChange }) => {
  return (
    <Checkbox
      checked={checked}
      onCheckedChange={onChange}
      className="
        h-5 w-5 rounded-full
        border border-border
      data-[state=checked]:text-white
        data-[state=checked]:border--check-gradient
        data-[state=checked]:[background-image:var(--check-gradient)]
      "
    />
  );
};

export default CustomCheckbox;
