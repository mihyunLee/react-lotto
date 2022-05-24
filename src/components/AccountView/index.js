import { UserCash } from "../UserCash";
import { Price } from "../Price";
import { Link } from "react-router-dom";

import "./style.css";

export const AccountView = () => {
  return (
    <div className="AccountView">
      <UserCash />
      <Price />
      <Link to="/result"><button>구매하기</button></Link>
    </div>
  );
};
