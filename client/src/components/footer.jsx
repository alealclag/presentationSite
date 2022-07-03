import React from "react";

export default function footer(properties) {
  return (
    <footer>
      <div className="container">
        <div className="row justify-content-between align-items-center">
          <div className="col-6 col-xl-2 col-xxl-2 col-lg-3 col-md-4">
            <a href={properties.linkedInProfile}>
              <img
                src="./images/linkedin.png"
                alt="LinkedIn Profile"
                className="footerIcon"
              />
            </a>
            <a href={properties.gitHubProfile}>
              <img
                src="./images/github.png"
                alt="GitHub Repo"
                className="footerIcon"
              />
            </a>
          </div>
          <div className="col-6 col-xxl-3 col-xl-3 col-lg-3 col-md-4">
            <p>Want to know how does this website work?</p>
            <a href={properties.repoLink}>
              <button type="button" className="btn shadow-lg footerBtn">
                {"Here's the Repo"}
              </button>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
