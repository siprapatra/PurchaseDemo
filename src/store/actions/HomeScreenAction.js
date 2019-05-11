import { TEST } from "../../common/ActionTypes";

export const applyDiscountAction = (discountCode,mainValue) => {
  switch (discountCode) {
    case "DISCOUNT":
    return dispatch =>
      dispatch({
        type: TEST,
          newPrice: mainValue - mainValue*0.10
      });
      break;
    default:
    return dispatch =>
      dispatch({
        type: TEST,
        newPrice: mainValue
      });
  }

};
