import { UserCash } from "../UserCash";
import { Price } from "../Price";

import "./style.css";

export const AccountView = () => {
  return (
    <div className="AccountView">
      <UserCash />
      <Price />
      <button>구매하기</button>
    </div>
  );
};
