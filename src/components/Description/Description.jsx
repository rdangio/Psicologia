export function Description({ children, className = "" }) {
  return (
    <h3
      className={`${className} pb-2 font-roboto text-fs-h8 text-c-turquoise-5 
      sm:w-min-[20rem] sm:text-fs-h8 
      md:w-min-[25rem] md:text-fs-h7 
      lg:w-min-[35rem] lg:text-fs-h6 
      xl:w-min-[40rem] xl:text-fs-h4`}
    >
      {children}
    </h3>
  );
}
