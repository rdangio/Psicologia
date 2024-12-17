const LocationIcon = () => (
  <div>
    <a
      href="javascript:;"
      className="flex items-center justify-center rounded-lg border border-gray-300 p-2 transition-all duration-500 hover:border-gray-100 hover:bg-gray-100"
    >
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M6.81207 6.05324C9.53921 2.87158 14.4614 2.87158 17.1885 6.05324C19.382 8.61225 19.382 12.3884 17.1885 14.9474L13.0785 19.7424C12.7864 20.0831 12.6404 20.2535 12.4797 20.3413C12.1809 20.5045 11.8197 20.5045 11.5209 20.3413C11.3602 20.2535 11.2142 20.0831 10.9221 19.7424L6.81207 14.9474C4.61863 12.3884 4.61863 8.61225 6.81207 6.05324Z"
          stroke="black"
          strokeWidth="null"
          className="my-path"
        ></path>
        <path
          d="M14 10C14 11.1046 13.1046 12 12 12C10.8954 12 10 11.1046 10 10C10 8.89543 10.8954 8 12 8C13.1046 8 14 8.89543 14 10Z"
          stroke="black"
          strokeWidth="null"
          className="my-path"
        ></path>
      </svg>
    </a>
  </div>
);

export default LocationIcon;
