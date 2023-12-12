import { useNavigate } from "react-router";

export const BackButton = () => {
  const navigate = useNavigate();

  const previousPage = () => {
    navigate(-1);
  };

  return (
    <div className="back-arrow">
      <img src="../../images/back-arrow.png" onClick={previousPage} />
    </div>
  );
};
