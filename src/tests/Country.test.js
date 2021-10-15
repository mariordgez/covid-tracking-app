import { Provider } from 'react-redux';
import { render } from '@testing-library/react';
import store from '../redux/configureStore';
import App from '../App';

describe('Rockets component', () => {
  describe('Use Jest snapshots to test the Country component', () => {
    it('renders Country component as expected', async () => {
      const CountryComponent = render(
        <Provider store={store}>
          <App />
        </Provider>,
      );

      expect(CountryComponent.asFragment()).toMatchSnapshot();
    });
  });
});
