import { HomeData } from "@next/scripts/home";
import profilePicture from "@next/public/assets/img/profile-picture-two.jpg";

const data = {
  title: " Hello I am",
  fullName: "Guy Tchoupo",
  position: "Frontend Developer",
  imgUrl: profilePicture,
};

export const homeData = new HomeData(data);
