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

export interface IUser {
  _id: string;
  fullname: string;
  email: string;
  roleName: string;
  userStatus: boolean;
  createdAt: string; // ISO 8601 date string
  updatedAt: string; // ISO 8601 date string
  __v: number;
}

export interface IRole {
  _id: string;
  roleName: string;
  createdAt: string; // ISO date string (e.g., "2025-03-05T09:16:48.892Z")
  updatedAt: string;
  __v: number;
}
