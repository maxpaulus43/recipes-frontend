import React, { useEffect, useState } from "react"
import { Outlet, useNavigate } from "react-router-dom"
import SearchBar from "./components/SearchBar"
import Tag from "./components/Tag"
import API from "./store/API"

function App() {
  const navigate = useNavigate()
  const [tags, setTags] = useState<string[]>([])

  // TODO put this somewhere better
  // useEffect(() => {
  //   API.getAllTags().then((theTags) => setTags(theTags))
  // }, [])

  return (
    <div className="flex flex-col items-center lg:justify-center bg-slate-300 gap-2 h-screen p-5">
      <div className="w-full flex flex-col gap-3 items-center">
        <div
          className="w-10 h-10 cursor-pointer"
          onClick={() => {
            navigate("/")
          }}
        >
          <img src="../favicon.svg" alt="go home" title="go home" />
        </div>
        <div className="relative w-full lg:w-1/2">
          <SearchBar />
        </div>
        {tags.length > 0 && (
          <div className="flex flex-row gap-2">
            {tags.map((t) => {
              return <Tag label={t} key={t} />
            })}
          </div>
        )}
      </div>
      <Outlet />
    </div>
  )
}

export default App
