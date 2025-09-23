export type Notification = {
  id: string;
  title: string;
  message: string;
  icon: string;
  type: string;
  is_read: boolean;
  created_at: string;
};

export type NotificationsPagination = {
  current_page: number;
  data: Notification[];
  total: number;
};

export type NotificationsResponse = {
  success: boolean;
  message: string;
  data: NotificationsPagination;
};
