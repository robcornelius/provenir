import { useContext } from "react";
import { RoboBobContext } from "../contexts/robobob.context";

const useRoboBobContext = () => {
  const context = useContext(RoboBobContext);
  if (context === undefined) {
    throw new Error("RoboBob Context is Undefined");
  }
  return context;
};
export default useRoboBobContext;
