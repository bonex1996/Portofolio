const DataSevices = [
  {
    id: 1,
    title: "Web Development",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores corrupti fugiat cupiditate iste laboriosam ipsam illum similique nemo perferendis eligendi.",
  },
  {
    id: 2,
    title: "App Development",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores corrupti fugiat cupiditate iste laboriosam ipsam illum similique nemo perferendis eligendi.",
  },
  {
    id: 3,
    title: "Software Development",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores corrupti fugiat cupiditate iste laboriosam ipsam illum similique nemo perferendis eligendi.",
  },
  {
    id: 4,
    title: "Mobile Development",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores corrupti fugiat cupiditate iste laboriosam ipsam illum similique nemo perferendis eligendi.",
  },
];

const QualityLayout = () => {
  return (
    <div
      className="flex flex-col items-center h-screen py-6 bg-slate-900 text-white"
      id="service"
    >
      <h1 className="text-4xl font-bold text-center py-4 bg-gradient-to-r from-indigo-500 via-purple-500 to-white text-transparent bg-clip-text">
        My Quality Services
      </h1>
      <p className="text-center text-sm font-extralight w-2/4 mb-10">
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Fugiat ratione
        aut exercitationem molestias id ut quasi, quaerat possimus vel. In
        corporis obcaecati saepe ipsum delectus ut neque, recusandae iusto
        laboriosam?
      </p>
      <div>
        {DataSevices.map((item) => (
          <div
            key={item.id}
            className="flex mx-14 p-6 items-center bg-gradient-to-r hover:from-indigo-500 cursor-pointer  "
          >
            <div className="flex gap-3 items-center basis-3/6">
              <h1 className="font-semibold">{item.id}</h1>
              <h1 className="font-bold text-2xl">{item.title}</h1>
            </div>
            <p className="text-sm">{item.desc}</p>
            <i className="bx bx-arrow-to-right text-3xl ml-24"></i>
          </div>
        ))}
      </div>
    </div>
  );
};

export default QualityLayout;
