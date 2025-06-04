function CategoryCard({ name, icon: Icon, onCardCliked , categoryName}) {

  console.log('name==>', name);
  
  const categoryGet = () => {
    fetch("http://localhost:3000/product/getCategorie/Product", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ categoryName: categoryName}),
    })
      .then((res) => res.json())
      .then((data) => onCardCliked(data.products))
      .catch((err) => alert(err.message));
  };

  return (
    <>
      <div
        onClick={categoryGet}
        className="flex flex-col items-center justify-center p-8 rounded-md border border-gray-300 hover:bg-red-400 hover:text-white transition duration-300"
      >
        {Icon && <Icon size={32} className="mb-2" />}
        <span className="text-[15px]  mt-3 font-[400]">{name}</span>
      </div>
    </>
  );
}

export default CategoryCard;
