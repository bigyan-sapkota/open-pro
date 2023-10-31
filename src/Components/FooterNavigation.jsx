import React from "react";

const data = [
  {
    category: "Products",
    items: ["Web Studio", "DynamicBox Flex", "Programming Forms"],
  },
  {
    category: "Resources",
    items: ["Nostrud exercitation", "Visual mockups"],
  },
  {
    category: "Company",
    items: [
      "Consectetur adipiscing",
      "Labore et dolore",
      "Consectetur adipiscing",
      "Labore et dolore",
      "Consectetur adipiscing",
      "Labore et dolore",
    ],
  },
];

const FooterNavigation = () => {
  return (
    <div>
      <div>
        {data.map((dataItems, i) => (
          <div key={i}>
            <p className="text-gray-200 text-base">{dataItems.category}</p>
            <div className="flex flex-col md:flex-row mb-6">
              {dataItems.items.map((item, j) => (
                <div
                  key={j}
                  className="text-[15px] text-gray-400 cursor-pointer hover:text-gray-200 mb-0.5"
                >
                  {item}
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FooterNavigation;
