import React from "react";

const SearchBoxPresenter = (props) => {
  const { searchKeyword, handleChangeSearchKeyword } = props;
  return (
    <div style={{display:"flex", justifyContent:"center", borderBottom:"1px solid #d3d3d3"}}>
      <input
        type="text"
        value={searchKeyword}
        onChange={handleChangeSearchKeyword}
        style={{flex:1, padding:"10px"}}
      />
    </div>
  );
};

export default SearchBoxPresenter;
