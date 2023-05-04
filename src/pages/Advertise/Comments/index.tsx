import { ICommentsResponse } from "../../../interfaces/comments";

export const Comments = () => {
  return (
    <li>
      <div className="userInfo">
        <p>SL</p>
        <h3>Samuel Leão</h3> <span> - há 1 dia</span>
      </div>
      <p className="commentBody">
        {}
      </p>
    </li>
  );
};
