import "./Components.css";
function Header() {
  return (
    <div className=" nav flex justify-between mx-auto">
      <div className="logo">
        <img src="/logo.png" alt="logo" />
      </div>
      <div className=" link flex my-7 mx-8">
          <li className="list-none mx-7" ><a href="#">Home</a></li>
          <li className="list-none mx-7"><a href="#">About us</a></li>
          <li className="list-none mx-7"><a href="#">Services</a></li>
          <li className="list-none mx-7"><a href="#">Fees</a></li>
      </div>
      <div className="  my-7">
        <button className="btn bg-transparent text-blue-600 border-blue-600">Sign up</button>
      </div>
    </div>
  );
}

export default Header;
