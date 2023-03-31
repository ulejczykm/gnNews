import "./styles.scss";

interface Props {
  title: string;
  name: string;
  publishedAt: string;
  urlToImage: string;
  description: string;
}

export const GridItem = ({
  title,
  name,
  publishedAt,
  urlToImage,
  description,
}: Props) => (
  <div className="gridItem">
    <img src={urlToImage} alt={title} />
    <div className="gridText">
      <h2>{title}</h2>
      <p>{description}</p>
      <p>Źródło: {name}</p>
      <p>Opublikowano:: {publishedAt}</p>
    </div>
  </div>
);
