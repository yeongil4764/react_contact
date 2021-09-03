import { connect } from "react-redux";
import SearchBoxContainer from "./SearchBoxContainer";
import { actionCreators as contactActions } from "../../../../redux/modules/contact";

// mapStateToProps 는 리덕스 스토어의 상태를 조회해서 어떤 것들을 props 로 넣어줄지 정의합니다.
// 현재 리덕스 상태를 파라미터로 받아옵니다.
const mapStateToProps = (state) => {
  const {
    contact: { searchKeyword },
  } = state;
  return {
    searchKeyword,
  };
};

// mapDispatchToProps 는 액션을 디스패치하는 함수를 만들어서 props로 넣어줍니다.
// dispatch 를 파라미터로 받아옵니다.
const mapDispatchToProps = (dispatch) => {
  const setSearchKeyword = (searchKeyword) =>
    dispatch(contactActions.setSearchKeyword(searchKeyword));
  return {
    setSearchKeyword,
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SearchBoxContainer);
