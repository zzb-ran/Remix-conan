import { Links, Outlet } from "remix";

export default function  Joker() {
  return (
    <div className="conan">
      <Links />
      <h1>Conan</h1>
      <Outlet />
    </div>
  )
}