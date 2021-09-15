import React, { Suspense } from "react";
import { connect } from "react-redux";
import { useHistory } from "react-router";
import styled from "styled-components";
import ContactListView from "../components/ContactList";
import Loading from "./Loading";
import { actionCreators as contactActions } from "../redux/modules/contact";
import cookie from "react-cookies";

const MainContainer = styled.div`
  width: 100%;
  height: 100vh;
  justify-content: center;
  align-items: center;
  display: flex;
  flex-direction: column;
`;

const getCurrentUser = () => {
  return cookie.load("accessToken");
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
          cookie.remove("accessToken");
          if (getCurrentUser() === undefined) {
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
