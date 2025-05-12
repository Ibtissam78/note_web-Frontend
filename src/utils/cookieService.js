import Cookies from "js-cookie";

const cookieService = {
  setCookie: (name, value, days) => {
    Cookies.set(name, value, { expires: days });
  },

  getCookie: (name) => {
    return Cookies.get(name);
  },

  deleteCookie: (name) => {
    Cookies.remove(name);
  },
};

export default cookieService;