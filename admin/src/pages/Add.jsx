import React, { useState } from "react";
import { assets } from "../assets/admin_assets/assets";

const Add = () => {

  const [image1,setImage1] = useState(false);
  const [image2,setImage2] = useState(false);
  const [image3,setImage3] = useState(false);
  const [image4,setImage4] = useState(false);

  const [name,setName] = useState("");
  const [description,setDescription] = useState("");
  const [quantity,setQuantity] = useState("");
  const [availability,setAvailability] = useState(false);
  const [colors,setColors] = useState([]);
  
  const [category,setCategory] = useState("");
  const [subCategory, setSubCategory] = useState("");

  const subCategoryOptions = {
    Consumables: ["Resistors", "IC Bases", "LEDs","Wires"],
    Equipment: ["Drills", "Grinders"],
    Components: ["Arduino", "Raspberry"],
    Stations: ["Measuring", "Soldering","Assembly"],
  };

   // Get subcategories based on selected category
   const handleCategoryChange = (e) => {
    setCategory(e.target.value);
    setSubCategory(""); // Reset subcategory when category changes
  };

  const onSubmitHandler = async (e) => {
    e.preventDefault();

    try {

      const formData = new FormData()

      formData.append("name",name);
      formData.append("description",description);
      formData.append("quantity",quantity);
      formData.append("category",category);
      formData.append("subCategory",subCategory);
      formData.append("colors",JSON.stringify(colors));

      image1 && formData.append("image1",image1)
      image2 && formData.append("image1",image2)
      image3 && formData.append("image1",image3)
      image4 && formData.append("image1",image4)
      
    } catch (error) {
      
    }

  }

  return (
    <form onSubmit={onSubmitHandler} className="flex flex-col w-full item-start gap-3">
      <div>
        <p className="mb-2">Upload Image</p>

        <div className="flex gap-2">
          <label htmlFor="image1">
            <img
              className="w-20 cursor-pointer"
              src={!image1 ? assets.upload_area: URL.createObjectURL(image1)}
              alt=""
            />
            <input onChange={(e)=> setImage1(e.target.files[0])} type="file" id="image1" hidden />
          </label>
          <label htmlFor="image2">
            <img
              className="w-20 cursor-pointer"
              src={!image1 ? assets.upload_area: URL.createObjectURL(image2)}
              alt=""
            />
            <input onChange={(e)=> setImage2(e.target.files[0])}  type="file" id="image2" hidden />
          </label>
          <label htmlFor="image3">
            <img
              className="w-20 cursor-pointer"
              src={!image1 ? assets.upload_area: URL.createObjectURL(image3)}
              alt=""
            />
            <input onChange={(e)=> setImage3(e.target.files[0])} type="file" id="image3" hidden />
          </label>
          <label htmlFor="image4">
            <img
              className="w-20 cursor-pointer"
              src={!image1 ? assets.upload_area: URL.createObjectURL(image4)}
              alt=""
            />
            <input onChange={(e)=> setImage4(e.target.files[0])}  type="file" id="image4" hidden />
          </label>
        </div>
      </div>

      <div className="w-full">
        <p className="mb-2">Product Name</p>
        <input
          onChange={(e) => setName(e.target.value) }
          value={name}
          className="w-full max-w-[500px] px-3 py-2"
          type="text"
          placeholder="Type here"
          required
        />
      </div>

      <div className="w-full">
        <p className="mb-2">Product Description</p>
        <textarea
          onChange={(e) => setDescription(e.target.value) }
          value={description}
          className="w-full max-w-[500px] px-3 py-2"
          type="text"
          placeholder="Write content here"
          required
        />
      </div>

      {/* Product Category and Subcategory */}
      <div className="flex flex-col sm:flex-row gap-2 w-full sm:gap-8">
        <div>
          <p className="mb-2">Product Category</p>
          <select className="w-full px-3 py-2"
            value={category}
            onChange={handleCategoryChange}
            required
          >
            <option value="">Select Category</option>
            <option value="Consumables">Consumables</option>
            <option value="Components">Components</option>
            <option value="Equipment">Equipment</option>
            <option value="Stations">Stations</option>
          </select>
        </div>

        {/* Subcategory Dropdown */}
        <div>
          <p className="mb-2">Product Sub Category</p>
          <select className="w-full px-3 py-2"
            value={subCategory}
            onChange={(e) => setSubCategory(e.target.value)}
            required
          >
            <option value="">Select Sub Category</option>
            {category &&
              subCategoryOptions[category].map((sub, index) => (
                <option key={index} value={sub}>
                  {sub}
                </option>
              ))}
            
          </select>
        </div>

        <div>
          <p className="mb-2">Quantity</p>
          <input
            onChange={(e) => setQuantity(e.target.value) }
            value={quantity}
            className="w-full px-3 py-2 sm:w-[120px]"
            type="Number"
            placeholder="1"
          />
        </div>
      </div>

      <div>
        <p className="mb-2">Product Color</p>
        <div className="flex gap-3">
          <div onClick={() => setColors(prev => prev.includes("Red") ? prev.filter(item => item !== "Red") : [...prev,"Red"])}>
            <p className={`${colors.includes("Red") ? "bg-blue-400" : "bg-slate-200"} px-3 py-1 cursor-pointer`}>Red</p>
          </div>
         <div onClick={() => setColors(prev => prev.includes("Black") ? prev.filter(item => item !== "Black") : [...prev,"Black"])}>
            <p className={`${colors.includes("Black") ? "bg-blue-400" : "bg-slate-200"} px-3 py-1 cursor-pointer`}>Black</p>
          </div>
          <div onClick={() => setColors(prev => prev.includes("Blue") ? prev.filter(item => item !== "Blue") : [...prev,"Blue"])}>
            <p className={`${colors.includes("Blue") ? "bg-blue-400" : "bg-slate-200"} px-3 py-1 cursor-pointer`}>Blue</p>
          </div>
          <div onClick={() => setColors(prev => prev.includes("Green") ? prev.filter(item => item !== "Green") : [...prev,"Green"])}>
            <p className={`${colors.includes("Green") ? "bg-blue-400" : "bg-slate-200"} px-3 py-1 cursor-pointer`}>Green</p>
          </div>
        </div>
      </div>

      <div className="flex gap-2 mt-2">
        <input 
        onChange={() => setAvailability(prev => !prev)}
        checked={availability}
        type="checkbox" id='availablity'/>
        <label className="cursor-pointer" htmlFor="availablity"> Available </label>
      </div>

      <button type="submit" className="w-28 py-3 mt-4 bg-black text-white"> 
        ADD
      </button>

    </form>
  );
};

export default Add;