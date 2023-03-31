import "./styles.scss";

interface Props {
  title: string;
  name: string;
  publishedAt: string;
}

export const ListItem = ({ title, name, publishedAt }: Props) => (
  <li className="newsContainer">
    <h2 className="newsTitle">{title}</h2>
    <p>Źródło: {name}</p>
    <p>Opublikowano: {publishedAt}</p>
  </li>
);
