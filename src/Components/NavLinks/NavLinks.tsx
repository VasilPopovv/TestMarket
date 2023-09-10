import { HiOutlineComputerDesktop } from "react-icons/hi2";
import {
  IoManOutline,
  IoWomanOutline,
  IoDiamondOutline,
} from "react-icons/io5";

export const links = [
  {
    title: "Electronics",
    to: "/goodspage/electronics",
    icon: <HiOutlineComputerDesktop />,
  },
  {
    title: `Women's clothing`,
    to: "/goodspage/women's clothing",
    icon: <IoWomanOutline />,
  },
  {
    title: `Men's clothing`,
    to: "/goodspage/men's clothing",
    icon: <IoManOutline />,
  },
  {
    title: "Jewelery",
    to: "/goodspage/jewelery",
    icon: <IoDiamondOutline />
  },
];
