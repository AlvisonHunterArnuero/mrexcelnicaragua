import Media from "../components/media";
import { arrFormula } from "../data/shared";

const Formulas = () => (
  <div className="container">
    <h3 className="my-3 header-text-color text-center text-uppercase">
      MS Excel Formulas Tutorials
    </h3>
    <Media data={arrFormula} />
  </div>
);

export default Formulas;
