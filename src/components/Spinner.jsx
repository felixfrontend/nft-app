import { RotatingSquare } from "react-loader-spinner";

const Spinner = () => {
  return (
    <div
      style={{
        position: "absolute",
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)",
      }}
    >
      <RotatingSquare
        height="200"
        width="200"
        color="#2563EB"
        ariaLabel="rotating-square-loading"
        strokeWidth="4"
        wrapperClass=""
        visible={true}
      />
    </div>
  );
};

export default Spinner;
