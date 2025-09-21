export type BookingResponse = {
  message: string;
  appointment: {
    id: number;
    user_id: number;
    doctor_id: number;
    date: string;
    time: string;
    status: string;
    created_at: string;
    updated_at: string;
  };
};
