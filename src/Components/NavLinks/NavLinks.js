import "./NavLinks.css";

export function NavLinks() {
  const links = ["Blog", "Challenges", "Flexbox", "CSS Grid"];

  return (
    <div>
      <ul>
        {links.map((link) => (
          <li className="NavList">
            <a href="#">{link}</a>
          </li>
        ))}
      </ul>
    </div>
  );
}
