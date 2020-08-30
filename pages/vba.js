import Media from "../components/media";
import { arrVBA } from "../data/shared";

const VBA = () => (
  <div className="container">
    <h3 className="my-3 header-text-color text-center text-uppercase">
      Visual Basic for Applications Tutorials
    </h3>
    <Media data={arrVBA} />
  </div>
);

export default VBA;
