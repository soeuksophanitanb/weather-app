import { create } from "zustand";

const useMyStore = create((set) => ({
  api_key: "47f208ba207bbdf5d80142c5f9a5dded",
  data: [],
  fetchData: async (url) => {
    try {
      const response = await fetch(url);
      const data = await response.json();
      set({ data });
      console.log(data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  },
  getUrl: () => {
    return `https://api.openweathermap.org/data/2.5/weather?q=${
      useMyStore.getState().search
    }&units=metric&appid=${useMyStore.getState().api_key}`;
  },
  search: "Phnom Penh",

  // big-title
  big_title: "Next 5 days",
}));

export default useMyStore;
