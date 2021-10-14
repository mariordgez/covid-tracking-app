const URL = 'https://api.covid19tracking.narrativa.com/api/';

// Actions
const LOAD = 'spaceships/rockets/LOAD';
const RESERVE_ROCKET = 'spaceships/rockets/RESERVE_ROCKET';
const CANCEL_ROCKET_RESERVATION = 'spaceships/rockets/CANCEL_ROCKET_RESERVATION';

// Reducer
export default (state = [], action) => {
  switch (action.type) {
    case LOAD:
      return action.state;
    /* case RESERVE_ROCKET: {
      const newState = state.map((rocket) => {
        if (rocket.id !== action.id) return rocket;
        return { ...rocket, reserved: true };
      });
      return newState;
    }
    case CANCEL_ROCKET_RESERVATION: {
      const newState = state.map((rocket) => {
        if (rocket.id !== action.id) return rocket;
        return { ...rocket, reserved: false };
      });
      return newState;
    } */
    default:
      return state;
  }
};

// Action Creators
export const loadCountries = () => async (dispatch) => {
  const date = new Date();
  date.setDate(date.getDate() - 1);
  const today = date.toISOString().split('T')[0];
  const newURL = URL + today;
  const res = await fetch(newURL);
  const resJSON = await res.json();
  const data = await resJSON.dates;
  const countries = await data[today].countries;
  const result = [];
  const keys = Object.keys(countries);
  const values = Object.values(countries);
  for (let i = 0; i < keys.length; i += 1) {
    result.push(keys[i], values[i]);
  }

  const state = result
    .filter((country) => country.id !== undefined)
    .map((country) => ({
      id: country.id,
      name: country.name,
      today_confirmed: country.today_confirmed,
      today_deaths: country.today_deaths,
      regions: country.regions,
    }));

  dispatch({ type: LOAD, state });
};

export const reserveRocket = (id) => ({
  type: RESERVE_ROCKET,
  id,
});

export const cancelRocketReservation = (id) => ({
  type: CANCEL_ROCKET_RESERVATION,
  id,
});
