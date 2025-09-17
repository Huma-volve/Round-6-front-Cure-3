import { FaArrowLeft } from "react-icons/fa6";
import { useQuery } from "@tanstack/react-query";
import { getNotifications } from "../../api/Notifications/Notifications";
import Empty from "./Empty";
import { useNavigate } from "react-router-dom";
import Loading from "@/Layout/Common/Loading";

const Notification = () => {
  const navigator = useNavigate()

  const {data,isLoading,error} = useQuery({
    queryKey: ["notifications"],
    queryFn: () => getNotifications(),
  })

  if(isLoading) {
    return <h1><Loading /></h1>
  }
  if(error) {
    return <h1>error...</h1>
  }

  return <>
  <header className="flex items-center justify-between cursor-pointer mt-3">
    <FaArrowLeft size={25} onClick={() => navigator("/")}/>
    <h1 className="text-2xl font-semibold">Notifications</h1>
    <p></p>
  </header>

    <h2 className="mt-10 text-Background-Primary-Defult">Today</h2>
  <main className="mt-2">
    <div className="flex flex-col gap-2">
    {data?.data?.length === 0 ? (
        <Empty />
      ) : (
        data?.data?.map((notification: any) => {
          return (
            <div key={notification.id}>
              <p className="bg-Background-Neutral-Darker rounded-full">{notification.icon}</p>
              <div className="flex flex-col gap-2">
                <p>{notification.title}</p>
                <p>{notification.message}</p>
              </div>
              <p>{notification.created_at}</p>
            </div>
          )
        })
      )}
    </div>
  </main>
  </>
}

export default Notification