import Human from "../assets/sapiens/sapiens.svg";
import Heading from "../components/Heading";

const ComingSoon = () => {
  return (
    <>
      <div className="container relative flex justify-center items-center">
        <div>
          <img src={Human} height={750} width={700} alt="human" />
        </div>

        <Heading
          className="md:max-w-md lg:max-w-2xl absolute top-[80%]"
          title="We could work more on this!"
        />
      </div>
    </>
  );
};

export default ComingSoon;
