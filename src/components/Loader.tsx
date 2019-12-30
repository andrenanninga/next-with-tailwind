import React from "react";
import { css } from "astroturf";

const Loader: React.FC<{ className?: string }> = ({ className }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="36"
    height="36"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.5"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={`${animation} ${className} `}
  >
    <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>
  </svg>
);

const { animation } = css`
  .animation {
    animation-name: rotate;
    animation-duration: 1s;
    animation-timing-function: ease-in-out;
    animation-iteration-count: infinite;
    animation-direction: alternate;
  }

  @keyframes rotate {
    0% {
      transform: translateX(-36px) rotate(-180deg);
    }

    100% {
      transform: translateX(36px) rotate(90deg);
    }
  }
`;

export { Loader };
