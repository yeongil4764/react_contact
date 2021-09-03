import { connect } from "react-redux";
import ContactListContainer from "./ContactListContainer";
import { actionCreators as contactActions } from "../../../../redux/modules/contact";

const mapStateToProps = (state) => {
  const {
    contact: { contactList, searchKeyword, selectedcontact, observer},
  } = state;

  return {
    contactList,
    searchKeyword,
    selectedcontact,
    observer,
  };
};

const mapDispatchToProps = (dispatch) => {
  const setDefaultList = (list) => {
    dispatch(contactActions.setContactList(list));
  };
  const setContactSelected = (contact) => {
    dispatch(contactActions.setContactSelected(contact));
  };
  const setObserver = (value) => {
    dispatch(contactActions.setObserver(value));
  };

  return {
    setDefaultList,
    setContactSelected,
    setObserver,
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ContactListContainer);