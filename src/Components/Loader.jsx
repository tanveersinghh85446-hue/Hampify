function Loader({ fullScreen = false }) {
  const wrapperClass = fullScreen
    ? "fixed inset-0 z-50 bg-white/70 flex items-center justify-center"
    : "flex items-center justify-center py-10";

  return (
    <div className={wrapperClass}>
      <div className="h-10 w-10 rounded-full border-4 border-gray-200 border-t-[#0C3B2E] animate-spin" />
    </div>
  );
}

export default Loader;
