import React from "react";
import { Menu } from "antd";

type CategoryFilterProps = {
  categories: string[];
  selectedCategory: string;
  onSelect: (category: string) => void;
};

const CategoryFilter: React.FC<CategoryFilterProps> = ({ categories, selectedCategory, onSelect }) => {
  const menuItems = categories.map((category) => ({
    key: category,
    label: category,
    onClick: () => onSelect(category),
  }));

  return <Menu mode="horizontal" selectedKeys={[selectedCategory]} items={menuItems} />;
};

export default CategoryFilter;
