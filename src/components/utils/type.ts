// New permissions
export enum DefaultUserPermission {
  temp = "1234",
}

export type UserInfo = {
  permissions?: DefaultUserPermission[];
  id?: string;
  first_name?: string;
  last_name?: string;
  full_name?: string;
  avatar_url?: string;
  phone_number?: string;
  address?: string | null;
  email?: string;
  is_active?: boolean;
  is_staff?: boolean;
  is_superuser?: boolean;
  is_allow_receive_pns?: boolean;
  is_blocked?: boolean;
  last_login?: string;
  date_joined?: string;
  gender?: "MALE" | "FEMALE" | "OTHER";
  date_of_birth?: string;
  role?: "Admin" | "User";
  result?: {
    access?: string;
    refresh?: string;
  };
  //   picture?: string;
  //   url?: string;
  //   picture_url?: string;
  //   status?: number;
  //   first_time_login?: boolean;
  recordVersion?: number; // It means: The latest Timestamp when UserInfo saved in cookie. It will be synced to every tabs on this browser.
  //   address?: string;
  //   gender?: number;
  //   birthday?: string;
};

export type ApiResponse<T> = {
  success: boolean;
  code: number;
  message: ResponseMessage | Response400Message;
  data: T;
};

export type ApiErrorResponse = {
  status: number;
  data: ApiResponse<unknown>;
};

export type ResponseMessage = {
  [code: string]: string;
};

export type Response400Message = {
  [field: string]: ResponseMessage;
};

export interface CustomerInfo {
  fullName: string;
  gender: "MALE" | "FEMALE";
  phone: string;
  email: string;
  facebook?: string;
  whatsapp?: string;
  note?: string;
  customerId: string;
  user: string;
  dateOfBirth: string;
  isAlreadyDeclaration?: string;
}

export interface BookingInfo {
  startDay: string;
  endDay: string;
  roomType: string;
  roomNumber: string;
  basePrice: string;
  deposit: number;
  notes?: string;
  numberOfAdults: number;
  numberOfChildren: number;
  customerSource: string;
  salesChannel: string;
  channelDetail: string;
  bookingStatus: string;
  timerTime: number;
  hideBookingTime: number;
}

export interface PaymentFormInfo {
  deposit?: number;
  paid?: number;
  pendingConfirmation?: number;
  remaining?: number;
  tax?: number;
  surcharge?: number;
  deposit_amount?: number;
  totalPayment?: number;
  refund?: number;
}

export interface PaymentInfo {
  surcharge?: number;
  tax?: number;
  discount?: number;
}

export interface PaymentInfo {
  rentalFee: number;
  serviceFee: number;
  wifi: number;
  water: number;
  electricity: number;
  total: number;
}

export interface PriceDetailType {
  content: string;
  category?: string;
  count: number;
  price: number;
  totalPrice: number;
  isEdit?: boolean;
}

export interface SurchargeFee {
  content: string;
  category?: string;
  count: number;
  price: number;
  totalPrice: number;
  isEdit?: boolean;
}

export type BookingSlotType = {
  customer: {
    full_name: string;
  };
  type: {
    name: string;
  };
  from_date: string; // ISO 8601 Date string
  to_date: string; // ISO 8601 Date string
  // status: "DRAFT" | "CONFIRMED" | "CANCELLED"; // Enum-like status
  status: string;
  number_of_adults: number;
  number_of_children: number;
  total_payment: number;
  roomNumber: string;
  roomId: string;
  id: string;
  auto_hide_booking_datetime: string;
  auto_timer_datetime: string;
  booking_status: string;
};
