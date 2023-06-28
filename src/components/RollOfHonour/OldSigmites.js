import Template2 from "./TableTemplate2";

const RollOfHonour = () => {
  const OldSigmitesOBJ = [
    {
      id: 1,
      name: "Old Sigmites",
      year: "1999",
    },
    {
      id: 2,
      name: "Old Sigmites",
      year: "1999",
    },
    {
      id: 3,
      name: "Old Sigmites",
      year: "1999",
    },
    {
      id: 4,
      name: "Old Sigmites",
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
      <Template2 data={OldSigmitesOBJ} />
    </div>
  );
};
export default RollOfHonour;
