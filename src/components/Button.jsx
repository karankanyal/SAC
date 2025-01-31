const bgColors = {
  yellow: "bg-yellow-500 hover:bg-yellow-600",
  green: "bg-green-500 hover:bg-green-600",
  blue: "bg-blue-500 hover:bg-blue-600",
  red: "bg-red-500 hover:bg-red-600",
  transparent: "bg-transparent",
};

const borderColors = {
  yellow: "border border-yellow-500 hover:border-yellow-600",
  green: "border border-green-500 hover:border-green-600",
  blue: "border border-blue-500 hover:border-blue-600",
  red: "border border-red-500 hover:border-red-600",
};

function Button({
  borderColor,
  bgColor,
  textColor,
  icon: Icon,
  iconSize,
  text,
}) {
  return (
    <button
      className={`flex items-center gap-1
      text-${textColor} font-bold p-2 rounded 
         ${bgColors[bgColor] || "bg-transparent"}`}
    >
      {Icon && <Icon size={iconSize} />}
      {text}
    </button>
  );
}

export default Button;
