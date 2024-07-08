import { NavItemProps, NavItem } from "./nav-item";

type NavBarProps = {
  items: NavItemProps[];
};

export function NavBar({ items }: NavBarProps) {
  return (
    <div className="bg-dark flex pl-16 pr-16 pt-8 pb-8 gap-6 justify-evenly items-center">
      {items.map((item, index) => (
        <NavItem key={index} {...item} />
      ))}
    </div>
  );
}
