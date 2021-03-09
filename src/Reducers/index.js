import { combineReducers } from "redux";
import userReducer from "./user.reducer";
import signupReducer from "./signup.reducer";
import currentReducer from "./current.reducer";
import servicesReducer from "./services.reducer";
import carReducer from "./car.reducer";

const rootReducer = combineReducers({
  user: userReducer,
  signup: signupReducer,
  current: currentReducer,
  services: servicesReducer,
  car: carReducer,
});

export default rootReducer;
