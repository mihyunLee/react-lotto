import { UserCash } from "../UserCash";
import { Price } from "../Price";

export const AccountView = () => {
  return (
    <div>
      <UserCash />
      <Price />
      <button>구매하기</button>
    </div>
  );
};
