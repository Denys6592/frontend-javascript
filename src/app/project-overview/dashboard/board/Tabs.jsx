import React, { useState } from "react";

const Tabs = ({ tabs, onTabChange }) => {
  const [activeTab, setActiveTab] = useState(tabs[0]?.id);

  const handleTabClick = (tabId) => {
    setActiveTab(tabId);
    if (onTabChange) {
      onTabChange(tabId);
    }
  };

  return (
    <div className="flex gap-4 border-b border-gray-400">
      {tabs.map((tab) => (
        <button
          key={tab.id}
          onClick={() => handleTabClick(tab.id)}
          className={`pt-1 pb-2 transition-colors ${
            activeTab === tab.id
              ? "border-b-2 border-black text-black text-xs font-medium"
              : "text-gray-500 text-xs font-medium"
          } hover:text-black`}>
          {tab.label}
        </button>
      ))}
    </div>
  );
};

export default Tabs;
