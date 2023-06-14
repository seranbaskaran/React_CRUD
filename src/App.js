import React, { useState } from "react";

const App = () => {
  const [data, setData] = useState({ name: "", role: "" });
  const [master, setMaster] = useState([]);
  const [id, setId] = useState(null);
  const formsubmit = (e) => {
    e.preventDefault();
    setMaster([...master, data]);
    setData({ name: "", role: "" });
  };
  const delfunc = (index) => {
    let delmaster = master.filter((val, i) => i !== index);
    setMaster(delmaster);
  };
  const editfunc = (index) => {
    setId(index);
    master.filter((val, i) => (i == index ? setData(val) : val));
  };
  const updatefun = (e) => {
    e.preventDefault();
    setMaster(master.map((val, i) => (i == id ? data : val)));
  };
  return (
    <div>
      <h1>CRUD</h1>
      <form action="#" onSubmit={formsubmit}>
        <label>Name</label>
        <input
          type="text"
          placeholder="Name"
          value={data.name}
          onChange={(e) => setData({ ...data, name: e.target.value })}
        />
        <label>Role</label>
        <input
          type="text"
          placeholder="Role"
          value={data.role}
          onChange={(e) => setData({ ...data, role: e.target.value })}
        />
        <button type="submit">ADD</button>
        <button type="submit" onClick={updatefun}>
          Update
        </button>
      </form>
      {master.map((val, index) => (
        <ul key={index}>
          <li>{val.name}</li>
          <li>{val.role}</li>
          <button onClick={() => delfunc(index)}>delete</button>
          <button onClick={() => editfunc(index)}>Edit</button>
        </ul>
      ))}
    </div>
  );
};

export default App;
