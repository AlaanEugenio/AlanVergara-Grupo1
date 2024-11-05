import ItemList from "../ItemList/ItemList";

export default function ProductPage() {
  return (
    <div className="flex flex-col items-center my-8">
      <h1 className="text-3xl font-bold text-white bg-blue-950 p-6 rounded-lg shadow-lg text-center mb-6">
        Revisa los cubos que tenemos para ti
      </h1>
      <div className="container mx-auto max-w-[1170px]">
        <ItemList />
      </div>
    </div>
  );
}
