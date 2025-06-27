export default function GridContainer({ children }) {
  return (
    <div className="mt-4 grid w-full grid-cols-1 gap-3 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
      {children}
    </div>
  );
}
