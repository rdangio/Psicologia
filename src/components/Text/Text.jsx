export function Text({ children, className = "" }) {
  return (
    <h3
      className={`${className} sm:w-min-[20rem] md:w-min-[25rem] lg:w-min-[35rem] xl:w-min-[60rem] pb-2 
      font-roboto text-fs-h8 text-c-turquoise-5 sm:text-fs-h8 md:text-fs-h7 lg:text-fs-h7 xl:text-fs-h5`}
    >
      {children}
    </h3>
  );
}
