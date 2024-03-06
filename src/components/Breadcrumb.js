import React from "react";

function Breadcrumb({ items }) {
  return (
    <nav className="breadcrumb">
      {items.map((item, index) => (
        <React.Fragment key={item.label}>
          <span className={index === items.length - 1 ? 'last-breadcrumb' : ''}>
            {item.label}
          </span>
          {index < items.length - 1 && <span> &gt;&gt; </span>}
        </React.Fragment>
      ))}
    </nav>
  );
}


export default Breadcrumb
