export interface User {
    login?: string;
    id?: string;
    avatar_url?: string;
    url?: string;
    email?: string;
    followers?: User[];
}
