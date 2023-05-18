const today = new Date();

function formatDate(date: Date) {
  return new Intl.DateTimeFormat("en-US", { weekday: "long" }).format(date);
}

export default function Mydate() {
  const name = "Rabees";
  return (
    <h1 className="text-4xl text-center text-pink-500">
      {name} Today Is {formatDate(today)}
    </h1>
  );
}