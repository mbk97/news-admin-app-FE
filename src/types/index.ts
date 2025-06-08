export interface ISidebarTypes {
  id: number;
  title: string;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  Icon: any;
  link: string;
  roles?: string[]; // Optional property for role-based access
}

export interface IRoles {
  _id: string;
  roleName: string;
  createdAt: string;
  updatedAt: string;
  __v: 0;
}

export interface IUser {
  _id: string;
  fullname: string;
  email: string;
  roleName: string;
  userStatus: boolean;
  createdAt: string; // ISO date string
  updatedAt: string; // ISO date string
  __v: number;
}
export interface ICategory {
  _id: string;
  categoryName: string;
  createdAt: string;
  updatedAt: string;
  __v: number;
}

export type CellValueForUsers = {
  cell: {
    row: {
      original: IUser;
    };
  };
};
