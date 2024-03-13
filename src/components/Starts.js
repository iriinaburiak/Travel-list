export default function Starts({ items }) {
  if (!items.length)
    return (
      <p className="starts">
        <em>Start adding some items to your packing list</em>
      </p>
    );

  const numItems = items.length;
  const numPacked = items.filter((item) => item.packed).length;
  const percentage = Math.round((numPacked / numItems) *
    100);

  return (
    <footer className="starts">
      <em>
        {percentage === 100
          ? "You got everything! Ready to go"
          : `✨You have ${numItems} item on your list, 
        and you already packed ${numPacked} (${percentage}%)`}
      </em>
    </footer>
  );
}
