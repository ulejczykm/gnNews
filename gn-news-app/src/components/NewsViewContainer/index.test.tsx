import { render, screen, waitFor } from "@testing-library/react";
import { Provider } from "react-redux";
import { configureStore } from "@reduxjs/toolkit";
import { MemoryRouter, useParams } from "react-router-dom";
import { NewsViewContainer } from "components/NewsViewContainer";
import store from "store/store";
import newsViewSlice, { GRID, LIST, setView } from "store/slices/newsViewSlice";

const mockNews = [
  {
    title: "Tytuł artykułu 1",
    source: { name: "Źródło 1" },
    publishedAt: "2022-02-29T13:55:02Z",
    url: "http://news-testing-1.com",
    urlToImage: "http://news-img-testing-2.com",
    description: "Opis artykułu nr 1",
    author: "Autor 1",
  },
  {
    title: "Tytuł artykułu 2",
    source: { name: "Źródło 2" },
    publishedAt: "2022-02-19T14:55:02Z",
    url: "http://news-testing-2.com",
    urlToImage: "http://news-img-testing-2.com",
    description: "Opis artykułu nr 2",
    author: "Autor 2",
  },
];

jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  useParams: jest.fn(),
}));

describe("NewsViewContainer", () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it("should render news as list", async () => {
    const currentStore = configureStore({
      reducer: {
        newsView: newsViewSlice,
      },
    });

    currentStore.dispatch(setView(LIST));

    render(
      <Provider store={currentStore}>
        <MemoryRouter>
          <NewsViewContainer />
        </MemoryRouter>
      </Provider>
    );

    const listNews = await screen.findAllByTestId(LIST);
    listNews.map((item) => {
      expect(item).toBeInTheDocument();
    });

    const notFoundGrid = screen.queryByTestId(GRID);
    expect(notFoundGrid).toBeNull();
  });

  it("should render news as grid", async () => {
    const currentStore = configureStore({
      reducer: {
        newsView: newsViewSlice,
      },
    });

    currentStore.dispatch(setView(GRID));

    render(
      <Provider store={currentStore}>
        <MemoryRouter>
          <NewsViewContainer />
        </MemoryRouter>
      </Provider>
    );

    const gridNews = await screen.findAllByTestId(GRID);
    gridNews.map((item) => {
      expect(item).toBeInTheDocument();
    });

    const notFoundList = screen.queryByTestId(LIST);
    expect(notFoundList).toBeNull();
  });

  it("should render news", async () => {
    (useParams as jest.Mock).mockReturnValueOnce({ countryCodes: "pl" });

    jest.spyOn(window, "fetch").mockResolvedValueOnce({
      ok: true,
      json: async () => ({ articles: mockNews }),
    } as Response);

    render(
      <Provider store={store}>
        <MemoryRouter initialEntries={["/country/pl"]}>
          <NewsViewContainer />
        </MemoryRouter>
      </Provider>
    );

    expect(window.fetch).toHaveBeenCalledWith(
      `https://newsapi.org/v2/top-headlines?country=pl&apiKey=${process.env.REACT_APP_NEWS_API}`
    );

    const news1 = await screen.findByText(mockNews[0].title);
    expect(news1).toBeInTheDocument();

    const news2 = await screen.findByText(mockNews[1].title);
    expect(news2).toBeInTheDocument();
  });
});
