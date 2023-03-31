import "./styles.scss";

interface Props {
  title: string;
  name: string;
  description: string;
  author: string;
  url: string;
}

export const NewsContent = ({
  title,
  description,
  author,
  name,
  url,
}: Props) => (
  <div>
    <h2 className="newsTitle">{title}</h2>
    <p>{description}</p>

    <p>Autor: {author}</p>

    <p>Źródło: {name}</p>

    <a className="link" href={url} rel="noopener noreferrer" target="_blank">
      Kilinij by dowiedzieć się więcej
    </a>
  </div>
);
