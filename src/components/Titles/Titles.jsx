export function Title({ children, className = "" }) {
  return (
    <h2 className={`${className} pb-3 text-center font-roboto text-fs-h6 text-c-turquoise-6 sm:text-fs-h5 md:text-fs-h4 lg:text-fs-h3 xl:text-fs-h2 `}>
      {children}
    </h2>
  );
}
