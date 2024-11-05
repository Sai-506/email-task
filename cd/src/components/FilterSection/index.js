import React from 'react';
import './index.css';

const FilterSection = ({ setFilter, filter}) => {
  return (
    <div className="filter-con">
      <button className = {filter === "All" ? "active-btn" : "btn-el"} onClick={() => setFilter("All")}>All</button>
      <button className = {filter === "Unread" ? `active-btn` : `btn-el`} onClick={() => setFilter("Unread")}>Unread</button>
      <button className = {filter === "To me" ? "active-btn" : "btn-el"} onClick={() => setFilter("To me")}>To me</button>
      <button className = {filter === "Flagged" ? "active-btn" : "btn-el"} onClick={() => setFilter("Flagged")}>Flagged</button>
    </div>
  );
};

export default FilterSection;