import { Link } from "react-router-dom";
import { PAGES_USER } from "../config/pages.config";

const HeaderNavUser = () => {
  return (
    <nav className="flex flex-row gap-6 justify-center items-center lg:gap-10">
      <Link to={PAGES_USER.SEARCH}>
        <button className="text-gray-600 hover:text-blue-600 flex justify-center items-center">
          <svg
            width="18"
            height="18"
            viewBox="0 0 18 18"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M7.93539 15.2161C11.9564 15.2161 15.216 11.9565 15.216 7.93551C15.216 3.91455 11.9564 0.654907 7.93539 0.654907C3.91442 0.654907 0.654785 3.91455 0.654785 7.93551C0.654785 11.9565 3.91442 15.2161 7.93539 15.2161Z"
              stroke="white"
              strokeWidth="1.3"
              strokeMiterlimit="10"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M13.0874 13.0873L17.3452 17.3451"
              stroke="white"
              strokeWidth="1.3"
              strokeMiterlimit="10"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>
      </Link>

      <Link to={PAGES_USER.CHECKOUT}>
        <button className="text-gray-600 hover:text-blue-600 relative flex justify-center items-center">
          <svg
            width="18"
            height="18"
            viewBox="0 0 18 18"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M13.8271 16.22H2.6664C1.55511 16.22 0.68333 15.24 0.75039 14.09L1.46889 2.44C1.49763 1.91 1.91915 1.5 2.4269 1.5H14.0666C14.5744 1.5 14.9863 1.91 15.0246 2.44L15.7431 14.09C15.8102 15.24 14.9384 16.22 13.8271 16.22Z"
              stroke="white"
              strokeWidth="1.2"
              strokeMiterlimit="10"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M10.4668 3.71997V5.62997C10.4668 6.69997 9.74183 7.55997 8.8585 7.55997H7.69183C6.80016 7.55997 6.0835 6.68997 6.0835 5.62997V3.71997"
              stroke="white"
              strokeWidth="1.2"
              strokeMiterlimit="10"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          <svg
            width="8"
            height="8"
            viewBox="0 0 8 8"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="absolute top-[-1px] right-[-1px]"
          >
            <circle cx="4" cy="4" r="3.5" fill="#FF2B2B" stroke="#5A9BFE" />
          </svg>
        </button>
      </Link>
      <Link to={PAGES_USER.LOGOUT}>
        <button className="text-gray-600 hover:text-blue-600 flex justify-center items-center">
          <svg
            width="18"
            height="18"
            viewBox="0 0 18 18"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g clipPath="url(#clip0_1_6)">
              <path
                d="M7.83 7.63998C9.77404 7.63998 11.35 6.06402 11.35 4.11998C11.35 2.17593 9.77404 0.599976 7.83 0.599976C5.88596 0.599976 4.31 2.17593 4.31 4.11998C4.31 6.06402 5.88596 7.63998 7.83 7.63998Z"
                stroke="white"
                strokeWidth="1.2"
                strokeMiterlimit="10"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M15.07 14.56C13.92 11.69 11.12 9.66003 7.83999 9.66003C4.55999 9.66003 1.74999 11.69 0.609985 14.56"
                stroke="white"
                strokeWidth="1.2"
                strokeMiterlimit="10"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </g>
            <defs>
              <clipPath id="clip0_1_6">
                <rect width="15.67" height="15.16" fill="white" />
              </clipPath>
            </defs>
          </svg>
        </button>
      </Link>
    </nav>
  );
};

export default HeaderNavUser;
