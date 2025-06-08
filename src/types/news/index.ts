type MonthlyViews = {
  [year: number]: {
    [month: number]: number; // You can adjust this if you use month names or string keys
  };
};

export type NewsCategory = {
  _id: string;
  category: string; // e.g., "Sports"
  createdAt: string; // ISO date string
  updatedAt: string; // ISO date string
  createdBy: string; // e.g., "Mubarak Muhammed"
  newsTitle: string;
  newsBody: string;
  newsImage: string;
  subHeadline?: string; // Optional subheadline
  publish: boolean;
  views: number;
  viewDates: string[]; // Array of ISO date strings
  monthlyViews: MonthlyViews;
  __v: number; // version key from MongoDB
};

export type CellValue = {
  cell: {
    row: {
      original: NewsCategory;
    };
  };
};

export interface IfilterNewsPayload {
  newsTitle: string;
  category: string;
  createdBy: string;
  dateFrom: string;
  dateTo: string;
  pageNo: number;
  pageSize: number;
}
