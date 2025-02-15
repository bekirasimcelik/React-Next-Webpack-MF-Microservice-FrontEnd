import React from "react";
import { Menu } from "antd";

type CategoryFilterProps = {
  categories: string[];
  selectedCategory: string;
  onSelect: (category: string) => void;
};

const CategoryFilter: React.FC<CategoryFilterProps> = ({ categories, selectedCategory, onSelect }) => {
  return (
    <Menu mode="horizontal" selectedKeys={[selectedCategory]}>
      {categories.map((category) => (
        <Menu.Item key={category} onClick={() => onSelect(category)}>
          {category}
        </Menu.Item>
      ))}
    </Menu>
  );
};

export default CategoryFilter;
