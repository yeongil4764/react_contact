import { connect } from "react-redux";
import MainBoxContainer from "./MainBoxContainer";
import { actionCreators as contactActions } from "../../redux/modules/contact";

const mapStateToProps = (state) => {
  const {
    contact: { selectedcontact, contactList },
  } = state;

  return {
    selectedcontact,
    contactList,
  };
};

const mapDispatchToProps = (dispatch) => {

  const setContactSelected = (contact) => {
    dispatch(contactActions.setContactSelected(contact));
  };

  const setContactList = (contactlist) => {
    dispatch(contactActions.setContactList(contactlist));
  };
  
  return {
    setContactSelected,
    setContactList,
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(MainBoxContainer);
