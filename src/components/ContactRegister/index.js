import { connect } from "react-redux";
import ContactRegisterContainer from "./ContactRegisterContainer";
import { actionCreators as contactActions } from "../../redux/modules/contact";

const mapStateToProps = (state) => {
  const {
    contact: { selectedcontact },
  } = state;

  return {
    selectedcontact,
  };
};

const mapDispatchToProps = (dispatch) => {
  const setObserver = (value) => {
    dispatch(contactActions.setObserver(value));
  };

  const setContactSelected = (contact) => {
    dispatch(contactActions.setContactSelected(contact));
  };

  return {
    setObserver,
    setContactSelected,
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ContactRegisterContainer);
