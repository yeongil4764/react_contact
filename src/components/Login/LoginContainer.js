import { PureComponent } from "react";
import { withRouter } from "react-router";
// import { Login } from "../../api";
import LoginPresenter from "./LoginPresenter";

class LoginContainer extends PureComponent {
  state = { btnPress: false };

  handleChange = (e) => {
    const { name, value } = e.target;

    this.setState({
      ...this.state,
      [name]: value,
    });
  };

  handleSubmit = async (e) => {
    e.preventDefault();

    const { Login } = this.props;
    await Login(this.state);
    this.setState({
      btnPress: true,
    });
  };

  componentDidUpdate() {
    const {
      user: { Success, Error },
    } = this.props;

    if (Success && this.state.btnPress) this.props.history.push("/list");

    if (Error && this.state.btnPress) {
      alert("로그인 실패(아이디와 패스워드를 확인해주세요)");
      this.setState({
        btnPress: false,
      });
      return;
    }
  }

  render() {
    const { user } = this.props;
    return (
      <LoginPresenter
        user={user}
        handleChange={this.handleChange}
        handleSubmit={this.handleSubmit}
      />
    );
  }
}

export default withRouter(LoginContainer);
