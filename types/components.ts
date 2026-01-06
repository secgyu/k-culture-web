export interface FormData {
  name: string;
  phone: string;
  introduction: string;
  height: string;
  weight: string;
  gender: string;
  birthYear: string;
}

export interface Notice {
  id: string;
  title: string;
  content: string;
  createdAt: string;
  author: string;
  isPinned?: boolean;
}

export interface UpdateProfileData {
  data: FormData;
}
