const SET_SEARCH_KEYWORD = "SET_SEARCH_KEYWORD";
const SET_CONTACT_LIST = "SET_CONTACT_LIST";
const SET_CONTACT_SELECTED = "SET_CONTACT_SELECTED";
const SET_OBSERVER = "SET_OBSERVER";
const SET_ERRORCODE = "SET_ERRORCODE";

const initialState = {
  searchKeyword: "",
  contactList: [],
  selectedcontact: {},
  observer : false,
  errCode : 0,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_SEARCH_KEYWORD:
      return applySetSearchKeyword(state, action);
    case SET_CONTACT_LIST:
      return applySetContactLIst(state, action);
    case SET_CONTACT_SELECTED:
      return applySetContactSelected(state, action);
    case SET_OBSERVER:
      return applySetObserver(state,action);
    case SET_ERRORCODE:
      return applySetErrorCode(state, action);

    default:
      return state;
  }
};

const setSearchKeyword = (keyword) => {
  return {
    type: SET_SEARCH_KEYWORD,
    keyword,
  };
};

const applySetSearchKeyword = (state, action) => {
  const { keyword } = action;

  return {
    ...state,
    searchKeyword: keyword,
  };
};

const setContactList = (list) => {
  return {
    type: SET_CONTACT_LIST,
    list,
  };
};

const applySetContactLIst = (state, action) => {
  const { list } = action;
  return {
    ...state,
    contactList: list,
  };
};

const setContactSelected = (contact) => {
  return {
    type: SET_CONTACT_SELECTED,
    contact,
  };
};

const applySetContactSelected = (state, action) => {
  const { contact } = action;
  return {
    ...state,
    selectedcontact: contact,
  };
};

const setObserver = (value) => {
  return {
    type : SET_OBSERVER,
    value,
  }
}

const applySetObserver = (state, action) => {
  const { value } = action;
  return {
    ...state,
    observer : value,
  }
}

const setErrorCode = (code) => {
  return {
    type : SET_ERRORCODE,
    code,
  }
}

const applySetErrorCode = (state, action) => {
  const { code } = action;
  return {
    ...state,
    errCode : code,
  }
}

export default reducer;
export const actionCreators = {
  setSearchKeyword,
  setContactList,
  setContactSelected,
  setObserver,
  setErrorCode,
};
