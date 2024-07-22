import Button from "./button";

export default function ButtonHandler() {
  const handleClick = () => {
    //alert("Button clicked!");
  };

  return (
    <div className="p-4">
      <Button onClick={handleClick}>Click Me</Button>
    </div>
  );
}
