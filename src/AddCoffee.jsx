import Swal from "sweetalert2";
export default function AddCoffee() {
  const handleAddCoffee = (e) => {
    e.preventDefault();
    const form = e.target;
    const coffeeName = form.coffeeName.value;
    const quantaty = form.quantaty.value;
    const supplaier = form.supplaier.value;
    const taste = form.taste.value;
    const category = form.category.value;
    const details = form.details.value;
    const photo = form.photo.value;

    const newCoffee = {
      coffeeName,
      quantaty,
      supplaier,
      taste,
      category,
      details,
      photo,
    };

    fetch("http://localhost:5000/addcoffee", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(newCoffee),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.insertedId > 0) {
          Swal.fire({
            title: "Success!",
            text: "Coffee added successfully",
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
        onSubmit={handleAddCoffee}
        action="sumbit"
      >
        <h2 className="text-center font-bold text-4xl mt-30">Add Coffee</h2>
        <div>
          <div className="flex gap-5 mt-10">
            <div className="join flex flex-col gap-2 w-1/2">
              <label htmlFor="">Coffee Name</label>
              <input
                name="coffeeName"
                type="text"
                className="input join-item w-full"
                placeholder="coffee name"
              />
            </div>
            <div className="join flex flex-col gap-2 w-1/2">
              <label htmlFor="">Available Quantaty</label>
              <input
                name="quantaty"
                type="text"
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
              />
            </div>
            <div className="join flex flex-col gap-2 w-1/2">
              <label htmlFor="">Details</label>
              <input
                name="details"
                type="text"
                className="input join-item w-full"
                placeholder="Details"
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
            />
          </div>
        </div>
        <input
          className="w-full py-4 mt-10 border"
          type="submit"
          placeholder="Add Coffee"
        />
      </form>
    </div>
  );
}
