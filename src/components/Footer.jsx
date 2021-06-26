import React, { useState } from "react";

const Footer = () => {
  const [bgStyle] = useState({ backgroundColor: "#f5f5f5" });

  return (
    <footer style={bgStyle} className="mt-auto py-3 text-center">
      {/* <strong> &copy; 2019 </strong>*/}
      Made with <i className="fas fa-heart"></i> by{" "}
      <a
        className="badge badge-dark"
        rel="noopener"
        href="https://github.com/anglesvar"
        aria-label="My GitHub"
      >
        Anglesvar Chandrasekar Appiya
      </a>{" "}
      using <i className="fab fa-react"></i>
      <p>
        <small className="text-muted">
          {" "}
          This is an open-source project. You can fork it and make your own
          version.
        </small>
      </p>
    </footer>
  );
};

export default Footer;
