/* eslint-disable no-empty-pattern */
/* eslint-disable @typescript-eslint/no-empty-object-type */
import { useState } from "react";

import { DashboardContext } from "./context";
import Dashboard from "./Dashboard";

export interface User {
  isAllowed: boolean;
  name: string;
}

interface DemoProps {}

export default function Demo({}: DemoProps) {
  const [user] = useState<User>({
    isAllowed: true,
    name: "You",
  });

  return (
    <div>
      <DashboardContext.Provider value={user}>
        <Dashboard />
      </DashboardContext.Provider>
    </div>
  );
}
