import React from "react";

import Header from "./components/Header.tsx";

export default function Layout({children}: {children: React.ReactNode}) {
  return (
    <div>
      <Header />
      {children}
    </div>
  )
}