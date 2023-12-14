const LoadingSpiner = () => {
  return (
    <>
    <center>
      <div className="spinner-border text-primary" role="status"style={{width: "5rem", height : "5rem"}}>
        <span className="visually-hidden">Loading...</span>
      </div>
      <div className="spinner-border text-secondary" role="status"style={{width: "5rem", height : "5rem"}}>
        <span className="visually-hidden">Loading...</span>
      </div>
      <div className="spinner-border text-success" role="status"style={{width: "5rem", height : "5rem"}}>
        <span className="visually-hidden">Loading...</span>
      </div>
      <div className="spinner-border text-danger" role="status" style={{width: "5rem", height : "5rem"}}>
        <span className="visually-hidden">Loading...</span>
      </div>
      <div className="spinner-border text-warning" role="status" style={{width: "5rem", height : "5rem"}}>
        <span className="visually-hidden">Loading...</span>
      </div>
      <div className="spinner-border text-info" role="status" style={{width: "5rem", height : "5rem"}}>
        <span className="visually-hidden">Loading...</span>
      </div>
      <div className="spinner-border text-dark" role="status" style={{width: "5rem", height : "5rem"}}>
        <span className="visually-hidden">Loading...</span>
      </div>
      </center>
    </>
  );
};
export default LoadingSpiner;
