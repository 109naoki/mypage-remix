import type { LinksFunction } from "@remix-run/cloudflare";

import style from "./styles/style.css";
import reset from "./styles/reset.css";
import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from "@remix-run/react";

// export const links: LinksFunction = () => [
//   ...(cssBundleHref
//     ? [
//         { rel: "stylesheet", href: cssBundleHref },

//         { rel: "stylesheet", href: styles },
//       ]
//     : []),
// ];
export const links: LinksFunction = () => {
  return [
    { rel: "stylesheet", href: style },
    { rel: "stylesheet", href: reset },
  ];
};

export default function App() {
  return (
    <html lang="ja">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <Meta />
        <Links />
      </head>
      <body>
        <Outlet />
        <ScrollRestoration />
        <Scripts />
        <LiveReload />
      </body>
    </html>
  );
}
