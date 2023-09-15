import { HiOutlineComputerDesktop } from "react-icons/hi2";
import {
  IoManOutline,
  IoWomanOutline,
  IoDiamondOutline,
} from "react-icons/io5";

export const links = [
  {
    category: "Electronics",
    to: "/goodspage/electronics",
    icon: <HiOutlineComputerDesktop />,
  },
  {
    category: `Women's clothing`,
    to: "/goodspage/women's clothing",
    icon: <IoWomanOutline />,
  },
  {
    category: `Men's clothing`,
    to: "/goodspage/men's clothing",
    icon: <IoManOutline />,
  },
  {
    category: "Jewelery",
    to: "/goodspage/jewelery",
    icon: <IoDiamondOutline />
  },
];
