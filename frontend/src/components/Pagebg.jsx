import React from "react";

function Pagebg({ title, children }) {
  return (
    <article className="about  active" data-page="about">
      <header>
        <h2 className="h2 article-title">{title}</h2>
      </header>
      {children}
    </article>
  );
}

export default Pagebg;
