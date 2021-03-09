import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getTask } from "./actions/taskManager";

function App() {
  const dispatch = useDispatch();
  const task = useSelector((state) => state?.task || []);

  useEffect(() => {
    dispatch(getTask());
  }, [dispatch]);

  return (
    <div className="App">
      Tasks: <br />
      <ul>
        {task.map((task) => (
          <li>{task.title}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
