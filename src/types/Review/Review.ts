export interface ReviewResponse {
    current_page: number;
    data: ReviewData[];
}

export interface ReviewData {
    user: any;
    review: ReactNode;
    id: number;
    doctor_id: number;
    patient_id: number;
    rating: number;
    comment: string;
    created_at: string;
    updated_at: string;
}
