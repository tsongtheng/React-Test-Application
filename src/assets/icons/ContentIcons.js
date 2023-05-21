const ProfileIcon = () => {
  return (
    <svg
      width="30"
      height="30"
      viewBox="0 0 30 30"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle cx="15" cy="15" r="15" fill="#2CA9E3" />
      <ellipse
        cx="15.4988"
        cy="11.8732"
        rx="2.71662"
        ry="2.7619"
        fill="white"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M10.0005 20.5215H21.0006C20.4369 18.0036 18.1884 16.1221 15.5005 16.1221C12.8126 16.1221 10.5642 18.0036 10.0005 20.5215Z"
        fill="white"
      />
    </svg>
  );
};

const ExpandIcon = () => {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M15.8334 7.08334L10.0001 12.9167L4.16675 7.08334"
        stroke="#130F26"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export { ProfileIcon, ExpandIcon };
