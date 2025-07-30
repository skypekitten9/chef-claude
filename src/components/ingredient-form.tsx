import "./ingrident-form.css";
export function IngredientForm() {
  return (
    <div className="ingridient-root">
      <input
        type="text"
        className="ingridient-input"
        placeholder="e.g. oregano"
      />
      <button className="add-ingridient-button">Add ingredient</button>
    </div>
  );
}
