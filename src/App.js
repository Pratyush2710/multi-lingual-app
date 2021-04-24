import React from "react";
import { useTranslation } from "react-i18next";

function App() {
  const { t } = useTranslation();
  const releaseDate = new Date("2021-04-23");
  const timeDifference = new Date() - releaseDate;
  const number_of_days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
  const languages = [
    {
      code: "fr",
      name: "Français",
      country_code: "fr",
    },
    {
      code: "en",
      name: "English",
      country_code: "gb",
    },
    {
      code: "fr",
      name: "عربى",
      country_code: "sa",
    },
  ];
  console.log("dww", number_of_days);
  return (
    <div className="container">
      <div className="d-flex justify-content-end">
        <div className="dropdown">
          <button
            Name="btn btn-secondary dropdown-toggle"
            type="button"
            id="dropdownMenuButton"
            data-toggle="dropdown"
            aria-haspopup="true"
            aria-expanded="false"
          >
            Dropdown button
          </button>
          <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton">
            {languages.map(({ code, name, country_code }) => (
              <li key={country_code}>
                <button className="dropdown-item">
                  <span
                    className={`flag-icon flag-icon-${country_code} mx-2`}
                  ></span>
                  {name}
                </button>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="d-flex flex-column align-items-start">
        <h1 className="font-weight-normal mb-3">{t("welcome_message")}</h1>
        {/* <p>{(t("days_since_release"), { number_of_days })}</p> */}
      </div>
    </div>
  );
}

export default App;
