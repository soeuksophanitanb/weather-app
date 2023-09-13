import { create } from "zustand";

const useMyStore = create((set) => ({
  api_key: "47f208ba207bbdf5d80142c5f9a5dded",
  data: {},
  setData: (data) =>
    set(() => ({
      data: data,
    })),
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
    return `https://api.openweathermap.org/data/2.5/weather?lat=${
      useMyStore.getState().latitude
    }&lon=${useMyStore.getState().longitude}&units=metric&appid=${
      useMyStore.getState().api_key
    }`;
  },
  // la and long
  latitude: null,
  longitude: null,
  // get current location
  getLocation: () => {
    navigator.geolocation.getCurrentPosition((position) => {
      const latitude = position.coords.latitude;
      const longitude = position.coords.longitude;
      set({ latitude, longitude });
    });
  },

  // current location
  currentLocation: null,
  setCurrentLocation: (la, lon) =>
    set(() => ({
      currentLocation: {
        latitude: la,
        longitude: lon,
      },
    })),

  search: "Phnom Penh",

  // big-title
  big_title: "Next 5 days",
  // data cities
  filtered_city: null,
  setFiltered: (city_name) =>
    set({
      filtered_city: city_name,
    }),
  cities: [
    {
      id: 1,
      name: "Phnom Penh",
    },
    {
      id: 2,
      name: "Kandal",
    },
  ],
  setValue: (inputRef) => {
    inputRef.current.value = "";
  },
}));

export default useMyStore;
