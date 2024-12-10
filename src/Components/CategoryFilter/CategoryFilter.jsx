export default function CategoryFilter({ selectedCategory, onCategoryChange }) {
  return (
    <div className="mb-4 flex">
      <p
        htmlFor="category-select"
        className="text-s font-bold text-white bg-blue-950 p-6 rounded-lg text-center mb-6 mr-6"
      >
        Filtrar por categoría:
      </p>

      <select
        id="category-select"
        value={selectedCategory}
        onChange={onCategoryChange}
        className="bg-blue-950 flex p-6 mb-6 mr-6 text-white font-bold rounded-lg"
      >
        <option value="all">Todas</option>
        <option value="Mirrorles">Mirrorles</option>
        <option value="3x3">3x3</option>
        <option value="Especiales">Especiales</option>
        <option value="2x2">2x2</option>
        <option value="Packs de cubos">Packs de cubos</option>
        <option value="Magnético">Magnéticos</option>
        <option value="Pyraminx">Pyraminx</option>
      </select>
    </div>
  );
}
