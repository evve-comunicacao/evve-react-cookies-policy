# Evve Cookies Policy

`evve-react-cookies-policy` is react cookie policy component that is used in our projects

## Installation

to install, run the following command:

```bash
yarn add evve-react-cookies-policy
```

## Usage

to use just do that *(you don't need pass any of this props)*

```jsx
import CookiesPolicy from "evve-react-cookies-policy";

function YourComponent() {
  return (
      <CookiesPolicy
        cookiesPolicyLinkHref="https://caquiinova.com.br/assets/pdf/TERMOS_DE_ACEITE_DE_UTILIZACAO_DE_COOKIES_CAQUI_INOVA.pdf"
        cookiesPolicyLinkTarget="_blank"
        cookiesPolicyLinkRel="noopener noreferrer"
        cookiesLocalStorageKey="COOKIES_CONCENT"
        cookiesLocalStorageValue="yes"
        styles={{
          containerBackgroundColor: "#efefef",
          linkColor: "red",
          buttonBackgroundColor: "#3DC7E3",
          buttonFontFamily: "sans-serif",
          buttonTextColor: "white",
          paragraphColor: "#202020",
          paragraphFontFamily: "sans-serif",
        }}
        onAcceptCookies={() => {
          alert("Cookie accepted!");
        }}
      />
  );
}

export default App;
```

## Props

```js
{
    cookiesPolicyLinkHref="#"
    cookiesPolicyLinkTarget="_blank"
    cookiesPolicyLinkRel="noopener noreferrer"
    cookiesLocalStorageKey="COOKIES_CONCENT"
    cookiesLocalStorageValue="yes"
    styles={
        containerBackgroundColor: "#efefef",
        linkColor: "#007bff",
        buttonBackgroundColor: "#FFBC14",
        buttonFontFamily: "inherit",
        buttonTextColor: "white",
        paragraphColor: "#333333",
        paragraphFontFamily: "inherit",
    },
    onAcceptCookies= () => {}
}
```

___

bjs T.I 😘
