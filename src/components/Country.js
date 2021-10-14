import { Row, Col } from 'react-bootstrap';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';

const Country = () => {
  const params = useParams();
  const { id } = params;
  const countries = useSelector((state) => state.countries);

  const country = countries.find((country) => country.id === id);

  const regions = country.regions.length > 0 ? (
    country.regions.map((region, index) => (
      <div
        className={`d-flex justify-content-between
        align-items-center p-2 text-white
        ${index % 2 ? 'bg-blue-dark' : 'bg-blue-light'}`}
        key={region.id}
      >
        <h5 className="m-0 fw-light">{region.name}</h5>
        <span className="d-flex align-items-center">
          <p className="m-0 me-2">
            {Number(region.today_confirmed).toLocaleString()}
            Cases
          </p>
        </span>
      </div>
    ))
  ) : (
    <div className="bg-blue-dark text-white d-flex align-items-center p-2">
      <h5 className="m-0 fw-light ps-3">These Regions Are Currently Not At Our Disposal</h5>
    </div>
  );

  return (
    <div className="pt-3 bg-blue-light">
      <Row className="m-0">
        <Col xs={6} sm={6} md={6} className="d-flex justify-content-end">
          <img src="{Africa}" alt="Africa" height="150px" />
        </Col>
        <Col
          xs={6}
          sm={6}
          md={6}
          className="p-0 text-white d-flex flex-column justify-content-center align-items-end pe-4"
        >
          <h1 className="fw-bold m-0">{country ? country.name.toUpperCase() : 'Loading...'}</h1>
          <p>
            {country ? Number(country.today_confirmed).toLocaleString() : '0'}
            Total Cases
          </p>
        </Col>
      </Row>
      <Row className="m-0 mt-4 bg-pink-dark">
        <h6 className="text-white fw-bold p-2 m-0">
          {`${country.name.toUpperCase()} CASES BREAKDOWN`}
        </h6>
        <div>
          <h2 className="stats-title">Country Breakdown 2020-10-10</h2>
          <ul key={country.id} className="flex flex-dir stat-container">
            <li className="navLink w-100 stats">
              Today&apos;s confirmed:
              {country.today_confirmed}
            </li>
            <li className="navLink w-100 stats">
              Today&apos;s deaths:
              {country.today_deaths}
            </li>
          </ul>
        </div>
      </Row>
      <h6 className="text-white fw-bold p-2 m-0">
        {`${country.name.toUpperCase()} CASES BREAKDOWN BY REGION`}
      </h6>
      {regions}
    </div>
  );
};

export default Country;
