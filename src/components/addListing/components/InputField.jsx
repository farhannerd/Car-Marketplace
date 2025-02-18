import React from "react";
import { Input } from "@/components/ui/input";

const inputField = ({ item, handleInputChange }) => {
  return (
    <div>
      <Input
        type={item?.fieldType}
        name={item?.name}
        required={item?.required}
        onChange={(e) => handleInputChange(item.name, e.target.value)}
      />
    </div>
  );
};

export default inputField;
