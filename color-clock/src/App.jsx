// Import React hooks and date formatting function
import { useState, useEffect } from "react";
import { format } from "date-fns";
import "./App.css"; // Import CSS file for styling

function App() {
  // State to store the current time
  const [time, setTime] = useState(new Date());

  // useEffect runs once when the component mounts
  useEffect(() => {
    // Set up an interval to update the time every second
    const timer = setInterval(() => {
      setTime(new Date());
    }, 1000);

    // Clean up the interval when the component unmounts
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="app-container">
      {/* Main heading */}
      <h1>Dynamic Color Clock</h1>

      {/* Display the current date and time */}
      <p className="clock">
        {format(time, "eeee, MMMM do yyyy, HH:mm:ss")}
      </p>

      {/* Add some motivational or descriptive text */}
      <p className="subtitle">
        React + date-fns makes dynamic clocks easy!
      </p>
    </div>
  );
}

// Export the App component as default
export default App;
