import "./Loader.css";
const Loader = () => {
  return (
    <div className="loader__container">
      <h3>Loading content...</h3>
      <div className="loader">
        <div className="orbe" style={{ "--index": 0 }}></div>
        <div className="orbe" style={{ "--index": 1 }}></div>
        <div className="orbe" style={{ "--index": 2 }}></div>
        <div className="orbe" style={{ "--index": 3 }}></div>
        <div className="orbe" style={{ "--index": 4 }}></div>
      </div>
    </div>
  );
};

export default Loader;
