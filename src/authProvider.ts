import { AuthProvider } from "react-admin";

const authProvider: AuthProvider = {
     // Runs when user attemps to login 
     login: ({username, password}) => {
        if(username === 'admin' && password === 'password') {
            localStorage.setItem('username', username);
            return Promise.resolve();
        } else {
            return Promise.reject();
        }
     },
     // rusn when log out
     logout: ()=> {
        //remove username
        localStorage.removeItem('username');
        return Promise.resolve();
     },
     // runs when API returns error
     checkError: ({status}: {status: number})=> {
        if(status ===401 || status === 403) {
            localStorage.removeItem('username');
            return Promise.reject();
        }return Promise.resolve();
     },
     // runs when the user navigates to a new location to check fo auth
     checkAuth:()=> {
        return localStorage.getItem('username')? Promise.resolve() : Promise.reject();
     },
     // runs when user navigates to a  new location to check for permissions or rules
     getPermissions: () => Promise.resolve(),
}
export default authProvider;