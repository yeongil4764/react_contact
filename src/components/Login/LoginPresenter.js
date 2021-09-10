import styled from "styled-components";

const Box = styled.form`
  display: flex;
  border: 1px solid #9b9b9b;
  width: 300px;
  height: 210px;
  padding: 20px;
  flex-direction: column;
`;

const LoginInput = styled.input`
  /* height: 5px; */
  flex: 1;
  padding: 10px;
  margin-top: 5px;
  margin-bottom: 20px;
  font-size: medium;
`;

const InsertBtn = styled.input`
  background-color: blue;
  width: 60px;
  color: white;
  border: 0;
  height: 50px;
  align-self: center;
`;

const LoginPresenter = (props) => {
    const {handleChange, handleSubmit} = props;
    return (
      <div>
        <Box onSubmit={handleSubmit}>
            <div>아이디</div>
            <LoginInput type="text" name="name" onChange={handleChange} defaultValue=""/>
            <div>패스워드</div>
            <LoginInput type="password" name="password" onChange={handleChange} defaultValue=""/>
            <InsertBtn type="submit" value="로그인" />
        </Box>
        <div style={{marginTop:30, width:300}}>
          관리자 계정 : ADMIN/ADMIN<p/>
          유저 계정 : USER/USER
        </div>
        </div>
    )
}

export default LoginPresenter;