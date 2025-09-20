import { OrbitProgress } from "react-loading-indicators"

const Loading = () => {
  return (
    <div className="flex items-center justify-center h-screen w-full">
      <OrbitProgress color="#145db8" size="large" text="" textColor="" />
    </div>
  )
}

export default Loading
