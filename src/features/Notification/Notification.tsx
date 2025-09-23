import { useQuery } from "@tanstack/react-query";
import { getNotifications } from "../../api/Notifications/Notifications";
import Empty from "./Empty";
import { useNavigate } from "react-router-dom";
import Loading from "@/Layout/Common/Loading";
import Header from "@/lib/Header/Header";
import type { NotificationsResponse, Notification } from "../../types/Notifications/Notifications";

const Notification = () => {
  const navigator = useNavigate();

  const { data, isLoading, error } = useQuery({
    queryKey: ["notifications"],
    queryFn: () => getNotifications(),
  });

  if (isLoading) {
    return <Loading />;
  }
  if (error) {
    return <h1>Error...</h1>;
  }

  return (
    <>
      <Header title="Notifications" showBack onBack={() => navigator("/")} />

      <div className="max-w-5xl mx-auto px-4">
        <h2 className="mt-10 text-Background-Primary-Defult">Today</h2>
        <main className="mt-2">
          <div className="flex flex-col gap-2">
            {data?.data?.data.length === 0 ? (
              <Empty />
            ) : (
              // eslint-disable-next-line @typescript-eslint/no-explicit-any
              data?.data?.data.map((notification: Notification) => {
                return (
                  <div key={notification.id}>
                    <p className="bg-Background-Neutral-Darker rounded-full">
                      {notification.icon}
                    </p>
                    <div className="flex flex-col gap-2">
                      <p>{notification.title}</p>
                      <p>{notification.message}</p>
                    </div>
                    <p>{notification.created_at}</p>
                  </div>
                );
              })
            )}
          </div>
        </main>
      </div>
    </>
  );
};

export default Notification;
