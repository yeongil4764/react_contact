// import { Link } from "react-router-dom";
import styled from "styled-components";

const Box = styled.form`
  display: flex;
  border: 1px solid #9b9b9b;
  width: 600px;
  height: 450px;
  padding: 20px;
  flex-direction: column;
`;

const ContactInput = styled.input`
  height: 5px;
  flex: 1;
  padding: 10px;
  margin-top: 5px;
  margin-bottom: 20px;
  font-size: large;
`;

const InsertBtn = styled.input`
  background-color: blue;
  float: right;
  width: 60px;
  color: white;
  border: 0;
  height: 40px;
`;

const ListBtn = styled.button`
  background-color: orange;
  float: left;
  width: 60px;
  color: white;
  border: 0;
  height: 40px;
`;

const ContactRegisterPresenter = (props) => {
  const { handleChange, selectedcontact, handleSubmit, params, goToMain } = props;

  return (
    <Box onSubmit={handleSubmit}>
      <div>이름</div>
      <ContactInput
        type="text"
        name="name"
        onChange={handleChange}
        defaultValue={params ? selectedcontact.name : ""}
        required
      />
      <div>나이</div>
      <ContactInput
        type="number"
        name="age"
        onChange={handleChange}
        defaultValue={params ? selectedcontact.age : 0}
        min={1}
      />
      <div>이메일</div>
      <ContactInput
        type="text"
        name="email"
        onChange={handleChange}
        defaultValue={params ? selectedcontact.email : ""}
        required
      />
      <div>휴대폰 번호</div>
      <ContactInput
        type="text"
        name="phoneNumber"
        onChange={handleChange}
        defaultValue={params ? selectedcontact.phoneNumber : ""}
        required
      />
      <div>설명</div>
      <ContactInput
        type="text"
        name="description"
        onChange={handleChange}
        defaultValue={params ? selectedcontact.description : ""}
        required
      />
      <div>
        <InsertBtn type="submit" value={params ? "수정" : "등록"} />
        <ListBtn onClick={goToMain}>메인으로..</ListBtn>
      </div>
    </Box>
  );
};

export default ContactRegisterPresenter;
