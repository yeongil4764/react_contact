import { connect } from "react-redux";
import LoginContainer from "./LoginContainer";
import { loginrequest } from "../../redux/modules/user";

const mapStateToProps = (state) => {
  const {
    user,
  } = state;
  return { user };
};

const mapDispatchToProps = (dispatch) => {
  const Login = (user) => {
    dispatch(loginrequest(user));
  };
  return {
    Login,
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(LoginContainer);
