import React, { Suspense, useEffect, useRef, useState } from "react";
import { connect } from "react-redux";
import { useHistory } from "react-router";
import styled from "styled-components";
import ContactListView from "../components/ContactList";
import Loading from "./Loading";
import { actionCreators as contactActions } from "../redux/modules/contact";
import Cookies from "universal-cookie";
import { deleteRt } from "../api";
import moment from "moment";

const cookies = new Cookies();
const expireAt = cookies.get("expireAt") * 1000;

const MainContainer = styled.div`
  width: 100%;
  height: 100vh;
  justify-content: center;
  align-items: center;
  display: flex;
  flex-direction: column;
`;
const getCurrentUser = () => {
  return cookies.get("accessToken");
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
  const [min, setMin] = useState(0);
  const [sec, setSec] = useState(0);

  useInterval(() => {
    setMin(parseInt(moment(expireAt).diff(moment()) / 1000 / 60));
    setSec(parseInt((moment(expireAt).diff(moment()) / 1000) % 60));
    if (moment(expireAt).diff(moment()) < -500) {
      window.location.reload();
    }
  }, 1100);

  const history = useHistory();

  return (
    <MainContainer>
      <button
        onClick={async () => {
          const id = cookies.get("rtid");
          await deleteRt(id);

          cookies.remove("accessToken");
          cookies.remove("expireAt");
          cookies.remove("rtid");
          cookies.remove("name");

          if (getCurrentUser() === undefined) {
            history.push("/");
            props.setContactSelected();
          }
        }}
        style={{ marginBottom: 30 }}
      >
        로그아웃
      </button>
      <div>
        <h2>{expireAt && min + sec !== 0 ? `${min}분${sec}초` : null}</h2>
      </div>
      <hr />
      <Suspense fallback={<Loading />}>
        <ContactListView />
      </Suspense>
    </MainContainer>
  );
};

const useInterval = (callback, delay) => {
  const savedCallback = useRef();

  useEffect(() => {
    savedCallback.current = callback;
  }, [callback]);

  useEffect(() => {
    const tick = () => {
      savedCallback.current();
    };
    if (delay !== null) {
      let id = setInterval(tick, delay);
      return () => clearInterval(id);
    }
  }, [delay]);
};

export default connect(null, mapDispatchToProps)(ContactList);
