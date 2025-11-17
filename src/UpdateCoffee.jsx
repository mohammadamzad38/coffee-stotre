import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";

export default function UpdateCoffee() {
  const cooffee = useLoaderData();
  const {
    _id,
    coffeeName,
    quantaty,
    supplaier,
    taste,
    category,
    details,
    photo,
  } = cooffee;

  const handleUpdateCoffee = (e) => {
    e.preventDefault();
    const form = e.target;
    const coffeeName = form.coffeeName.value;
    const quantaty = form.quantaty.value;
    const supplaier = form.supplaier.value;
    const taste = form.taste.value;
    const category = form.category.value;
    const details = form.details.value;
    const photo = form.photo.value;

    const updatedCoffee = {
      coffeeName,
      quantaty,
      supplaier,
      taste,
      category,
      details,
      photo,
    };

    console.log("data of coffee", updatedCoffee);

    fetch(`http://localhost:5000/coffee/${_id}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(updatedCoffee),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.modifiedCount > 0) {
          Swal.fire({
            title: "Success!",
            text: "Upated successfully",
            icon: "success",
            confirmButtonText: "cool",
          });
        }
      });
  };
  return (
    <div>
      <form
        className="max-w-7xl mx-auto"
        onSubmit={handleUpdateCoffee}
        action="sumbit"
      >
        <h2 className="text-center font-bold text-4xl mt-30">
          update Coffee: {coffeeName}
        </h2>
        <div>
          <div className="flex gap-5 mt-10">
            <div className="join flex flex-col gap-2 w-1/2">
              <label htmlFor="">Coffee Name</label>
              <input
                name="coffeeName"
                type="text"
                className="input join-item w-full"
                defaultValue={coffeeName}
                placeholder="coffee name"
              />
            </div>
            <div className="join flex flex-col gap-2 w-1/2">
              <label htmlFor="">Available Quantaty</label>
              <input
                name="quantaty"
                type="text"
                defaultValue={quantaty}
                className="input join-item w-full"
                placeholder="Available Quantaty"
              />
            </div>
          </div>
          <div className="flex gap-5 mt-10">
            <div className="join flex flex-col gap-2 w-1/2">
              <label htmlFor="">Suplier name</label>
              <input
                name="supplaier"
                type="text"
                className="input join-item w-full"
                defaultValue={supplaier}
                placeholder="Suplier name"
              />
            </div>
            <div className="join flex flex-col gap-2 w-1/2">
              <label htmlFor="">Taste</label>
              <input
                name="taste"
                type="text"
                className="input join-item w-full"
                placeholder="Taste"
                defaultValue={taste}
              />
            </div>
          </div>
          <div className="flex gap-5 mt-10">
            <div className="join flex flex-col gap-2 w-1/2">
              <label htmlFor="">Category</label>
              <input
                name="category"
                type="text"
                className="input join-item w-full"
                placeholder="Category"
                defaultValue={category}
              />
            </div>
            <div className="join flex flex-col gap-2 w-1/2">
              <label htmlFor="">Details</label>
              <input
                name="details"
                type="text"
                className="input join-item w-full"
                placeholder="Details"
                defaultValue={details}
              />
            </div>
          </div>
          <div className="join flex flex-col mt-10 gap-2 w-full">
            <label htmlFor="">Photo URL</label>
            <input
              name="photo"
              type="text"
              className="input h-15 join-item w-full"
              placeholder="Photo URL"
              defaultValue={photo}
            />
          </div>
        </div>
        <input
          className="w-full py-4 mt-10 border"
          type="submit"
          placeholder="Update Coffee"
        />
      </form>
    </div>
  );
}
