const Report = () => {
    const handelReport = async(e)=>{
        e.preventDefault()
      const form = new FormData(e.currentTarget);
        const subject = form.get('subject')
        const message = form.get('message')
        console.log('click',subject,message);
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