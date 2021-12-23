import type { LinksFunction } from "remix";
import stylesUrl from '~/styles/index.css';

export const links: LinksFunction = () => {
  return [{ rel: "stylesheet", href: stylesUrl }];
};

export default function Index() {
  return <div>Hello Index Route</div>;
}
