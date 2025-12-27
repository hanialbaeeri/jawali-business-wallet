export type TransferStatus = "pending" | "completed" | "failed" | "cancelled";
export type TransferType = "individual" | "bulk";

export interface Transfer {
  id: string;
  type: TransferType;
  recipientName: string;
  recipientAccount: string;
  amount: number;
  currency: string;
  date: string;
  status: TransferStatus;
  notes?: string;
}

export interface Settings {
  language: "ar" | "en";
  currency: string;
  notifications: boolean;
  darkMode: boolean;
  dailyLimit: number;
}

export const defaultSettings: Settings = {
  language: "ar",
  currency: "SAR",
  notifications: true,
  darkMode: false,
  dailyLimit: 100000,
};
