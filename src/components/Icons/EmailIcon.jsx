const EmailIcon = () => (
  <div>
    <a className="flex items-center justify-center rounded-lg border border-c-turquoise-1 p-1 transition-all duration-500 hover:border-c-turquoise-4 hover:bg-c-turquoise-4">
      <svg
        className="h-6 w-6 sm:h-4 sm:w-4"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 72 72"
        fill="none"
      >
        <path
          d="M11.9362 56.1235H20.4189V35.5227L8.30078 26.434V52.4881C8.30078 54.4997 9.93067 56.1235 11.9362 56.1235Z"
          fill="white"
        />
        <path
          d="M49.5025 56.1235H57.9853C59.9969 56.1235 61.6207 54.4936 61.6207 52.4881V26.434L49.5025 35.5227"
          fill="white"
        />
        <path
          d="M49.5025 19.7693V35.5227L61.6207 26.434V21.587C61.6207 17.0912 56.4887 14.5282 52.8956 17.2245"
          fill="white"
        />
        <path
          d="M20.4189 35.5227V19.769L34.9607 30.6754L49.5025 19.7693V35.5227L34.9607 46.429"
          fill="white"
        />
        <path
          d="M8.30078 21.587V26.434L20.4189 35.5227V19.769L17.0259 17.2245C13.4268 14.5282 8.30078 17.0912 8.30078 21.587Z"
          fill="white"
        />
      </svg>
    </a>
  </div>
);

export default EmailIcon;
