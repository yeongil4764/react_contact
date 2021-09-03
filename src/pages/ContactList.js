import React, { Suspense } from "react";
import styled from "styled-components";
import ContactListView from "../components/ContactList";
import Loading from "./Loading";

const MainContainer = styled.div`
  width: 100%;
  height: 100vh;
  justify-content: center;
  align-items: center;
  display: flex;
  flex-direction: column;
`;

const ContactList = (props) => {
  return (
    <MainContainer>
      <Suspense fallback={<Loading />}>
        <ContactListView/>
      </Suspense>
    </MainContainer>
  );
};

export default ContactList;
