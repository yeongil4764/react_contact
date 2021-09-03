import React, { Suspense } from "react";
import styled from "styled-components";
import ContactRegisterView from "../components/ContactRegister";
import Loading from "./Loading";

const MainContainer = styled.div`
  width: 100%;
  height: 100vh;
  justify-content: center;
  align-items: center;
  display: flex;
  flex-direction: column;
`;

const ContactRegister = (props) => {
  return (
    <MainContainer>
      <Suspense fallback={<Loading />}>
        <ContactRegisterView />
      </Suspense>
    </MainContainer>
  );
};

export default ContactRegister;
