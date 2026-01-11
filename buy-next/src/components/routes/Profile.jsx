import { getUser } from "../../utils/auth";
import SignIn from "../Profile/SignIn";

const Profile = () => {
  const user = getUser();

  if (!user) {
    return <SignIn />;
  }

  return (
    <div className="container py-5">
      <h2>My Profile</h2>

      <p><strong>Name:</strong> {user.name}</p>
      <p><strong>Email:</strong> {user.email}</p>
      <p><strong>Joined:</strong> {user.joined}</p>

      <hr />

      <h4>Previous Orders</h4>
      {user.orders.length === 0 ? (
        <p>No orders yet</p>
      ) : (
        <ul>
          {user.orders.map(order => (
            <li key={order.id}>{order.item}</li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Profile;

//   return (
//     <div className="container py-5">
//       <h2>My Profile</h2>

//       <p><strong>Name:</strong> {user.name}</p>
//       <p><strong>Email:</strong> {user.email}</p>
//       <p><strong>Joined:</strong> {user.joined}</p>

//       <hr />

//       <h4>Previous Orders</h4>
//       {user.orders.length === 0 ? (
//         <p>No orders yet</p>
//       ) : (
//         <ul>
//           {user.orders.map(order => (
//             <li key={order.id}>{order.item}</li>
//           ))}
//         </ul>
//       )}

//       <button
//         className="btn btn-danger mt-4"
//         onClick={() => {
//           logout();
//           navigate("/");
//         }}
//       >
//         Logout
//       </button>
//     </div>
//   );
// };

// export default Profile;
