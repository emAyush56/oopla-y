import Link from "next/link";

const PagesHeader = () => {
  return (
    <header className="sticky inset-0 z-50 w-full border-b border-dashed border-b-gray-300 bg-white text-xl font-semibold">
      <div className="header-content ff-taviraj mx-auto max-w-[74rem] cursor-pointer select-none px-6 py-2 text-theme-purple lg:px-4">
        <Link href="/">oopla</Link>
      </div>
    </header>
  );
};

export default PagesHeader;
