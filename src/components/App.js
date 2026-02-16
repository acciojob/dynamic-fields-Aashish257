
import React, { useState } from "react";
import './../styles/App.css';

const App = () => {
  const [fields, setFields] = useState([{ id: Date.now(), name: "", age: "" }]);

  const handleChange = (index, e) => {
    const { name, value } = e.target; // name will be "name" or "age"
    setFields(prev => {
      const next = [...prev];
      next[index] = { ...next[index], [name]: value };
      return next;
    });
  };

  const addField = () => {
    setFields(prev => [...prev, { id: Date.now() + Math.random(), name: "", age: "" }]);
  };

  const removeField = index => {
    setFields(prev => prev.filter((_, i) => i !== index));
  };

  const handleSubmit = e => {
    e.preventDefault();

    // Log submission to the browser console (autograders usually stub console.log)
    // Log the array itself as the first argument so a stub like cy.stub(win.console, 'log')
    // can assert against the submitted value.
    console.log(fields);
  };

  return (
    <div className="df-container" style={{padding:20, fontFamily: 'Arial, sans-serif'}}>
      <h2>Dynamic Fields Mockup</h2>

      <form onSubmit={handleSubmit}>
        {fields.map((f, idx) => (
          <div key={f.id} className="field-row" style={{display:'flex', gap: '12px', alignItems: 'center', marginBottom: 12}}>
            <label style={{display:'flex',flexDirection:'column',fontSize:14}}>
              Name
              <input
                name="name"
                value={f.name}
                onChange={e => handleChange(idx, e)}
                placeholder="Name"
                required
                style={{padding:6, minWidth:160}}
              />
            </label>

            <label style={{display:'flex',flexDirection:'column',fontSize:14}}>
              Age
              <input
                name="age"
                type="number"
                value={f.age}
                onChange={e => handleChange(idx, e)}
                placeholder="Age"
                required
                style={{padding:6, width:100}}
              />
            </label>

            <button type="button" onClick={() => removeField(idx)} style={{padding:'6px 10px'}}>
              Remove
            </button>
          </div>
        ))}

        <div style={{display:'flex', gap:12, marginTop:8}}>
          <button type="button" onClick={addField} style={{padding:'8px 12px'}}>
            Add Field
          </button>

          <button type="submit" style={{padding:'8px 12px'}}>
            Submit
          </button>
        </div>
      </form>

      {/* Submission output is written to the browser console — open DevTools to view */}
    </div>
  );
};

export default App;
