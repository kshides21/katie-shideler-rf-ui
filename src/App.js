import { useEffect, useState } from 'react';
import Nav from './components/Nav';
import Attendees from './pages/Attendees';
import AttendeeTypes from './pages/AttendeeTypes';
import Content from './pages/Content';
import Discounts from './pages/Discounts';
import Exhibitors from './pages/Exhibitors';
import Guide from './pages/Guide';
import Packages from './pages/Packages';
import RegCodes from './pages/RegCodes';
import eventLogo from './assets/Logo.png';

const pages = {
  guide: Guide,
  attendees: Attendees,
  'attendee-types': AttendeeTypes,
  packages: Packages,
  'reg-codes': RegCodes,
  discounts: Discounts,
  content: Content,
  exhibitors: Exhibitors,
};

const readPageFromHash = () => {
  const page = window.location.hash.replace(/^#\/?/, '');
  return pages[page] ? page : 'guide';
};

function App() {
  const [currentPage, setCurrentPage] = useState(readPageFromHash);
  const Page = pages[currentPage];

  useEffect(() => {
    const updatePage = () => setCurrentPage(readPageFromHash());
    window.addEventListener('hashchange', updatePage);
    return () => window.removeEventListener('hashchange', updatePage);
  }, []);

  return (
    <div className="App">
      <Nav currentPage={currentPage} />
      <main className="page-content">
        <div className="page-content__inner">
          <header className="event-header">
            <img className="event-header__logo" src={eventLogo} alt="" />
            <div className="event-header__details">
              <h1>RainFocus Summit</h1>
              <p>December 15th</p>
              <p>Lehi, Utah</p>
            </div>
            <button className="event-header__edit" type="button">Edit event</button>
          </header>

          <section className="event-guide" aria-labelledby="guide-title">
            <h2 id="guide-title">Event setup guide</h2>
            <p>
              See the available list of modules below. We suggest that you start
              with the attendee module.
            </p>
          </section>

          <Page />
        </div>
      </main>
    </div>
  );
}

export default App;
