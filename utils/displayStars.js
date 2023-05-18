import { Entypo } from "@expo/vector-icons";
export const displayStar = (number) => {
  const stars = [];

  for (let i = 1; i <= 5; i++) {
    if (i <= number) {
      stars.push(<Entypo name="star" size={24} color="#e0c811" key={i} />);
    } else {
      stars.push(<Entypo name="star" size={24} color="#c9c9c7" key={i} />);
    }
  }
  return stars;
};
