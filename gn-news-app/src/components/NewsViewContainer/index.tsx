import { GridItem } from "components/GridItem";
import "./styles.scss";
import { ListItem } from "components/ListItem";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setArticlesNumber } from "store/slices/articlesNumberSlice";
import { LIST } from "store/slices/newsViewSlice";
import { RootState } from "store/store";
import { Popup } from "components/Popup";

interface NewsInterface {
  author: string;
  content: string;
  description: string;
  publishedAt: "2023-03-30T15:31:17Z";
  source: { id: string; name: string };
  title: string;
  url: string;
  urlToImage: string;
}

export const NewsViewContainer = () => {
  const apiKey = process.env.REACT_APP_NEWS_API;
  const { view } = useSelector((state: RootState) => state.newsView);
  const [news, setNews] = useState<NewsInterface[]>([]);
  const dispatch = useDispatch();
  const containerStyle = view === LIST ? "newsList" : "newsGrid";

  useEffect(() => {
    const fetchNews = async () => {
      try {
        const response = await fetch(
          `https://newsapi.org/v2/top-headlines?country=pl&apiKey=${apiKey}`
        );
        if (!response.ok) {
          throw new Error("Request failed with status " + response.status);
        }
        const data = await response.json();
        setNews(data.articles);
      } catch (error) {
        console.error(error);
      }
    };
    fetchNews();
  }, []);

  useEffect(() => {
    dispatch(setArticlesNumber(news.length));
  }, [news]);

  console.log(news);

  return (
    <main className="mainContainer">
      <ul className={containerStyle}>
        {news.map(
          ({ title, source, publishedAt, url, urlToImage, description }) => (
            <li className="newsItem" key={url}>
              <Popup
                buttonComponent={
                  view === LIST ? (
                    <ListItem
                      title={title}
                      name={source.name}
                      publishedAt={publishedAt}
                    />
                  ) : (
                    <GridItem
                      title={title}
                      name={source.name}
                      publishedAt={publishedAt}
                      urlToImage={urlToImage}
                      description={description}
                    />
                  )
                }
              >
                ss
              </Popup>
            </li>
          )
        )}
      </ul>
    </main>
  );
};
