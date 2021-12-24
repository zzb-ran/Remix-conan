import type { LinksFunction, LoaderFunction } from "remix";
import { useLoaderData, Link } from "remix";
import { db } from "~/utils/db.server";
import { ConanItem } from "~/utils/interface";
import stylesUrl from "~/styles/conan.css";

export const links: LinksFunction = () => {
  return [{ rel: "stylesheet", href: stylesUrl }];
};

export const loader: LoaderFunction = async () => {
  const conaninfos: Array<ConanItem> = await db.conanInfo.findMany({
    select: {
      kid: true,
      title: true
    }
  });
  return conaninfos;
};

export default function ConanIndex() {
  const conaninfos = useLoaderData<Array<ConanItem>>();
  return (
    <>
      <ul>
        {conaninfos.map(conanInfoItem => (
          <li>
            <Link to={`${conanInfoItem.kid}`}>
              { conanInfoItem.kid }.{ conanInfoItem.title }
            </Link>
          </li>
        ))}
      </ul>
    </>
  );
}
