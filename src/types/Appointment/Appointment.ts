// types/appointment.ts
export type AvailableSlot = {
    date: string; // e.g. "2025-09-17"
    time: string; // e.g. "10:00"
  };
  
export type DoctorSlotsResponse = {
    doctor_id: string;
    available_slots: AvailableSlot[];
  };
  

