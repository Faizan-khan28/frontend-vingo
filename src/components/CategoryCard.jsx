const CategoryCard = ({ name,image }) => {
  return (
    <div className="w-41.25 h-51.25 shrink-0 rounded-2xl border border-orange-400 overflow-hidden bg-white cursor-pointer hover:scale-105 transition-all duration-300">
      
      {/* Image */}
      <div className="h-41.25 overflow-hidden">
        <img
          src={image}
          alt={name}
          className="w-full h-full object-cover"
        />
      </div>

      {/* Bottom */}
      <div className="h-10 bg-gray-200 flex items-center justify-center">
        <h3 className="text-gray-700 text-[18px] font-medium">
          {name}
        </h3>
      </div>

    </div>
  );
};

export default CategoryCard;