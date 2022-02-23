import { Link } from "react-router-dom";

interface TagProps {
  label: string;
  small?: boolean;
}

const Tag: React.FC<TagProps> = ({ label, small }) => {
  let styles =
    "rounded-md px-2 text-white bg-slate-400 transition ease-in-out duration-200 hover:scale-110";
  if (small) {
    styles += " text-xs py-1";
  }
  return (
    <div className={styles}>
      <Link to={`/tags/${label}`}>{label}</Link>
    </div>
  );
};

export default Tag;
