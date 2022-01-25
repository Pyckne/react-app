import ItemListContainer from "../ItemListContainer";

const HomePage = () => {
  return (
    <div className="App">
      <h1>Home Page</h1>
      <p>This is the home page</p>
      <ItemListContainer greeting="Hola" />
    </div>
  );
};

export default HomePage;