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
            <p className="text-white">{dataItems.category}</p>
            <div>
              {dataItems.items.map((item, j) => (
                <div key={j}>{item}</div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FooterNavigation;
