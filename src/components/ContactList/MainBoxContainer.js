import React, { Component } from "react";
import { DeleteContact } from "../../api";
import MainBoxPresenter from "./MainBoxPresenter";
import { withRouter } from "react-router-dom";

class MainBoxContainer extends Component {

  handleDelete = (deleteNum) => {
    const { setContactSelected , selectedcontact, setContactList, contactList } = this.props;

    setContactSelected(null);
    if (selectedcontact) {
      DeleteContact(deleteNum);
      setContactList(
        contactList.filter((contact) => contact.id !== selectedcontact.id)
      );
      setContactSelected({});
    }
  };

  goNextPage = (e) => {
    const { selectedcontact } = this.props;
    const btnText = e.target.innerText;
    if (btnText === "추가") {
      this.props.history.push("/add");
    } else if (btnText === "수정") {
      this.props.history.push(`/edit/${selectedcontact.id}`);
    }
  }

  render() {
    const { selectedcontact } = this.props;

    return (
      <MainBoxPresenter contact={selectedcontact} handleDelete={this.handleDelete} goNextPage={this.goNextPage}/>
    );
  }
}

export default withRouter(MainBoxContainer);
