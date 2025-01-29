const bgColors = {
  yellow: "bg-yellow-500 hover:bg-yellow-600",
  green: "bg-green-500 hover:bg-green-600",
  blue: "bg-blue-500 hover:bg-blue-600",
  red: "bg-red-500 hover:bg-red-600",
};

function Button({ bgColor, textColor, icon: Icon, iconSize, text }) {
  return (
    <button
      className={`flex items-center gap-1 ${
        bgColors[bgColor] || "bg-gray-500"
      } text-${textColor} font-bold p-2 rounded`}
    >
      {Icon && <Icon size={iconSize} />}
      {text}
    </button>
  );
}

export default Button;
