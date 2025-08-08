import { IngredientForm } from "./ingredient-form";
import { List } from "./list/list";
import "./main.css";

export function Main() {
  return (
    <main>
      <div className="main-content">
        <IngredientForm
          onIngredientSubmited={function (ingredient: string): void {
            console.log("ingridient added:", ingredient);
          }}
        />
        <List title="Ingridents on hand:" items={[]} />
      </div>
    </main>
  );
}
