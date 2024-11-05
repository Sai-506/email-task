import React from 'react';
import './index.css';

function Sidebar() {
  return (
    <div className="sidebar">
      <h2>Office Mail</h2>
      <ul>
        <li>Inbox</li>
        <li>Sent Items</li>
        <li>Drafts</li>
        <li>Deleted Items</li>
      </ul>
    </div>
  );
}

export default Sidebar;