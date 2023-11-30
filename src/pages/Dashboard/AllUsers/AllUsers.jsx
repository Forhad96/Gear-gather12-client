import {useQuery} from '@tanstack/react-query'
import useAxiosPublic from '../../../hooks/axiosPublicApi/useAxiosPublic';
import useGetSecure from '../../../hooks/axiosSecureApi/useGetSecure';
import useAxiosSecure from '../../../hooks/axiosSecureApi/useAxiosSecure';
import toast from 'react-hot-toast'
const AllUsers = () => {
const axiosSecure = useAxiosSecure()
const {data:users,refetch} = useGetSecure('/users','manageUsers') //this hook get data endpoints,query key



    const handleRoleUpdate = async (id,role)=>{
      console.log(id,role);
      try {
        const res = await axiosSecure.put(`/users/${id}`,{"role":role})
        if(res.data.result.modifiedCount > 0){
          toast.success('User role update successful')
          refetch()
        }
        console.log(res);
      } catch (error) {
        console.log(error);
        
      }
    }
    return (
      <div className="overflow-x-auto h-[80vh]">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th>#</th>
              <th>Name</th>
              <th>Email</th>
              <th>Role</th>
              <th className="text-center">Action</th>
            </tr>
          </thead>
          <tbody>
            {users?.map((user, idx) => (
              <tr key={user._id}>
                <th>{idx + 1}</th>
                <td>{user?.name}</td>
                <td>{user?.email}</td>
                <td>{user?.role}</td>
                <td className="text-center">
                  <button
                    onClick={() => handleRoleUpdate(user._id, "admin")}
                    className="btn btn-sm btn-primary text-white"
                  >
                    Make Admin
                  </button>
                  <button
                    onClick={() => handleRoleUpdate(user._id, "moderator")}
                    className="btn btn-sm btn-primary text-white ml-2"
                  >
                    Make Moderator
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
};
export default AllUsers;