import offersData from "../../mocks/offers.json";
import axios from "axios";
import MockAdapter from "axios-mock-adapter";

const mock = new MockAdapter(axios);

mock.onGet("/offers").reply(200, {
  offersData,
  message: "successfully received",
});

export const getOffersValues = axios.get("/offers");
