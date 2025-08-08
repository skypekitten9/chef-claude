import { useRef, type FormEvent } from "react";
import "./ingrident-form.css";

type TIngredientForm = {
  onIngredientSubmited: (ingredient: string) => void;
};

export function IngredientForm({ onIngredientSubmited }: TIngredientForm) {
  const inputRef = useRef<HTMLInputElement>(null);
  const handleOnSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (inputRef.current) {
      const trimmedValue = inputRef.current.value.trim();
      if (trimmedValue) {
        onIngredientSubmited(inputRef.current.value);
      }
      inputRef.current.value = "";
    }
  };

  return (
    <form onSubmit={handleOnSubmit} className="ingridient-root">
      <input
        type="text"
        className="ingridient-input"
        placeholder="e.g. oregano"
        ref={inputRef}
      />
      <button className="submit-ingridient-button" type="submit">
        Add ingredient
      </button>
    </form>
  );
}
