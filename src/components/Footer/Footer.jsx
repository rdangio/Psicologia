import Form from "../Form";

const Footer = () => {
  //Const para atualizar o ano junto ao rodapé
  const Year = new Date().getFullYear();

  return (
    <footer className="bg-c-footer">
      <Form />
      <div>
        <h6 className="text-center font-bold text-c-text2">
          &copy; {Year} RD Dev&Design
        </h6>
      </div>
    </footer>
  );
};

export default Footer;
