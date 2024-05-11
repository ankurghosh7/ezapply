import React from "react";

function Layout({
  children,
  model,
}: {
  children: React.ReactNode;
  model: React.ReactNode;
}) {
  return (
    <div className="signin">
      {children}
      {model}
    </div>
  );
}

export default Layout;
