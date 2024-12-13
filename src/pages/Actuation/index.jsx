import ActuationExplain from "../../components/ActuationExplain/ActuationExplain";
import Nav from "../../components/Nav/Nav";

const AreasDeAtuacao = ({numero}) => {
  return (
    <>
      <Nav />
      <ActuationExplain area={numero} />
    </>
  );
};

export default AreasDeAtuacao;
