const Feature = ({ icon, sub, detail }) => {
  return (
    <div className="card">
      <div className="card-content">
        <div className="card-icon">
          <i class={icon}></i>
        </div>
        <h4 className="sub-card">{sub}</h4>
        <p className="card-detail">{detail}</p>
      </div>
    </div>
  );
};

export default Feature;
