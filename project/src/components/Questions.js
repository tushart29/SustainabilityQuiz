const questions = [
  { //1
    text: "How often do you use reusable bags?",
    description: "Plastic materials ___(non renewable, toxic chemicals, etc)___",
    options: [
      { id: 0, text: "Never", points: 0 },
      { id: 1, text: "Once in a while", points: 1 },
      { id: 2, text: "A few times a week", points: 2 },
      { id: 3, text: "Pretty much every day", points: 3 }, //most eco-friendly
    ],
  },
  { //2
    text: "How often do you drink from plastic bottles?",
    description: "Plastic materials ___(non renewable, toxic chemicals, etc)___",
    options: [
      { id: 0, text: "Never", points: 3 }, //most eco-friendly
      { id: 1, text: "Once in a while", points: 2 },
      { id: 2, text: "A few times a week", points: 1 },
      { id: 3, text: "Pretty much every day", points: 0 },
    ],
  },
  { //3
    text: "How often do you revert to using public transportation, walking, or biking?",
    description: "Fossil fuels",
    options: [
      { id: 0, text: "Never", points: 0 },
      { id: 1, text: "Once in a while", points: 1 },
      { id: 2, text: "A few times a week", points: 2 },
      { id: 3, text: "Pretty much every day", points: 3 }, //most eco-friendly
    ],
  },
  { //4
    text: "How often to you eat meat?",
    description: "",
    options: [
      { id: 0, text: "Never", points: 3 }, //most eco-friendly
      { id: 1, text: "Once in a while", points: 2 },
      { id: 2, text: "A few times a week", points: 1 },
      { id: 3, text: "Pretty much every day", points: 0 },
    ],
  },
  { //5
    text: "Do you leave lights or other electronics turned on when not in use?",
    description: "",
    options: [
      { id: 0, text: "Never", points: 3 }, //most eco-friendly
      { id: 1, text: "Once in a while", points: 2 },
      { id: 2, text: "Sometimes", points: 1 },
      { id: 3, text: "Pretty much every meal", points: 0 },
    ],
  },
  { //6
    text: "Do you leave the sink or shower running when not in use?",
    description: "",
    options: [
      { id: 0, text: "Never", points: 3 }, //most eco-friendly
      { id: 1, text: "Once in a while", points: 2 },
      { id: 2, text: "A few times a week", points: 1 },
      { id: 3, text: "Pretty much every day", points: 0 },
    ],
  },
  { //7
    text: "How often do use use excess paper, like paper towels or print paper?",
    description: "",
    options: [
      { id: 0, text: "I only use what is needed", points: 3 }, //most eco-friendly
      { id: 1, text: "Once in a while", points: 2 },
      { id: 2, text: "A few times a week", points: 1 },
      { id: 3, text: "Pretty much every day", points: 0 },
    ],
  },
  { //8
    text: "How are your recycling habits?",
    description: "",
    options: [
      { id: 0, text: "I throw everything into the trash or don't have access to a recycle bin.", points: 0 },
      { id: 1, text: "I recycle once in a while.", points: 1 },
      { id: 2, text: "I throw bottles into the recycle.", points: 2 },
      { id: 3, text: "I throw all recyclables into the recycle.", points: 3 }, //most eco-friendly
    ],
  },
  // Format for questions if you wish to add more questions
  //{
  //  text: "",
  //  description: "",
  //  options: [
  //    { id: 0, text: "Never" },
  //    { id: 1, text: "Once in a while" },
  //    { id: 2, text: "A few times a week" },
  //    { id: 3, text: "Pretty much every day" },
  //  ],
  //},
];

export default questions;