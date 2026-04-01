//import all creature images
import unicornHappy from "../../assets/images/creatures/unicorn-happy.png";
import dragonHappy from "../../assets/images/creatures/dragon-happy.png";
import llamaHappy from "../../assets/images/creatures/llama-happy.png";
import peacockHappy from "../../assets/images/creatures/peacock-happy.png";
import phoenixExcited from "../../assets/images/creatures/phoenix-excited.png";

//array of data for kind creatures game
export const creaturesArray = [
  {
    id: 1,
    creature: "Unicorn",
    name: "Yardly",
    image: unicornHappy,
    options: [
      "I love my body!",
      "I am kind!",
      "My mistakes help me learn and grow!",
    ],
  },
  {
    id: 2,
    creature: "Dragon",
    name: "Danny",
    image: dragonHappy,
    options: ["I am enough!", "I am a good friend!", "I am amazing!"],
  },
  {
    id: 3,
    creature: "Llama",
    name: "Larry",
    image: llamaHappy,
    options: [
      "I am good!",
      "I am brave!",
      "Today is going to be an amaing day!",
    ],
  },
  {
    id: 4,
    creature: "Peacock",
    name: "Perry",
    image: peacockHappy,
    options: [
      "I am beautiful!",
      "I can do hard things!",
      "I believe in myself!",
    ],
  },
  {
    id: 5,
    creature: "Phoenix",
    name: "Finnleigh",
    image: phoenixExcited,
    options: ["I am loved!", "I am capable of so much!", "I am happy!"],
  },
];
