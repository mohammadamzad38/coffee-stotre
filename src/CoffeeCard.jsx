import { Link } from "react-router-dom";
import Swal from "sweetalert2";

export default function CoffeeCard({ coffee, coffees, setCoffees }) {
  const handleDelete = () => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`http://localhost:5000/coffee/${_id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            console.log(data);
            if (data.deletedCount > 0) {
              Swal.fire({
                title: "Deleted!",
                text: "Your file has been deleted.",
                icon: "success",
              });
              const remaining = coffees.filter((cof) => cof._id !== _id);
              setCoffees(remaining);
            }
          });
      }
    });
  };
  const {
    _id,
    coffeeName,
    quantaty,
    supplaier,
    taste,
    category,
    details,
    photo,
  } = coffee;
  return (
    <div className="flex flex-row gap-15 border bg-base-100 w-3xl shadow-sm">
      <div className="w-2/5">
        <img src={photo} alt="Shoes" />
      </div>
      <div className="flex flex-row justify-between m-10 w-full">
        <div className="font-thin text-xl">
          <h2 className="card-title">{coffeeName}</h2>
          <p>{details}</p>
          <p>{quantaty}</p>
          <p>{supplaier}</p>
          <p>{taste}</p>
          <p>{category}</p>
        </div>
        <div className="card-actions flex space-y-5 flex-col w-2/5">
          <button className="btn ">view</button>
          <Link>
            <Link to={`/updatecoffee/${_id}`}>
              <button className="btn ">edit</button>
            </Link>
          </Link>
          <button
            className="btn bg-orange-700"
            onClick={() => handleDelete(_id)}
          >
            X
          </button>
        </div>
      </div>
    </div>
  );
}
