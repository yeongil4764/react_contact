import React, { PureComponent } from "react";
import SearchBoxPresenter from "./SearchBoxPresenter";

class SearchBoxContainer extends PureComponent {
  handleChangeSearchKeyword = (e) => {
    const { setSearchKeyword } = this.props;
    const value = e.target.value;

    setSearchKeyword(value);
  };
  render() {
    return (
      <SearchBoxPresenter
        //index.js의 keyword 를 넘겨줌
        {...this.props}
        handleChangeSearchKeyword={this.handleChangeSearchKeyword}
      />
    );
  }
}

export default SearchBoxContainer;
