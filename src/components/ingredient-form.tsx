import { type FormEvent } from "react";
import "./ingrident-form.css";

type TIngredientForm = {
  onIngredientSubmited: (ingredient: string) => void;
};

export function IngredientForm({ onIngredientSubmited }: TIngredientForm) {
  const INPUT_INGREDIENT_NAME = "ingridient";
  const handleOnSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = event.currentTarget;
    const formData = new FormData(form);
    const ingredient = formData.get(INPUT_INGREDIENT_NAME);
    if (ingredient) {
      onIngredientSubmited(ingredient.toString());
    }
    form.reset();
  };

  return (
    <form onSubmit={handleOnSubmit} className="ingridient-root">
      <input
        type="text"
        className="ingridient-input"
        placeholder="e.g. oregano"
        name={INPUT_INGREDIENT_NAME}
      />
      <button className="submit-ingridient-button">Add ingredient</button>
    </form>
  );
}
