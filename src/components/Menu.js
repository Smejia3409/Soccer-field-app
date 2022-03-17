import "../style/menu.css";

const Menu = () => {
  return (
    <div className="menu text-end">
      <a href="/map">
        <button className="btn btn-primary">View Fields</button>
      </a>
      <button className="btn btn-primary">About</button>
    </div>
  );
};

export default Menu;
