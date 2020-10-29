import Link from "next/link";
export const Footer = () => {
  return (
    <div className="" style={{ backgroundColor: "#403E56" }}>
      <div className="px-5 md:px-20 flex flex-col md:flex-row py-10 md:py-20">
        <div className="menu mr-20 ">
          <h4 className="text-lg font-semibold text-white">MENU</h4>
          <ul className="mt-2 text-white text-sm">
            <li className="py-3">
              <Link href="#">
                <a>Home</a>
              </Link>
            </li>
            <li className="py-3">
              <Link href="#">
                <a>About Us</a>
              </Link>
            </li>
            <li className="py-3">
              <Link href="#">
                <a>Contact</a>
              </Link>
            </li>
            <li className="py-3">
              <Link href="#">
                <a>FAQ</a>
              </Link>
            </li>
          </ul>
        </div>
        <div className="legal mr-20 mt-5 md:mt-0">
          <h4 className="text-lg font-semibold text-white">LEGAL</h4>
          <ul className="mt-2 text-white text-sm">
            <li className="py-3">
              <Link href="#">
                <a>Term Of Service</a>
              </Link>
            </li>
            <li className="py-3">
              <Link href="#">
                <a>Privacy Policy</a>
              </Link>
            </li>
          </ul>
        </div>
        <div className="legal mt-5 md:mt-0">
          <h4 className="text-lg font-semibold text-white">Social</h4>
          <ul className="mt-2 text-white text-sm flex">
            <li className="mr-3">
              <Link href="#">
                <a>
                  <img
                    src="/assets/sosmed/facebook.svg"
                    className="h-5 w-5"
                    alt=""
                  />
                </a>
              </Link>
            </li>
            <li className="mr-3">
              <Link href="#">
                <a>
                  <img
                    src="/assets/sosmed/instagram.svg"
                    className="h-6 w-6"
                    alt=""
                  />
                </a>
              </Link>
            </li>
            <li className="mr-3">
              <Link href="/">
                <a>
                  <img
                    src="/assets/sosmed/twitter.svg"
                    className="h-6 w-6"
                    alt=""
                  />
                </a>
              </Link>
            </li>
          </ul>
        </div>
        <div className="ml-0 md:ml-auto mt-5 md:mt-0">
          <h2 className="text-2xl font-bold text-white">Travelku.</h2>
        </div>
      </div>
    </div>
  );
};
