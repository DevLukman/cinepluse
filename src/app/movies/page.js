import { redirect } from "next/navigation";

export default function Movies() {
  redirect("/movies/nowplaying");
}
