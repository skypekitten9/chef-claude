import "./list.css";

type TList = {
  title: string;
  items: string[];
};

export function List({ title, items }: TList) {
  const listItemElements = items.map((item) => (
    <li className="listItem">{item}</li>
  ));
  return (
    <div className="listContainer">
      <h2 className="listTitle">{title}</h2>
      <ul>{...listItemElements}</ul>
    </div>
  );
}
