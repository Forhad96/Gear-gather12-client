import {useQuery} from '@tanstack/react-query'
import useAxiosPublic from '../../../hooks/axiosPublicApi/useAxiosPublic';
import useGetSecure from '../../../hooks/axiosSecureApi/useGetSecure';
import useAxiosSecure from '../../../hooks/axiosSecureApi/useAxiosSecure';
const AllUsers = () => {
  // const axiosPublic = useAxiosPublic()
//   const axiosSecure = useAxiosSecure()
// const {data} = useQuery({
//   queryKey:['users'],
//   queryFn: async () =>{
//     const res = await axiosSecure.get('/users')
//     return res.data
//   }

// })
// console.log(data);
const {data} = useGetSecure('/users','users')
console.log(data);

// console.log(data);

    // const 
    return (
      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th>#</th>
              <th>Name</th>
              <th>Email</th>
              <th>Role</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {

            }
            <tr>
              <th>1</th>
              <td>Cy Ganderton</td>
              <td>Quality Control Specialist</td>
              <td>Blue</td>
            </tr>
            
          </tbody>
        </table>
      </div>
    );
};
export default AllUsers;