import { NavLink } from "react-router-dom";

export type NavItemProps = {
  route: string;
  icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
};

export function NavItem({ route, icon: Icon }: NavItemProps) {
  return (
    <NavLink
      to={route}
      className={({ isActive }) =>
        isActive ? "text-white" : "text-white-dimmed"
      }
    >
      <Icon className="w-6 h-6" />
    </NavLink>
  );
}
