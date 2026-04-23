/**  Heading.component.jsx
  * Style Component: Heading
  * A reusable heading component for consistent styling of headings. 
*/

const Heading = ({ children, hLevel = 1, className = '' }) => {
  const Tag = `h${hLevel}`;
  return <Tag className={`font-bold ${className}`}>{children}</Tag>;
};

export default Heading;
