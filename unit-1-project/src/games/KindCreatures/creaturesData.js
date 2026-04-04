//import all creature images
import unicornMirror from "../../assets/images/creatures/unicorn-mirror.png";
import dragonMirror from "../../assets/images/creatures/dragon-mirror.png";
import llamaMirror from "../../assets/images/creatures/llama-mirror.png";
import peacockMirror from "../../assets/images/creatures/peacock-mirror.png";
import phoenixMirror from "../../assets/images/creatures/phoenix-mirror.png";

//array of data for kind creatures game
export const creaturesArray = [
  {
    id: 1,
    creature: "Unicorn",
    name: "Yardly",
    image: unicornMirror,
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
    image: dragonMirror,
    options: ["I am enough!", "I am a good friend!", "I am amazing!"],
  },
  {
    id: 3,
    creature: "Llama",
    name: "Larry",
    image: llamaMirror,
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
    image: peacockMirror,
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
    image: phoenixMirror,
    options: ["I am loved!", "I am capable of so much!", "I am happy!"],
  },
];
