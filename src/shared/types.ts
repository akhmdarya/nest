export interface LoginRequest {
    username: string;
    password: string;
}
export interface LoginResponce {
    token: string;
  
}
export interface RegisterRequest {
    username: string;
    password: string;
   
    token: string;
    firstName: string;
    lastName: string;
    avatar: string;
    
}
export interface RegisterResponce {
    token: string;
  
}