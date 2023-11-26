// TagInput.js

import { useState } from "react";

const TagInput = ({tags, setTags}) => {
//   const [tags, setTags] = useState([]);
  const [inputValue, setInputValue] = useState("");

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  console.log(tags);
  const handleInputKeyDown = (e) => {
    if (e.key === "Enter" && inputValue.trim() !== "") {
      setTags([...tags, inputValue.trim()]);
      setInputValue("");
    }
  };

  const handleTagRemove = (tagToRemove) => {
    setTags(tags.filter((tag) => tag !== tagToRemove));
  };

  return (
    <div className="flex flex-wrap items-center gap-2">
      {tags.map((tag) => (
        <div
          key={tag}
          className="bg-blue-500 text-white rounded px-2 py-1 flex items-center"
        >
          <span className="mr-1">{tag}</span>
          <button
            className="ml-1 focus:outline-none"
            onClick={() => handleTagRemove(tag)}
          >
            &#10005;
          </button>
        </div>
      ))}
      <input
        type="text"
        value={inputValue}
        onChange={handleInputChange}
        onKeyDown={handleInputKeyDown}
        placeholder="Add a tag..."
        className="border border-gray-300 rounded px-2 py-1"
      />
    </div>
  );
};

export default TagInput;
