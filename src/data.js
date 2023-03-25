import { AiOutlineFund, AiOutlineHome, AiOutlineMoneyCollect, AiOutlineBulb } from "react-icons/ai";

export const navLinks= [
    { id: 1, title: "Home", icon: <AiOutlineHome/>, link: "/" },
    { id: 2, title: "Cryptocurrencies", icon: <AiOutlineFund/>, link: "/cryptocurrencies" },
    { id: 3, title: "Exchanges", icon: <AiOutlineMoneyCollect/>, link: "/exchanges" },
    { id: 4, title: "News", icon: <AiOutlineBulb/>, link: "/news" }
];