import React from 'react';

const App = () => (
  <div>
    <h1>To do app</h1>

    <input type="text" /> <button>Add</button>

    <div className="status">10 out of 20 tasks completed</div>

    <ul>
      <li>
        <input type="checkbox" /> Item 1
      </li>

      <li>
        <input type="checkbox" /> Item 2
      </li>

      <li>
        <input type="checkbox" /> Item 3
      </li>
    </ul>
  </div>
);

export default App;