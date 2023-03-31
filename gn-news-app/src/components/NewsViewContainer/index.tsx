import "./styles.scss";
import { useParams } from "react-router-dom";
import { GridItem } from "components/GridItem";
import { ListItem } from "components/ListItem";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setArticlesNumber } from "store/slices/articlesNumberSlice";
import { LIST } from "store/slices/newsViewSlice";
import { RootState } from "store/store";
import { Popup } from "components/Popup";
import { NewsContent } from "components/NewsContent";

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
  const { countryCodes } = useParams<{ countryCodes: string }>();
  const code = countryCodes || "pl";
  const apiKey = process.env.REACT_APP_NEWS_API;
  const { view } = useSelector((state: RootState) => state.newsView);
  const [news, setNews] = useState<NewsInterface[]>([]);
  const dispatch = useDispatch();
  const containerStyle = view === LIST ? "newsList" : "newsGrid";

  useEffect(() => {
    const fetchNews = async () => {
      try {
        const response = await fetch(
          `https://newsapi.org/v2/top-headlines?country=${code}&apiKey=${apiKey}`
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
  }, [code]);

  useEffect(() => {
    dispatch(setArticlesNumber(news.length));
  }, [news]);

  return (
    <main className="mainContainer">
      <ul className={containerStyle}>
        {news.map(
          ({
            title,
            source,
            publishedAt,
            url,
            urlToImage,
            description,
            author,
          }) => (
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
                <NewsContent
                  title={title}
                  description={description}
                  author={author}
                  name={source.name}
                  url={url}
                />
              </Popup>
            </li>
          )
        )}
      </ul>
    </main>
  );
};
