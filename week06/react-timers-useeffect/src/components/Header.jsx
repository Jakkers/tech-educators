//importing from public folder
import logo from "/images/Manny-os-logo.png";

export default function Header() {
  return (
    <>
      <img id="logo-style" src={logo} alt="Manny O's logo" />
      <h1>Manny&apos;s Biscuits</h1>
      <nav>
        <a href="">Home</a>
        <a href="">Testimonials</a>
      </nav>
    </>
  );
}
