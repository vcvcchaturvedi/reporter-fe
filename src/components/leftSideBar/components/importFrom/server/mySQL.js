function MySQL() {
  return (
    <div
      className="container ps-2 ms-2 text-white btn btn-outline-primary"
      role="button"
      data-bs-toggle="button"
    >
      <div className="row">
        <div className="col-1"></div>
        <div className="col-1 mySQLIcon"></div>
        <div className="col-8">
          <span className="ml-3 d-inline">Import from MySQL</span>
        </div>
      </div>
    </div>
  );
}
export default MySQL;
