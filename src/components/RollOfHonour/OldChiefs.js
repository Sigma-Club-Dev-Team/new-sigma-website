import Template1 from "./TableTemplate1";

const RollOfHonour = () => {
  const OldChiefsOBJ = [
    {
      id: 1,
      name: "Loyalist Azeez Adewale",
      year: "1999",
    },
    {
      id: 2,
      name: "Loyalist Babatola Benjamin",
      year: "1999",
    },
    {
      id: 3,
      name: "Loyalist Eniola Moses",
      year: "1999",
    },
    {
      id: 4,
      name: "Loyalist Ogbonna",
      year: "1999 ",
    },
    {
      id: 5,
      name: "Loyalist Fijabi Oluwatobi",
      year: "1999",
    },
    {
      id: 6,
      name: "Loyalist Onifari Emmanuel",
      year: "1999",
    },
    {
      id: 7,
      name: "Loyalist Olugbenro Fredrick",
      year: "1999",
    },
    {
      id: 8,
      name: "Loyalist Akparanta Simeon",
      year: "1999",
    },
  ];

  return (
    <div>
      <Template1 data={OldChiefsOBJ} />
    </div>
  );
};
export default RollOfHonour;
