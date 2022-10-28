function dashboard() {
  const baseURL = `http://localhost:3000/`;
  return (
    <>
      <div id="dashboard">
        <section>
          <h1>Dashboard</h1>
        </section>
        <div class="boxes">
          <div class="box1">
            <div class="box">
              <a href={baseURL + "todo"}>
                <div id="tdl">
                  <h2>To-Do List</h2>
                </div>
              </a>
            </div>
            <div class="box">
              <a href={baseURL + "participant"}>
                <div id="pp">
                  <h2>Participant Planner</h2>
                </div>
              </a>
            </div>
          </div>
          <div class="container">
            <div class="box">
              <a href={baseURL + "event"}>
                <div id="el">
                  <h2>Event List</h2>
                </div>
              </a>
            </div>
            <div class="box">
              <a href={baseURL + "resourcepeople"}>
                <div id="rp">
                  <h2>Resource-People</h2>
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default dashboard;
