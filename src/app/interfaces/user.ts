export interface User{
    firstName:string,
    lastName:string,
    password:string,
    email:string
}

export type NewUser = Omit<User,"id">;