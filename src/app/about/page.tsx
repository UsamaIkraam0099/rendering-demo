import { cookies } from "next/headers";

export default function About() {
  const cookiesStore = cookies();
  const theme = cookiesStore.get("theme");

  console.log(theme);
  console.log("About server component");
  return <h1>About {new Date().toLocaleString()}</h1>;
}
