import React, { Suspense } from "react";
import { connect } from "react-redux";
import { useHistory } from "react-router";
import styled from "styled-components";
import ContactListView from "../components/ContactList";
import Loading from "./Loading";
import { actionCreators as contactActions } from "../redux/modules/contact";

const MainContainer = styled.div`
  width: 100%;
  height: 100vh;
  justify-content: center;
  align-items: center;
  display: flex;
  flex-direction: column;
`;

const getCurrentUser = () => {
  return JSON.parse(localStorage.getItem("Token"));
};

const mapDispatchToProps = (dispatch) => {
  const setContactSelected = (contact) => {
    dispatch(contactActions.setContactSelected(contact));
  };

  return {
    setContactSelected,
  };
};

const ContactList = (props) => {
  const history = useHistory();

  return (
    <MainContainer>
      <button
        onClick={() => {
          localStorage.removeItem("Token");
          if (getCurrentUser() === null) {
            history.push("/");
            props.setContactSelected();
          }
        }}
        style={{ marginBottom: 30 }}
      >
        로그아웃
      </button>
      <Suspense fallback={<Loading />}>
        <ContactListView />
      </Suspense>
    </MainContainer>
  );
};

export default connect(null, mapDispatchToProps)(ContactList);
