import ActuationExplain from "../../components/ActuationExplain/ActuationExplain";
import Nav from "../../components/Nav/Nav";
import PropTypes from "prop-types";

const AreasDeAtuacao = ({ numero }) => {
  return (
    <>
      <Nav />
      <ActuationExplain area={numero} />
    </>
  );
};

AreasDeAtuacao.propTypes = {
  numero: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
};

export default AreasDeAtuacao;
