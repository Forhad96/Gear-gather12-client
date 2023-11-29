import useAxiosSecure from "../../hooks/axiosSecureApi/useAxiosSecure";
import useAuth from "../../hooks/useAuth";
import toast from 'react-hot-toast'
const Report = ({productId}) => {
  
    const axiosSecure = useAxiosSecure()
    const {user} = useAuth()
    const handelReport = async(e)=>{
        e.preventDefault()
      const form = new FormData(e.currentTarget);
        const subject = form.get('subject')
        const message = form.get('message')

        const newReport = {
            productId,
            email:user?.email,
            subject,
            message
        }

        try {
            const res = await axiosSecure.post('/report',newReport)
            console.log(res);
            if(res.data.success){
                toast.success('report sent successful')
                
                e.target.reset()
            }
        } catch (error) {
            console.log(error);
            
        }
    }
    return (
      <form onClick={handelReport} className="card-body">
        <div className="form-control">
          <label className="label">
            <span className="label-text">Subject</span>
          </label>
          <input
            type="text"
            name="subject"
            placeholder="write your subject"
            className="input input-primary input-bordered"
            required
          />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Your message</span>
          </label>
          <textarea
            className="textarea textarea-primary"
            name="message"
            placeholder="message"
          ></textarea>
        </div>
        <div className="form-control mt-6">
          <button type="submit" className="btn btn-primary">submit</button>
        </div>
      </form>
    );
};
import PropTypes from 'prop-types';

Report.propTypes = {
  productId: PropTypes.string,
};
export default Report;



{/* <div className="sm:w-[38rem] mx-auto my-10 overflow-hidden rounded-2xl bg-white shadow-lg sm:max-w-lg">
  <div className="bg-blue-800 px-10 py-10 text-center text-white">
    <p className="font-serif text-2xl font-semibold tracking-wider">
      Submit your request
    </p>
    <p className="text-center text-blue-100">
      Please keep it short and succinct
    </p>
  </div>
  <div className="space-y-4 px-8 py-10">
    <label className="block" htmlFor="name">
      <p className="text-gray-600">Name</p>
      <input
        className="w-full rounded-md border bg-white px-2 py-2 outline-none ring-blue-600 focus:ring-1"
        type="text"
        placeholder="Enter your name"
      />
    </label>
    <label className="block" htmlFor="name">
      <p className="text-gray-600">Email Address</p>
      <input
        className="w-full rounded-md border bg-white px-2 py-2 outline-none ring-blue-600 focus:ring-1"
        type="email"
        placeholder="Enter your email"
      />
    </label>
    <label className="block" htmlFor="name">
      <p className="text-gray-600">Request</p>
      <textarea
        className="h-32 w-full rounded-md border bg-white px-2 py-2 outline-none ring-blue-600 focus:ring-1"
        type="text"
        placeholder="Lorem ipsum dolor sit amet consectetur adipisicing elit."
        defaultValue={""}
      />
    </label>
    <button className="mt-4 rounded-full bg-blue-800 px-10 py-2 font-semibold text-white">
      Submit
    </button>
  </div>
</div>; */}
