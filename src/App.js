import "./styles.scss";
import { Discussion } from "./Discussion";
import { discussionJson } from "./comment";
export default function App() {
  return (
    <div className="App">
      <Discussion replies={discussionJson} />
    </div>
  );
}
