import { PureComponent } from "react";
import { withRouter } from "react-router-dom";
import { CreateContact, getOne, UpdateContact } from "../../api";
import ContactRegisterPresenter from "./ContactRegisterPresenter";

class ContactRegisterContainer extends PureComponent {
  state = {};

  setDefaultInput = async () => {
    const { setContactSelected } = this.props;
    const params = this.props.match.params.id;

    if (params) {
      //수정 페이지
      const contact = await getOne(params);
      setContactSelected(contact);
    } else {
      setContactSelected(null);
    }
  };

  componentDidMount() {
    this.setDefaultInput();
  }

  handleChange = (e) => {
    const { name, value } = e.target;

    this.setState({
      ...this.state,
      [name]: name === "age" ? Number(value) : value,
    });
  };

  handleSubmit = async (e) => {
    e.preventDefault();
    const params = this.props.match.params.id;
    const {
      setObserver,
      selectedcontact,
      setContactSelected,
      setErrorCode,
      errCode,
    } = this.props;

    if (selectedcontact) {
      if (JSON.stringify(this.state) === "{}") {
        const constate = window.confirm(
          "수정사항이 없습니다. 본 화면으로 돌아가시겠습니까 ?"
        );

        if (!constate) {
          this.props.history.push(`/edit/${params}`);
        } else {
          this.props.history.push("/");
        }
      } else {
        const error = await UpdateContact(params, this.state);
        if (error !== undefined) {
          setErrorCode(error);
        }

        if (errCode === 500) {
          alert("중복되는 이메일입니다.");
          return false;
        }

        setObserver(true);
        setContactSelected({});
        this.props.history.push("/list");
      }

      return false;
    }

    if (selectedcontact === null) {
      CreateContact(this.state);
      setObserver(true);
      setContactSelected({});
      this.props.history.push("/list");
    }

    this.setState({
      name: "",
      age: 0,
      email: "",
      phoneNumber: "",
      description: "",
    });
  };

  goToMain = (e) => {
    e.preventDefault();
    this.props.history.push("/list");
  };

  render() {
    const params = this.props.match.params.id;

    return (
      <ContactRegisterPresenter
        // contact={this.state}
        {...this.props}
        params={params}
        handleChange={this.handleChange}
        handleSubmit={this.handleSubmit}
        goToMain={this.goToMain}
      />
    );
  }
}

export default withRouter(ContactRegisterContainer);
