import Button from "../Elements/Button";

const HomeDesc = () => {
  return (
    <div className="flex flex-col justify-center text-white basis-2/4">
      <h1 className="text-2xl my-4 font-semibold">I am Nanang Sopandi</h1>
      <h1 className="text-6xl  font-semibold bg-gradient-to-r from-indigo-500 via-purple-500 to-white text-transparent bg-clip-text">
        Frontend Develover
      </h1>
      <p className="py-4 font-extralight text-sm">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident et,
        similique autem eius ducimus aut vitae vel quaerat maiores illo possimus
        labore, illum quidem delectus debitis voluptatibus. Commodi soluta et
        sed non numquam, aperiam vel voluptate fugiat tempora at eius alias
        veritatis quaerat, consequatur placeat illo mollitia accusamus. Et,
        inventore.
      </p>
      <div className="text-fuchsia-600">
        <Button classname="border border-fuchsia-600 p-2 rounded-full text-sm px-4 mr-4 hover:bg-fuchsia-600 hover:text-white">
          Download CV
        </Button>
        <a
          href=""
          className="border border-fuchsia-600 p-1 px-2 rounded-full text-sm mr-4 hover:bg-fuchsia-600 hover:text-white"
        >
          <i className="bx bxl-instagram-alt"></i>
        </a>
        <a
          href=""
          className="border border-fuchsia-600 p-1 px-2 rounded-full text-sm mr-4 hover:bg-fuchsia-600 hover:text-white"
        >
          <i className="bx bxl-github"></i>
        </a>
        <a
          href=""
          className="border border-fuchsia-600 p-1 px-2 rounded-full text-sm mr-4 hover:bg-fuchsia-600 hover:text-white"
        >
          <i className="bx bxl-linkedin"></i>
        </a>
      </div>
    </div>
  );
};

export default HomeDesc;
