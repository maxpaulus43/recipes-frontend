import { useEffect } from "react"

export default function useKeyEventHandler(
  keyEvent: string,
  handler: () => void,
) {
  useEffect(() => {
    function handleKey({ key }: KeyboardEvent) {
      if (key === keyEvent) {
        handler()
      }
    }
    document.addEventListener("keydown", handleKey, false)

    return () => {
      document.removeEventListener("keydown", handleKey, false)
    }
  }, [])
}
