import React, { PureComponent } from "react";
import { getAll } from "../../../../api";
import ContactListPresenter from "./ContactListPresenter";

class ContactListContainer extends PureComponent {
  handleChangeFocusContact = (contact) => {
    const { setContactSelected } = this.props;
    setContactSelected(contact);
  };

  setDefaultList = async () => {
    const { setDefaultList } = this.props;
    const list = await getAll();
    setDefaultList(list);
  };

  componentDidMount() {
    this.setDefaultList();
  }

  componentDidUpdate() {
    const { setObserver, observer } = this.props;

    if (observer === true) {
      setObserver(false);
      this.setDefaultList();
    }
  }

  render() {
    const { contactList, selectedcontact } = this.props;

    return (
      <ContactListPresenter
        {...this.props}
        contactList={contactList}
        selectedcontact={selectedcontact}
        handleChangeFocusContact={this.handleChangeFocusContact}
      />
    );
  }
}

export default ContactListContainer;
