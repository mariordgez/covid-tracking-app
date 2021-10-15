import countryReducer, { loadCountries } from '../redux/countries/countries';

describe('Unit tests for redux/countries', () => {
  jest.mock('../redux/countries/countries');
  let expectedOutputAction;
  const dispatchMock = (input) => {
    expectedOutputAction = input;
  };

  const LOAD = 'covid-tracking-app/countries/LOAD';

  const actionLoadMock = {
    type: LOAD,
    state: [
      {
        id: 'afghan',
        name: 'Afghanistan',
        regions: [],
        today_confirmed: '100',
        today_deaths: '20',
      },
    ],
  };
  describe('reducers', () => {
    it('returns the correct state for LOAD action', () => {
      expect(countryReducer([], { type: LOAD, state: actionLoadMock })).toEqual(actionLoadMock);
    });
  });
  describe('action creators', () => {
    it("returns the correct action for 'loadCountries' thunk", async () => {
      await loadCountries()(dispatchMock);
      expect(expectedOutputAction.type).toEqual(LOAD);
      expect(expectedOutputAction.state).toEqual(expect.arrayContaining([expect.any(Object)]));
    });
  });
});
