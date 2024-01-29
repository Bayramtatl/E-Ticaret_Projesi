export interface UserRegisterDto {
    name: string;
    surname: string;
    email: string;
    password: string;
    phoneNumber: string;
    county: string;
    city: string;
    description?: string; // Opsiyonel (nullable) alan
  }