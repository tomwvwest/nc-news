import { useEffect, useState } from "react";

export const SortButton = ({ articles, setArticles }) => {
  const [showSorts, setShowSorts] = useState(false);
  const [currentSort, setCurrentSort] = useState("created_at");
  const [isOrderAsc, setIsOrderAsc] = useState("asc");
  const [currentArticles, setCurrentArticles] = useState(articles);

  useEffect(() => {
    let sortedArticles;

    if (currentSort === "created_at") {
      sortedArticles = [...currentArticles].sort((a, b) =>
        isOrderAsc === "asc"
          ? new Date(b[currentSort]) - new Date(a[currentSort])
          : new Date(a[currentSort]) - new Date(b[currentSort])
      );
    } else {
      sortedArticles = [...currentArticles].sort((a, b) =>
        isOrderAsc === "asc"
          ? b[currentSort] - a[currentSort]
          : a[currentSort] - b[currentSort]
      );
    }

    setArticles(sortedArticles);
  }, [currentSort, isOrderAsc]);

  const handleSort = (e) => {
    setCurrentSort(e.target.id);
  };

  const handleOrder = (e) => {
    setIsOrderAsc(e.target.id);
  };
  const handleSortButtonPress = (e) => {
    setShowSorts(!showSorts);
    console.log(showSorts);
  };

  return (
    <div className="sort-button-container">
      <button className="button sort-button" onClick={handleSortButtonPress}>
        {currentSort === "comment_count"
          ? "Comment Count"
          : currentSort === "created_at"
          ? "Date"
          : "Votes"}{" "}
        : {isOrderAsc === "asc" ? "ASC" : "DESC"}
      </button>
      {showSorts ? (
        <ul className="drop-down-list">
          <li className="drop-down-list-title">Sort By:</li>
          <li
            onClick={handleSort}
            id="created_at"
            className={`${currentSort === "created_at" ? "selected-sort" : null} drop-down-list-item`}
          >
            Date {currentSort === "created_at" ? "*" : null}
          </li>
          <li
            onClick={handleSort}
            id="comment_count"
            className={`${currentSort === "comment_count" ? "selected-sort" : null} drop-down-list-item`}
          >
            Comment Count {currentSort === "comment_count" ? "*" : null}
          </li>
          <li
            onClick={handleSort}
            id="votes"
            className={`${currentSort === "votes" ? "selected-sort" : null} drop-down-list-item`}
          >
            Votes {currentSort === "votes" ? "*" : null}
          </li>
          <li className="drop-down-list-title drop-down-list-title-order">Order:</li>
          <li
            className={`${isOrderAsc === "asc" ? "asc-sort" : null} drop-down-list-item`}
            onClick={handleOrder}
            id="asc"
          >
            Ascending {isOrderAsc === "asc" ? "*" : null}
          </li>

          <li
            className={`${isOrderAsc !== "asc" ? "desc-sort" : null} drop-down-list-item`}
            onClick={handleOrder}
            id="desc"
          >
            Descending {isOrderAsc === "desc" ? "*" : null}
          </li>
        </ul>
      ) : null}
    </div>
  );
};
