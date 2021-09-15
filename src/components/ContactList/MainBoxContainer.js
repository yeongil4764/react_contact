import React, { Component } from "react";
import { DeleteContact } from "../../api";
import MainBoxPresenter from "./MainBoxPresenter";
import { withRouter } from "react-router-dom";

class MainBoxContainer extends Component {

  handleDelete = async (deleteNum) => {
    const { setContactSelected , selectedcontact, setContactList, contactList } = this.props;

    setContactSelected(null);

    if (selectedcontact) {
      const res = await DeleteContact(deleteNum);
      if(res === 403) {
        alert("삭제할 권한이 없습니다.");
        return false;
      }else {
        setContactList(
          contactList.data.filter((contact) => contact.id !== selectedcontact.id)
        );
        setContactSelected({});
      }
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
