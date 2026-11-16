import personIcon from '../assets/Person.png';

const Attendees = () => (
  <section className="attendees-page" aria-labelledby="attendees-title">
    <header className="page-section-heading">
      <img src={personIcon} alt="" />
      <h2 id="attendees-title">Attendee</h2>
    </header>
    <p className="attendees-page__step"><strong>Step 1:</strong> Base settings.</p>
    <div className="attendees-page__placeholder">
      Attendee setup content will go here.
    </div>
  </section>
);

export default Attendees;
