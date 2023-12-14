import { useEffect, useState } from "react";

export const SortButton = ({ articles, setArticles }) => {
  const [currentSort, setCurrentSort] = useState("created_at");
const [isOrderAsc, setIsOrderAsc] = useState("asc");
const [currentArticles, setCurrentArticles] = useState(articles);

useEffect(() => {
  console.log(isOrderAsc, currentSort);
  let sortedArticles;

  if (currentSort === "created_at") {
    sortedArticles = [...currentArticles].sort((a, b) =>
      isOrderAsc === 'asc'
        ? new Date(b[currentSort]) - new Date(a[currentSort])
        : new Date(a[currentSort]) - new Date(b[currentSort])
    );
  } else {
    sortedArticles = [...currentArticles].sort((a, b) =>
      isOrderAsc === "asc" ? b[currentSort] - a[currentSort] : a[currentSort] - b[currentSort]
    );
  }

  setArticles(sortedArticles);
}, [currentSort, isOrderAsc, currentArticles]);

const handleSort = (e) => {
  setCurrentSort(e.target.id);
};

const handleOrder = (e) => {
  setIsOrderAsc(e.target.id);
};

  // const handleSort = (e) => {
  //   const sortBy =
  //     e.target.classList[0] === "order" ? currentSort : e.target.id;
  //   setCurrentSort(sortBy);
  //   if (sortBy === "created_at") {
  //     setArticles(
  //       [...articles].sort((a, b) => {
  //         return isOrderAsc
  //           ? new Date(b[sortBy]) - new Date(a[sortBy])
  //           : new Date(a[sortBy]) - new Date(b[sortBy]);
  //       })
  //     );
  //   } else {
  //     setArticles(
  //       [...articles].sort((a, b) => {
  //         return isOrderAsc ? b[sortBy] - a[sortBy] : a[sortBy] - b[sortBy];
  //       })
  //     );
  //   }
  // };

  return (
    <div className="sort-button-container">
      <button className="button sort-button">
        {currentSort} : {isOrderAsc}
      </button>
      <ul className="drop-down-list">
        <li onClick={handleSort} id="created_at">
          Date
        </li>
        <li onClick={handleSort} id="comment_count">
          Comment Count
        </li>
        <li onClick={handleSort} id="votes">
          Votes
        </li>
        <li className={isOrderAsc === "asc" ? "asc-sort" : null} onClick={handleOrder} id="asc">
          Ascending
        </li>
        <li className={isOrderAsc !== "asc" ? "desc-sort" : null} onClick={handleOrder} id="desc">
          Descending
        </li>
      </ul>
    </div>
  );
};
