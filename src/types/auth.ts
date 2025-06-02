export interface ILoginPayload {
  email: string;
  password: string;
}

export interface IUpdatePassword {
  email: string;
  currentPassword: string;
  newPassword: string;
}

export interface GetUserActivitiesPayload {
  userId: string;
  startDate: string; // ISO date string
  endDate: string; // ISO date string
  action?: string;
  page?: number;
  limit?: number;
}
