function SearchBar({ value, onChange, placeholder = "Search hampers..." }) {
  return (
    <div className="flex items-center bg-gray-100 rounded-xl px-3 py-2.5 gap-2 w-full">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-4 w-4 text-gray-500 shrink-0"
        viewBox="0 0 20 20"
        fill="currentColor"
      >
        <path
          fillRule="evenodd"
          d="M9 3.5a5.5 5.5 0 100 11 5.5 5.5 0 000-11zM2 9a7 7 0 1112.452 4.391l3.328 3.329a.75.75 0 11-1.06 1.06l-3.329-3.328A7 7 0 012 9z"
          clipRule="evenodd"
        />
      </svg>
      <input
        type="text"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        className="bg-transparent outline-none text-sm w-full text-[#14140F] placeholder-gray-500"
      />
      {value && (
        <button
          onClick={() => onChange("")}
          className="text-gray-400 hover:text-gray-600 shrink-0"
          aria-label="Clear search"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-4 w-4"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>
      )}
    </div>
  );
}

export default SearchBar;
