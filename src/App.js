import "./App.css";
import Provider from "./Provider";
import NotesList from "./NotesList";

function App() {
  return (
    <Provider>
      <NotesList />
    </Provider>
  );
}

export default App;
