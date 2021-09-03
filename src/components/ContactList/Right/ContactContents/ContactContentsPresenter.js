import styled from "styled-components";
import Empty from "../Empty";

const ContentsBox = styled.div`
  padding-top : 20px;
  padding-bottom : 10px;
  padding-left: 10px;
  padding-right: 60px;


  display: flex;
  flex-direction: column;
`;

const Item = styled.dl`
  display: flex;
  padding: 10px;
  flex-direction: column;
`;

const Title = styled.dt`
  font-weight: bold;
  padding: 5px;
`;

const Content = styled.dd`
  padding: 5px;
`;

const ContactContentsPresenter = (props) => {
  const { contact } = props;

  return (
    <>
      {contact ? (
        <ContentsBox>
          <Item>
            <Title>이름</Title>
            <Content>{contact.name}</Content>
          </Item>
          <Item>
            <Title>나이</Title>
            <Content>{contact.age}</Content>
          </Item>
          <Item>
            <Title>전화번호</Title>
            <Content>{contact.phoneNumber}</Content>
          </Item>
          <Item>
            <Title>Email</Title>
            <Content>{contact.email}</Content>
          </Item>
          <Item>
            <Title>설명</Title>
            <Content>{contact.description}</Content>
          </Item>
        </ContentsBox>
      ) : (
        <Empty />
      )}
    </>
  );
};
export default ContactContentsPresenter;
