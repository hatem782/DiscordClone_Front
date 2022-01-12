import "./App.css";
import Login from "./pages/login/Login";
import SignIn from "./pages/signin/SignIn";
function App() {
  return (
    <div className="App">
      <div>
        <Login />
      </div>
    </div>
  );
}

export default App;

/*
{data.map((img, key) => {
          return (
            <img
              key={key}
              src={img}
              style={{ margin: "20px", height: "100px", width: "100px" }}
            />
          );
        })}

*/
