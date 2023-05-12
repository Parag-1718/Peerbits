export interface Post{
  title: string;
  content: string;
  key?: string;
  isDeleted:boolean
}

export interface CreateUserRequest {
  email: string;
  password: string;
  returnSecureToken: boolean;
}

