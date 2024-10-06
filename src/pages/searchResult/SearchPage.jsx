import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./style.scss";
import ContentWrapper from "../../components/contentWrapper/ContentWrapper";
import SearchIcon from "@mui/icons-material/Search";

const SearchPage = () => {
  const [Query, setQuery] = useState("");
  const navigate = useNavigate();

  const searchQueryHandler = () => {
    if (Query.length > 0) {
      navigate(`/search/${Query}`);
    }
  };

  const handleKeyUp = (event) => {
    if (event.key === "Enter" && Query.length > 0) {
      navigate(`/search/${Query}`);
    }
  };

  return (
    <div className="searchResultsPage">
      <ContentWrapper>
        <div className="searchInput">
          <input
            type="text"
            placeholder="Search for a movie or tv show...."
            onChange={(e) => setQuery(e.target.value)}
            onKeyUp={handleKeyUp}
          />
          <button onClick={searchQueryHandler}>
            <SearchIcon />
          </button>
        </div>
      </ContentWrapper>
    </div>
  );
};

export default SearchPage;
