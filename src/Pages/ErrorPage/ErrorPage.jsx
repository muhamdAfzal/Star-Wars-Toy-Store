import errorImage from "../../assets/404/funny-404-page.png";

const ErrorPage = () => {
  return (
    <div className="flex justify-center items-center h-screen">
      <img src={errorImage} alt="" />
    </div>
  );
};

export default ErrorPage;
