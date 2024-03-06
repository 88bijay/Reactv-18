import { useState } from "react";
import Button from "./Button";
import Alert from "./components/Alert";
function App() {
  const [alertVisible, setAlertVisibility] = useState(false);

  
  return (
    <div>
      {alertVisible &&<Alert onClose={() =>setAlertVisibility(false)}> my Alert</Alert>}
      <Button color="success" onClick={() => setAlertVisibility(true)}>
        My Button
      </Button>
      
    </div>
  );
}

export default App;
