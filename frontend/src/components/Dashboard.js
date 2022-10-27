function dashboard() {
  const baseURL = `http://localhost:3000/`
  return (
      <>
      <div id="dashboard">

        <a href={baseURL+"todo"}><div id="tdl"><h1>To-Do List</h1></div></a>
        <a href={baseURL+"participant"}><div id="pp"><h1>Participant Planner</h1></div></a>
        <a href={baseURL+"event"}><div id="el"><h1>Event List</h1></div></a>
        <a href={baseURL+"resourcepeople"}><div id="rp"><h1>Resource-People</h1></div></a>

      </div >

      </>
    );
}

export default dashboard;
