import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Search.css";

const Search = () => {
  return (
    <div className="container">
      <div className="Search">
        <div class="input-group pt-2 pb-2 pl-3 pr-3">
          <input
            class="form-control border border-1 rounded-pill"
            type="text"
            placeholder="Search"
          />
          <span class="input-group-append">
            <button class="btn btn-outline-secondary border-0" type="button">
              <i class="fa fa-search text-muted"></i>
            </button>
          </span>
        </div>
      </div>
    </div>
  );
};

export default Search;
