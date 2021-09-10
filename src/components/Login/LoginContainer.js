import { PureComponent } from "react";
import { withRouter } from "react-router";
import { Login } from "../../api";
import LoginPresenter from "./LoginPresenter";

class LoginContainer extends PureComponent {
  state = {};

  handleChange = (e) => {
    const { name, value } = e.target;

    this.setState({
      ...this.state,
      [name]: value,
    });
  };

  handleSubmit = async (e) => {
    e.preventDefault();
    const res = await Login(this.state);

    if (res === undefined) {
      setTimeout(() => {
        this.props.history.push("/list");
      }, 5000);
    } else {
      alert("존재하지 않는 계정입니다.");
      return false;
    }
  };

  render() {
    return (
      <LoginPresenter
        handleChange={this.handleChange}
        handleSubmit={this.handleSubmit}
      />
    );
  }
}

export default withRouter(LoginContainer);
