import api from "../API_WORK/api";

export const fetchFoods = () => {
  return async (dispatch) => {
    const { data } = await api.get("/food");
    dispatch({
      type: "FETCH_FOODS",
      FOODS: data,
    });
  };
};
export const fetchCategories = () => {
    return async (dispatch) => {
      const { data } = await api.get("/category");
      dispatch({
        type: "FETCH_CATEGORIES",
        CATEGORIES: data,
      });
    };
  };

  