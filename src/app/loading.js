import { HashLoader } from "react-spinners";

export default function Loading() {
  return (
    <section className="h-main relative z-10 flex w-full items-center justify-center overflow-hidden">
      <HashLoader color="#29ab87" size="100px" />
    </section>
  );
}
