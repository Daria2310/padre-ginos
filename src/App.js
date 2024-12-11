const Pizza = (props) => {
  return React.createElement("div", {}, [
    React.createElement("h1", {}, props.name),
    React.createElement("p", {}, props.description),
  ]);
};

const App = () => {
  return React.createElement("div", {}, [
    React.createElement("h1", {}, "Padre Gino's"),
    React.createElement(Pizza, {
      name: "The Pepperoni Pizza",
      description: "Delicious pizza with pepperoni",
    }),
    React.createElement(Pizza, {
      name: "The Carbonara Pizza",
      description: "Pizza with white sauce, bacon and egg",
    }),
    React.createElement(Pizza, {
      name: "The Four meat Pizza",
      description: "Pizza with chicken, sausage, bacon and ham",
    }),
    React.createElement(Pizza, {
      name: "The Francheska Pizza",
      description: "Pizza with tomato sause, ham and peppers",
    }),
    React.createElement(Pizza, {
      name: "The Four cheese Pizza",
      description: "Pizza with white sauce and four kinds of cheese",
    }),
  ]);
};

const container = document.getElementById("root");
const root = ReactDOM.createRoot(container);
root.render(React.createElement(App));
