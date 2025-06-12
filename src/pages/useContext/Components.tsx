/* eslint-disable no-empty-pattern */
/* eslint-disable @typescript-eslint/no-empty-object-type */
import { useUserContext } from "./context";

interface SidebarProps {}

export function Sidebar({}: SidebarProps) {
  const user = useUserContext();

  return (
    <div>
      <div>{user.name}</div>
      <div>Subscription Status: {user.isAllowed}</div>
    </div>
  );
}

interface ProfileProps {}

export function Profile({}: ProfileProps) {
  const user = useUserContext();

  return <div>{user.name}</div>;
}
