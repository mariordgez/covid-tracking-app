import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { bindActionCreators } from 'redux';
import { loadCountries } from '../redux/rockets/rockets';

const Rockets = () => {
  const dispatch = useDispatch();
  const loadCountriesAction = bindActionCreators(loadCountries, dispatch);
  const countries = useSelector((state) => state.countries);

  useEffect(() => {
    if (countries.length === 0) loadCountriesAction();
    return () => null;
  }, []);

  return <div />;
};

export default Rockets;
