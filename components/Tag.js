import { FaSlackHash } from "react-icons/fa";

const Tag = ({ id, color, name }) => {
  return (
    <div className="control" key={id}>
      <div className="tags has-addons">
        <span className="tag u-tag__hash"><FaSlackHash /></span>
        <span className={`tag is-${color}`}>{name}</span>
      </div>
    </div>
  )
}

export default Tag;