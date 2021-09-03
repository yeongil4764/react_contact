import { configureStore } from "@reduxjs/toolkit";
import counter from "./modules/counter";
import contact from "./modules/contact";


const store = configureStore({
  reducer: {
    counter,
    contact,
  },
});

export default store;
