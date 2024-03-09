import { loginUser } from "../app/actions/userAuthSlice";
import Index from "./index/Index";
import Login from "./login/Login";
import { useDispatch, useSelector } from "react-redux";


function App() {

  const dispatch = useDispatch();
  const isAuthenticated = useSelector(state => state.user.isAuthenticated);
  const error = useSelector(state => state.user.error);
  const loading = useSelector((state) => state.user.loading);

  const authentication = async (data) => {
    const email = data.target.elements.email.value;
    const password = data.target.elements.password.value;
    dispatch(loginUser({ email, password }));
  };
 
  return (
    <>
       {loading ? (<div>Loading...</div>) : 
                    isAuthenticated ? (
        <Index />
      ) : (
        <Login checkAuthentication={authentication} error={error} />
      )}
    </>
  );
}

export default App;
