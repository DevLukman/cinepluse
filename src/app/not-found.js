import Link from "next/link";

export default function NotFound() {
  return (
    <section className="h-main absolute top-0 left-0 flex w-full flex-col items-center justify-center bg-[#000]">
      <h1 className="font-error text-[8.5vw] text-[red] md:text-[10vw] lg:text-[12vw]">
        404
      </h1>
      <p className="font-error text-4xl text-[red]">Page not found</p>
      <div className="relative mt-8">
        <Link
          href="/"
          className="text-secondary font-secondary border-secondary rounded-sm border-2 px-5 py-2 text-base uppercase hover:scale-[1.2]"
        >
          Back To Home
        </Link>
      </div>
    </section>
  );
}
