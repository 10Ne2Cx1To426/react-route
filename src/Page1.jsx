import { Link, useHistory } from "react-router-dom";

export const Page1 = () => {
  const history = useHistory();
  const arr = [...Array(100).keys()];
  const onClickDetailA = () => history.push("/page1/detailA");
  return (
    <div>
      <h1>1ページです</h1>
      <Link to={{ pathname: "/page1/detailA", state: arr }}>detailA</Link>
      <br />
      <Link to="/page1/detailB">detailB</Link>
      <br />
      <button onClick={onClickDetailA}>DetailA</button>
    </div>
  );
};
