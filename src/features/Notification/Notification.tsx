import { useQuery } from "@tanstack/react-query";
import { getNotifications } from "../../api/Notifi/Notifications";
import Empty from "./Empty";
import { useNavigate } from "react-router-dom";
import Loading from "@/Layout/Common/Loading";
import Header from "@/lib/Header/Header";
import type {
  NotificationsResponse,
  Notification,
} from "../../types/NotificationsTypes/Notifications";

const Notification = () => {
  const navigator = useNavigate();

  const { data, isLoading, error } = useQuery<NotificationsResponse>({
    queryKey: ["notifications"],
    queryFn: () => getNotifications(),
  });

  if (isLoading) return <Loading />;
  if (error) return <h1>Error...</h1>;

  const notifications = data?.data?.data ?? [];
  console.log("notifications", notifications);

  return (
    <>
      <Header title="Notifications" showBack onBack={() => navigator("/")} />
      <h2 className="mt-10 text-Background-Primary-Defult">Today</h2>
      <main className="mt-2">
        <div className="flex flex-col gap-2">
          {notifications.length === 0 ? (
            <Empty />
          ) : (
            notifications.map((notification: Notification) => (
              <div
                key={notification.id}
                className="flex gap-3 items-start p-3 rounded-lg border border-Background-Neutral-Darker"
              >
                <p className="bg-Background-Neutral-Darker rounded-full p-2">
                  {notification.icon}
                </p>
                <div className="flex flex-col gap-1">
                  <p className="font-semibold">{notification.title}</p>
                  <p className="text-sm text-Background-Neutral-Lighter">
                    {notification.message}
                  </p>
                  <p className="text-xs text-Background-Neutral-Lighter">
                    {notification.created_at}
                  </p>
                </div>
              </div>
            ))
          )}
        </div>
      </main>
    </>
  );
};

export default Notification;
