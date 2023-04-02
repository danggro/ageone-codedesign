export default function Button(props) {
  const variants = {
    medium: "px-6 py-4 text-md",
    large: "px-6 py-5 text-lg",
    small: "px-4 py-2 text-sm",
  };

  const addVariant = variants[props.variant];
  return (
    <button
      className={`text-white bg-primary-500 hover:shadow-2xl hover:shadow-green/30  rounded-full ${addVariant}`}
    >
      <div className="flex items-center space-x-2">
        <span>{props.children}</span>
        {props.arrow && (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            fill="none"
            viewBox="0 0 24 24"
          >
            <path
              fill="#fff"
              d="M5 13h11.17l-4.88 4.88c-.39.39-.39 1.03 0 1.42.39.39 1.02.39 1.41 0l6.59-6.59a.996.996 0 000-1.41l-6.58-6.6a.996.996 0 10-1.41 1.41L16.17 11H5c-.55 0-1 .45-1 1s.45 1 1 1z"
            ></path>
          </svg>
        )}
      </div>
    </button>
  );
}
