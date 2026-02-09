import { FaUtensils } from "react-icons/fa";

export const CreateEditShop = () => {
  return (
     <div className="min-h-screen bg-[#fff8f1] flex items-center justify-center px-4">
      <div className="w-full max-w-md bg-white rounded-xl shadow-lg p-6">
        {/* Icon */}
        <div className="flex justify-center mb-3">
          <FaUtensils className="text-[#ff4d2d] w-16 h-16 sm:w-20 sm:h-20 mb-4"  />
        </div>

        {/* Title */}
        <h2 className="text-center text-xl sm:text-2xl font-medium mb-5">
          Edit Shop
        </h2>

        <form  className="space-y-4">
          {/* Name */}
          <div>
            <label className="text-sm font-medium">Name</label>
            <input
              type="text"
              name="name"
              className="w-full mt-1 px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-orange-400"
            />
          </div>

          {/* Image */}
          <div>
            <label className="text-sm font-medium">Shop Image</label>
            <input
              type="file"
              className="w-full mt-1 text-sm"
            />
          </div>

          {/* Preview */}
            <img
              src={"https://images.unsplash.com/photo-1608198093002-ad4e005484ec"}
              alt="shop"
              className="w-full h-40 object-cover rounded-md"
            />

          {/* City & State */}
          <div className="grid grid-cols-2 gap-3">
            <div>
              <label className="text-sm font-medium">City</label>
              <input
                type="text"
                name="city"
                className="w-full mt-1 px-3 py-2 border rounded-md"
              />
            </div>

            <div>
              <label className="text-sm font-medium">State</label>
              <input
                type="text"
                name="state"
                className="w-full mt-1 px-3 py-2 border rounded-md"
              />
            </div>
          </div>

          {/* Address */}
          <div>
            <label className="text-sm font-medium">Address</label>
            <input
              type="text"
              name="address"
              className="w-full mt-1 px-3 py-2 border rounded-md"
            />
          </div>

          {/* Save Button */}
          <button
            type="submit"
            className="w-full bg-orange-500 hover:bg-orange-600 text-white py-2 rounded-md font-medium"
          >
            Save
          </button>
        </form>
      </div>
    </div>
  )
}