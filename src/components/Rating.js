export default function Rating({ vote_average }) {
  return (
    <span
      style={{
        width: `${Math.floor(vote_average * 10)}%`,
        background: `${
          Math.floor(vote_average * 10) >= 70
            ? "#008000"
            : Math.floor(vote_average * 10) >= 50
              ? "#ffff00"
              : "#ff253a"
        }`,
      }}
      className="absolute bottom-0 block h-1"
    ></span>
  );
}
