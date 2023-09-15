function Footer() {
  return (
    <footer className="flex justify-between mt-8 py-6 px-4 rounded-sm border border-white">
      <div>
        <h1 className="text-green text-xl font-bold uppercase">
          🦈<span className="tracking-wider">Tuvue</span>
        </h1>
      </div>
      <ul>
        <h1 className="text-green font-semibold text-lg tracking-wide">
          Categories
        </h1>
        <li className="text-black font-medium tracking-wide ">Common</li>
        <li className="text-black font-medium tracking-wide ">Aquarium</li>
        <li className="text-black font-medium tracking-wide ">Deliveries</li>
      </ul>

      <ul>
        <h1 className="text-green font-semibold text-lg tracking-wide ">
          Services
        </h1>
        <li className="text-black font-medium tracking-wide ">Delivery</li>
        <li className="text-black font-medium tracking-wide ">Sale platform</li>
        <li className="text-black font-medium tracking-wide ">Payments</li>
      </ul>
    </footer>
  );
}

export default Footer;
