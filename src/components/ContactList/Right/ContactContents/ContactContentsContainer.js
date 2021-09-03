import React, { PureComponent } from "react";
import ContactContentsPresenter from "./ContactContentsPresenter";
import Empty from "../Empty";

class ContactContentsContainer extends PureComponent {
  render() {
    const { selectedcontact } = this.props;
    return (
      <>
        {JSON.stringify(selectedcontact) !== '{}' ? (
          <ContactContentsPresenter contact={selectedcontact} />
        ) : (
          <Empty />
        )}
      </>
    );
  }
}

export default ContactContentsContainer;
