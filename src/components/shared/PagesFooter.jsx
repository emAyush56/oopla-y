import Link from "next/link";

const PagesFooter = () => {
  return (
    <footer className="footer-web fixed bottom-0 w-full border-t border-dashed border-t-gray-300 bg-white font-medium text-gray-600 lg:sticky">
      <div className="footer-content mx-auto flex max-w-[74rem] items-center justify-between px-6 py-2 lg:border-x lg:border-dashed lg:border-x-gray-300 lg:px-4">
        <ul className="left-options flex gap-8">
          <li className="cursor-pointer">FAQs</li>
          <li className="cursor-pointer">
            <Link href="/privacy">Privacy</Link>
          </li>
          <li className="cursor-pointer">Terms of use</li>
        </ul>
        <div className="footer-actions hidden gap-4 lg:flex">
          <Link
            href={`/login`}
            className="rounded-full border border-dashed border-theme-purple px-5 py-1 text-sm text-theme-purple transition-all hover:bg-theme-purple hover:text-white"
          >
            Login
          </Link>

          <Link
            href={`/`}
            className="rounded-full bg-gray-200 px-5 py-1 text-sm"
          >
            Download for chrome
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default PagesFooter;
