import { Provider } from 'react-redux';
import { render } from '@testing-library/react';
import store from '../redux/configureStore';
import Countries from '../components/Countries';

describe('Rockets component', () => {
  describe('Use Jest snapshots to test the Countries component', () => {
    it('renders Countries component as expected', async () => {
      const CountriesComponent = render(
        <Provider store={store}>
          <Countries />
        </Provider>,
      );

      expect(CountriesComponent.asFragment()).toMatchSnapshot();
    });
  });
});
