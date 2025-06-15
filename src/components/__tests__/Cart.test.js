import "@testing-library/jest-dom";
import { fireEvent, render,screen, within } from "@testing-library/react";
import { act } from "react";
import RestrauntMenu from "../RestrauntMenu";
import MOCK_DATA from "../__mocks__/resMenuMock.json";
import { Provider } from "react-redux";
import store from "../../utils/store";
import Header from "../Header";
import { BrowserRouter } from "react-router-dom";

global.fetch = jest.fn(() => {
  return Promise.resolve({
    json: () => Promise.resolve(MOCK_DATA),
  });
});

it("should load restaurant menu component", async () => {
  await act(async () => {
    render(
    <BrowserRouter>
      <Provider store={store}>
        <Header/>
        <RestrauntMenu />
      </Provider>
      </BrowserRouter>
    );
  });
  const menuList = screen.getByTestId('menu-McSaver Combos (2pc Combos)')
  const {getAllByTestId ,getAllByRole} = within(menuList)
  const items = getAllByTestId('menu-items')
  const addBtns = getAllByRole('button',{name :'Add Item'})
  console.log(addBtns,'addBtns')
  fireEvent.click(addBtns[0])
  expect(items.length).toBe(49)
  expect(screen.getByText('Cart - 1 items')).toBeInTheDocument()
});
