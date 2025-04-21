
function CategoryCard({name, icon : Icon}) {
   
  return (
    <div>
      <div className="flex flex-col items-center justify-center p-8 rounded-md border border-gray-200 hover:bg-red-400 hover:text-white transition duration-300">
        {Icon && <Icon size={32} className="mb-2" />}
        <span className="text-[15px]  mt-3 font-[400]">{name}</span>
      </div>
    </div>
  );
}

export default CategoryCard;
