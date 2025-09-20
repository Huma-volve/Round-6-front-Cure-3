// import { IoIosNotifications } from "react-icons/io";
import icon from "@/assets/images/interface-design 1.jpg"

const Empty = () => {
  return <>
    <div className="flex flex-col gap-2 items-center justify-center mt-20">
        <img src={icon} className="w-60 h-60" />
        <h2>Nothing to display here!</h2>
        <p>We’ll notify you once we have new notifications.</p>
    </div>
  </>
}

export default Empty