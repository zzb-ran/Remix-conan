import type { LinksFunction } from "remix";
import { Link } from "remix";
import stylesUrl from '~/styles/index.css';

export const links: LinksFunction = () => {
  return [{ rel: "stylesheet", href: stylesUrl }];
};

export default function Index() {
  return (
    <>
      <ul>
        <li>
          <Link to="conan"> Conan </Link>
        </li>
      </ul>
    </>
  );
}
