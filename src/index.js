import React, { Fragment, useEffect, useState } from "react";
import { CookiesContainer } from "./styles";

export default function CookiesPolicy({
  styles = {
    containerBackgroundColor: null,
    linkColor: null,
    buttonBackgroundColor,
    buttonTextColor,
    buttonFontFamily,
    paragraphFontFamily,
    paragraphColor,
  },
  cookiesPolicyLinkHref = "#",
  cookiesPolicyLinkTarget = "_blank",
  cookiesPolicyLinkRel = "noopener noreferrer",
  cookiesLocalStorageKey = "COOKIES_CONCENT",
  cookiesLocalStorageValue = "yes",
  onAcceptCookies = () => {},
}) {
  const [showCookieContainer, setShowCookieContainer] = useState(false);

  const handleOnAcceptCookies = () => {
    window.localStorage.setItem(
      cookiesLocalStorageKey,
      cookiesLocalStorageValue
    );
    setShowCookieContainer(false);
    onAcceptCookies();
  };

  useEffect(() => {
    if (!window.localStorage.getItem(cookiesLocalStorageKey)) {
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
          $buttonBackgroundColor={styles?.buttonBackgroundColor}
          $buttonTextColor={styles?.buttonTextColor}
          $buttonFontFamily={styles?.buttonFontFamily}
          $paragraphColor={styles?.paragraphColor}
          $paragraphFontFamily={styles?.paragraphFontFamily}
        >
          <div className="cookie-container">
            <p>
              Nós usamos cookies e outras tecnologias semelhantes para melhorar
              a sua experiência em nossos serviços, personalizar publicidade e
              recomendar conteúdo de seu interesse. Ao utilizar nossos serviços,
              você concorda com tal monitoramento. Para saber mais sobre os
              cookies que usamos, consulte nossa{" "}
              <a
                href={cookiesPolicyLinkHref}
                target={cookiesPolicyLinkTarget}
                rel={cookiesPolicyLinkRel}
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
