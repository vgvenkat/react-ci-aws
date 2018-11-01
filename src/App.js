import React from "react";

const App = () => (
  <article className="message">
    <div className="message-header">
      <p>Hello World</p>
      <button className="delete" aria-label="delete" />
    </div>
    <div className="message-body">
      React app built with
      <strong>parcel, code in github, CICD with CircleCI</strong>, hosted on
      <em> aws</em>.
    </div>
  </article>
);
export default App;
