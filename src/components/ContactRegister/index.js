import { connect } from "react-redux";
import ContactRegisterContainer from "./ContactRegisterContainer";
import { actionCreators as contactActions } from "../../redux/modules/contact";

const mapStateToProps = (state) => {
  const {
    contact: { selectedcontact, errCode },
  } = state;

  return {
    selectedcontact,
    errCode,
  };
};

const mapDispatchToProps = (dispatch) => {
  const setObserver = (value) => {
    dispatch(contactActions.setObserver(value));
  };

  const setContactSelected = (contact) => {
    dispatch(contactActions.setContactSelected(contact));
  };

  const setErrorCode = (code) => {
    dispatch(contactActions.setErrorCode(code));
  }

  return {
    setObserver,
    setContactSelected,
    setErrorCode,
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ContactRegisterContainer);
