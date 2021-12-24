import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration
} from "remix";
import type { LinksFunction, MetaFunction } from "remix";
import globalStyleUrl from "~/styles/global.css"

export const links: LinksFunction = () => {
  return [{rel: "stylesheet", href: globalStyleUrl}]
};

export const meta: MetaFunction = () => {
  return { title: "Remix App" };
};

export default function App() {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width,initial-scale=1" />
        <Meta />
        <Links />
      </head>
      <body>
        <div id="root">
          <Outlet />
        </div>
        {/* <ScrollRestoration />
        <Scripts /> */}
        {process.env.NODE_ENV === "development" ?? <LiveReload />}
      </body>
    </html>
  );
}

export function  ErrorBoundary({error}: {error: Error}) {
  return (
    <div className="error-container">
    <h1>App Error</h1>
      <pre>{error.message}</pre>
    </div>
  )
}
