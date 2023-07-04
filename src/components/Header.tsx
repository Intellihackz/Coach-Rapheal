function Header() {
  return (
    <div className=" flex justify-between mx-auto">
      <div>
        <img src="/logo.png" alt="logo" />
      </div>
      <div className=" flex justify-between list-none  mx-">
        <li className=" m-7">Home</li>
        <li className=" m-7">About us</li>
        <li className=" m-7">Services</li>
        <li className=" m-7">Fees</li>
      </div>
      <div className=" px-5">
        <button className=" text-blue-500 bg-transparent border-blue-500">
          Sign up
        </button>
      </div>
    </div>
  );
}

export default Header;
