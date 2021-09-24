const initialState = {
  FOODS: [],
  CATEGORIES: [],
  ORDERS: [],
  EDIT_PROPS: {},
  DELETE_PROPS: {},
  VIEW_PROPS: null,
};

export default (state = initialState, action) => {
  console.log(action);

  switch (action.type) {
    case "FETCH_FOODS":
      return {
        ...state,
        FOODS: action.FOODS,
      };
    case "FETCH_CATEGORIES":
      return {
        ...state,
        CATEGORIES: action.CATEGORIES,
      };
      
    case "SET_EDIT_PROPS":
      return {
        ...state,
        EDIT_PROPS: action.EDIT_PROPS,
      };

    case "SET_VIEW_PROPS":
      console.log("set");
      return {
        ...state,
        VIEW_PROPS: action.VIEW_PROPS,
      };

    case "SET_DELETE_PROPS":
      return {
        ...state,
        DELETE_PROPS: action.DELETE_PROPS,
      };
    case "SET_ORDERS":
      return {
        ...state,
        ORDERS: action.ORDERS,
      };

    default:
      return {
        ...state,
      };
  }
};
