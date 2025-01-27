function Button({ bgColor, textColor, icon: Icon, iconSize, text }) {
  return (
    <button
      className={`flex items-center gap-1 bg-${bgColor}-500 text-${textColor} font-bold p-2 rounded hover:bg-${bgColor}-600`}
    >
      {Icon && <Icon size={iconSize} />}
      {text}
    </button>
  );
}

export default Button;
