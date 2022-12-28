import "bootstrap/dist/css/bootstrap.min.css";
import AuthUser from './components/AuthUser';
import Guest from './navbar/guest';
import Auth from './navbar/auth';
import AuthVendor from "./navbar/AuthVendor";
import jwtDecode from 'jwt-decode';
import { useEffect } from "react";

function App() {
  const { logout } = AuthUser();
  const userString = sessionStorage.getItem('user');
  const user_detail = JSON.parse(userString);
  const token = sessionStorage.getItem("token");

  const checkTokenExpiration = () => {

    if (jwtDecode(token).exp < Date.now() / 1000) {
       console.log('token expirado')
       logout();
     }else{
       console.log('token activo')
     }
  };
  
  useEffect(() => {
    if (token != null) {
      checkTokenExpiration();
    }
  }, []);

  const {getToken} = AuthUser();
  if(!getToken()){
    return <Guest />
  }

  if (user_detail.type == 'vendor'){
    return <AuthVendor />
   }

  return (
      <Auth />
  );
}

export default App;
