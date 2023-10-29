


function CategoryFilter({categories, selectedCategory, setSelectedCategory}) {
    const handleCategoryClick = (category) => {
        setSelectedCategory(category);
    }

    return (
        <div className="category-tabs">
      {categories.map((category) => (
        <button
          key={category}
          value={category}
          onClick={() => handleCategoryClick(category)}
          className={selectedCategory === category ? 'active' : ''}
        >
          {category}
        
        </button>
        
      ))}
    </div>
    )}


    export default CategoryFilter;