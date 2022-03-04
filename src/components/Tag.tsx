import React from "react"
import { useNavigate } from "react-router-dom"

interface TagProps {
  label: string
  small?: boolean
}

const Tag: React.FC<TagProps> = ({ label, small }) => {
  const navigate = useNavigate()
  let styles =
    "rounded-md px-2 text-white bg-slate-400 transition ease-in-out duration-200 hover:scale-110 cursor-pointer"
  if (small) {
    styles += " text-xs py-1"
  }
  return (
    <div
      className={styles}
      onClick={(e) => {
        e.preventDefault()
        navigate(`/tags/${label}`)
      }}
    >
      {label}
    </div>
  )
}

export default Tag
