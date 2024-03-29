
import React , {useState} from "react";
import './../styles/App.css';

const App = () => {
  const [name, setName] = useState("");
  return (
    <div>
        {/* Do not remove the main div */}
        <form>
          <label>Please enter your name :</label>
          <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
        </form>
        <p>{name ? `Hello ${name}!` : ''}</p>
    </div>
  )
}

export default App
