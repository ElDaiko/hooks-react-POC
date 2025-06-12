/* eslint-disable no-empty-pattern */
/* eslint-disable @typescript-eslint/no-empty-object-type */
import { Profile, Sidebar } from "./Components";

interface DashboardProps {}

export default function Dashboard({}: DashboardProps) {
  return (
    <div>
      <Sidebar />
      <Profile />
    </div>
  );
}
