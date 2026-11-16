const SimplePage = ({ title, description }) => (
  <section className="simple-page" aria-labelledby="page-title">
    <h2 id="page-title">{title}</h2>
    <p>{description}</p>
  </section>
);

export default SimplePage;
