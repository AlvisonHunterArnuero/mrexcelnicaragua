import Card from "../components/card";
import { motion } from "framer-motion";
import { cardInfo } from "../data/shared";

const Index = () => (
  <div className="container h-100">
    <div className="row h-100 justify-content-center align-items-center">
      <div className="d-flex justify-content-center vertical-center">
        <motion.div
          className="square"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 1.3 }}
        >
          <Card cardInfo={cardInfo} />
        </motion.div>
      </div>
    </div>
  </div>
);

export default Index;
