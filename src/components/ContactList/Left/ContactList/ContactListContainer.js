import React, { PureComponent } from "react";
import ContactListPresenter from "./ContactListPresenter";

class ContactListContainer extends PureComponent {
  handleChangeFocusContact = (contact) => {
    const { setContactSelected } = this.props;
    setContactSelected(contact);
  };

  componentDidMount() {
    const { setContactList } = this.props;
    setContactList();
  }

  componentDidUpdate(prevProps, prevState) {
    const { setObserver, observer, setContactList } = this.props;

    if (observer === true) {
      setObserver(false);
      setContactList();
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
