import { render, screen } from "@testing-library/react";
import { configureStore } from "@reduxjs/toolkit";
import { Provider } from "react-redux";
import { MemoryRouter } from "react-router-dom";
import { Footer } from "./index";
import articlesNumberSlice, {
  setArticlesNumber,
} from "store/slices/articlesNumberSlice";
import store from "store/store";

describe("Footer", () => {
  it("should render news number", async () => {
    const articlesNumber: number = 10;

    const currentStore = configureStore({
      reducer: {
        articlesNumber: articlesNumberSlice,
      },
    });

    currentStore.dispatch(setArticlesNumber(articlesNumber));

    render(
      <Provider store={currentStore}>
        <MemoryRouter>
          <Footer />
        </MemoryRouter>
      </Provider>
    );

    const newsNumber = await screen.findByText(
      `Ilość artykułow na stronie: ${articlesNumber}`
    );
    expect(newsNumber).toBeInTheDocument();
  });

  it("should display correct time", () => {
    render(
      <Provider store={store}>
        <Footer />
      </Provider>
    );
    const time = new Date();
    const timeToString = time.toLocaleTimeString([], {
      hour: "2-digit",
      minute: "2-digit",
    });
    const timeElement = screen.getByText(timeToString);
    expect(timeElement).toBeInTheDocument();
  });
});
