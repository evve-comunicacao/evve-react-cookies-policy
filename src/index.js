import React, { Fragment, useEffect, useState } from "react";
import { CookiesContainer } from "./styles";

export default function CookiesPolicy({
  styles = {
    containerBackgroundColor: null,
    linkColor: null,
    button: {
      backgroundColor: null,
      textColor: null,
      fontFamily: "arial"
    },
    paragraph: {
      fontFamily: "arial",
      color: null
    },
  },
  cookiesOptions = {
    cookiesPolicyLink: {
      href: "#",
      target: "_blank",
      rel: "noopener noreferrer",
    },
    cookieLocalStorageKey: "COOKIES_CONCENT",
    cookieLocalStorageValue: "yes",
  },
  onAcceptCookies = () => {}
}) {
  const [showCookieContainer, setShowCookieContainer] = useState(false);

  const handleOnAcceptCookies = () => {
    window.localStorage.setItem(
      cookiesOptions.cookieLocalStorageKey,
      cookiesOptions.cookieLocalStorageValue
    );
    setShowCookieContainer(false);
    onAcceptCookies();
  };

  useEffect(() => {
    if (!window.localStorage.getItem(cookiesOptions.cookieLocalStorageKey)) {
      setShowCookieContainer(true);
    }
  }, []);
  return (
    <Fragment>
      {showCookieContainer && (
        <CookiesContainer
          id="cookies-container"
          $containerBackgroundColor={styles?.containerBackgroundColor}
          $linkColor={styles?.linkColor}
          $buttonBackgroundColor={styles?.button.backgroundColor}
          $buttonTextColor={styles?.button.textColor}
          $buttonFontFamily={styles?.button.fontFamily}
          $paragraphColor={styles?.paragraph.color}
          $paragraphFontFamily={styles?.paragraph.fontFamily}
        >
          <div className="cookie-container">
            <p>
              Nós usamos cookies e outras tecnologias semelhantes para melhorar
              a sua experiência em nossos serviços, personalizar publicidade e
              recomendar conteúdo de seu interesse. Ao utilizar nossos serviços,
              você concorda com tal monitoramento. Para saber mais sobre os
              cookies que usamos, consulte nossa{" "}
              <a
                href={cookiesOptions.cookiesPolicyLink.href}
                target={cookiesOptions.cookiesPolicyLink.target}
                rel={cookiesOptions.cookiesPolicyLink.rel}
              >
                política de cookies.
              </a>
            </p>

            <button id="accept-cookies" onClick={handleOnAcceptCookies}>
              Aceitar
            </button>
          </div>
        </CookiesContainer>
      )}
    </Fragment>
  );
}
