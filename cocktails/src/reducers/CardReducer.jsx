import { GET_DATA, GET_DETAIL, LOADIND_DATA } from "./type";
export const cardReducer = (state, action) => {
  const { type, payload } = action;

  switch (type) {
    case GET_DATA:
      const data = payload.data.drinks.map(item => {
        const {idDrink,
          strDrink,
          strDrinkThumb,
          strAlcoholic,
          strGlass,} = item;
        return {
          id: idDrink,
            name: strDrink,
            image: strDrinkThumb,
            info: strAlcoholic,
            glass: strGlass,
        }
      })
      return {...state,cocktails: data}
    case GET_DETAIL:
      return state
    case LOADIND_DATA:
      return {...state,loading: !state.loading}
    default:
      return state;
  }
};
