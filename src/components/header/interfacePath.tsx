import {useLocation} from "react-router-dom";

interface LocationState {
    from:{
        pathname: string;
    }
}
const AuthLayer: React.FC = () => {
    const location = useLocation();

    const { from } = location.state || { from: { pathname: "/" } };

    return <></>;
  };

  export default AuthLayer;