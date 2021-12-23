import type { LoaderFunction } from "remix";
import { useLoaderData } from "remix";
import { db } from '~/utils/db.server';
import { ConanItem } from "~/utils/interface";

export const loader: LoaderFunction = async ({ 
  params:{ conanId }
}) => {
  const conanitem: ConanItem | null = await db.conanInfo.findUnique({
    select: {
      kid: true,
      title: true,
      description: true
    },
    where: {
      kid: Number(conanId)
    }
  })
  return conanitem;
}

export default function ConanRoute() {
  const conanitem = useLoaderData<ConanItem>();
  return (
    <>
      <h3>第{ conanitem.kid }集 { conanitem.title }</h3>
      <p>简介:{ conanitem.description }</p>
    </>
  )
}