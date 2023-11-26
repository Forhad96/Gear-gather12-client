import TagInput from "../AddProduct/TagInput";

const ManageProducts = () => {
const handleSubmit = (e) => {
  e.preventDefault();
  // Your form submission logic here
};
    return (
      <form onSubmit={handleSubmit}>
        <div>{/* Other form inputs */}</div>
        <div>
          <TagInput />
        </div>
        <button type="submit">Submit</button>
      </form>
    );
};
export default ManageProducts;