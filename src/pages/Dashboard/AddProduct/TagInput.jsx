

import { useState } from "react";
import { TagsInput } from "react-tag-input-component";

const TagInput = ({tags,setTags}) => {
//   const [tags, setTags] = useState(["papaya"]);

  return (
    <div>
      {/* <h1>Add Fruits</h1> */}
      <pre>{JSON.stringify(tags)}</pre>
      <TagsInput
        value={tags}
        onChange={setTags}
        name="tags"
        placeHolder="enter tags"
      />
      <em>press enter or comma to add new tag</em>
    </div>
  );
};

export default TagInput;
