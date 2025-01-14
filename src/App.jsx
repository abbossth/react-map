import "./App.css";
import Nav from "./components/Nav";
import Header from "./components/Header";
import ProfileCard from "./components/ProfileCard";
import ProductCard from "./components/ProductCard";
import Buttton from "./components/Buttton";

function App() {
  const todos = [
    {
      title: "Task 1",
    },
    {
      title: "Task 2",
    },
  ];

  return (
    <div>
      <Nav />
      <Header />
      <ProfileCard />
      <div>
        {todos.map((t) => {
          return <ProductCard title={t.title} />;
        })}
      </div>
      <Buttton />
    </div>
  );
}

export default App;
