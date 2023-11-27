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
export default Report;