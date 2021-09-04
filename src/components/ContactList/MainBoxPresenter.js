import styled from "styled-components";
import LeftBox from "./Left/LeftBox";
import RightBox from "./Right/RightBox";

const Box = styled.div`
  display: flex;
  border: 1px solid #9b9b9b;
  width: 600px;
  height: 450px;
  position: relative;
`;

const CircleButton = styled.button`
  position: absolute;
  margin: 0 5px;
  border: none;
  color: white;
  text-align: center;
  border-radius: 50%;
  width: 50px;
  height: 50px;
  right: 5px;
`;

const AddButton = styled(CircleButton)`
  bottom: ${(props) =>
    JSON.stringify(props.contactyn) === "{}" ? "10px" : "120px"};
  background-color: blue;
  transition: 0.7s;
`;

const EditButton = styled(CircleButton)`
  bottom: 65px;
  background-color: lightsalmon;
  display: ${(props) =>
    JSON.stringify(props.contactyn) === "{}" ? "none" : "block"};
`;

const DelButton = styled(CircleButton)`
  bottom: 10px;
  background-color: orange;
  display: ${(props) =>
    JSON.stringify(props.contactyn) === "{}" ? "none" : "block"};
`;

const MainBoxPresenter = (props) => {
  const { contact, handleDelete, goNextPage } = props;
  return (
    <Box>
      <LeftBox />
      <RightBox />

      <AddButton contactyn={contact} onClick={(e) => goNextPage(e)}>
        추가
      </AddButton>

      <EditButton contactyn={contact} onClick={(e) => goNextPage(e)}>
        수정
      </EditButton>

      <DelButton contactyn={contact} onClick={() => handleDelete(contact.id)}>
        삭제
      </DelButton>
      
    </Box>
  );
};
export default MainBoxPresenter;
