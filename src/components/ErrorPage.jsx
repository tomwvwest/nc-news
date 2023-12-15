import { BackButton } from "./BackButton";

export const ErrorPage = () => {
  return (
    <div className="main-body error-main-body">
      <div className="back-button-div">
        <BackButton /> <p>Back</p>
      </div>
      <h1 className="isLoading">Error: unknown URL Path</h1>
    </div>
  );
};
