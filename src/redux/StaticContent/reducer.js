import { SET_INITIAL_DATA, PAYMENT_SATUS } from "./types";

import EnLogo from "../../assets/Engelska.svg";
import Trustly from "../../assets/Trustly.svg";
import Qliro from "../../assets/Qliro.svg";
import SeLogo from "../../assets/Sweden.svg";
import NoLogo from "../../assets/Norska.svg";

const initialState = {
  id: 1,
  identificationNumber: "19901230-4567",
  firstName: "Anna",
  lastName: "Anne",
  email: "annaanne@qliro.com",
  phoneNumber: "+46721234567",
  shippingAddress: "Qlirovägen 123, 12345 Stockholm, Sweden",
  invoiceAddress: "Qlirovägen 123, 12345 Stockholm, Sweden",

  orders: [
    {
      orderNumber: 1234567890,
      createDate: "05 maj, 12:33",
      store: { countryCode: "En", butikName: "Butik X", icon: EnLogo },
      paymentMethod: { name: "Visa", logo: Qliro },
      paymentStatus: PAYMENT_SATUS.PAID,
      amount: "2160 kr",
    },
    {
      orderNumber: 1234567891,
      createDate: "06 maj, 12:33",
      store: { countryCode: "Se", butikName: "Butik X", icon: SeLogo },
      paymentMethod: { name: "Paypal", logo: Trustly },
      paymentStatus: PAYMENT_SATUS.PAID,
      amount: "2160 kr",
    },
    {
      orderNumber: 1234567892,
      createDate: "07 maj, 12:33",
      store: { countryCode: "En", butikName: "Butik X", icon: EnLogo },
      paymentMethod: { name: "Visa", logo: Trustly },
      paymentStatus: PAYMENT_SATUS.IN_PROGRESS,
      amount: "2160 kr",
    },
    {
      orderNumber: 1234567893,
      createDate: "08 maj, 12:33",
      store: { countryCode: "No", butikName: "Butik X", icon: NoLogo },
      paymentMethod: { name: "Master", logo: Trustly },
      paymentStatus: PAYMENT_SATUS.PAID,
      amount: "2160 kr",
    },
    {
      orderNumber: 1234567894,
      createDate: "09 maj, 12:33",
      store: { countryCode: "En", butikName: "Butik X", icon: EnLogo },
      paymentMethod: { name: "Visa", logo: Trustly },
      paymentStatus: PAYMENT_SATUS.FAILED,
      amount: "2160 kr",
    },
    {
      orderNumber: 1234567895,
      createDate: "07 maj, 12:33",
      store: { countryCode: "En", butikName: "Butik X", icon: EnLogo },
      paymentMethod: { name: "Visa", logo: Trustly },
      paymentStatus: PAYMENT_SATUS.IN_PROGRESS,
      amount: "2160 kr",
    },
    {
      orderNumber: 1234567896,
      createDate: "08 maj, 12:33",
      store: { countryCode: "En", butikName: "Butik X", icon: EnLogo },
      paymentMethod: { name: "Master", logo: Trustly },
      paymentStatus: PAYMENT_SATUS.PAID,
      amount: "2160 kr",
    },
    {
      orderNumber: 1234567897,
      createDate: "09 maj, 12:33",
      store: { countryCode: "En", butikName: "Butik X", icon: EnLogo },
      paymentMethod: { name: "Visa", logo: Trustly },
      paymentStatus: PAYMENT_SATUS.FAILED,
      amount: "2160 kr",
    },
    {
      orderNumber: 1234567898,
      createDate: "07 maj, 12:33",
      store: { countryCode: "En", butikName: "Butik X", icon: EnLogo },
      paymentMethod: { name: "Visa", logo: Trustly },
      paymentStatus: PAYMENT_SATUS.IN_PROGRESS,
      amount: "2160 kr",
    },
    // {
    //     orderNumber: 1234567899,
    //     createDate: "08 maj, 12:33",
    //     store: {countryCode: "No", butikName: "Butik X", icon: NoLogo},
    //     paymentMethod: {name: "Master", logo: Trustly},
    //     paymentStatus: PAYMENT_SATUS.PAID,
    //     amount:"2160 kr"
    // },
    // {
    //     orderNumber: 1234567800,
    //     createDate: "09 maj, 12:33",
    //     store: {countryCode: "En", butikName: "Butik X", icon: EnLogo},
    //     paymentMethod: {name: "Visa", logo: Trustly},
    //     paymentStatus: PAYMENT_SATUS.FAILED,
    //     amount:"2160 kr"
    // },
    // {
    //     orderNumber: 1234567801,
    //     createDate: "07 maj, 12:33",
    //     store: {countryCode: "En", butikName: "Butik X", icon: EnLogo},
    //     paymentMethod: {name: "Visa", logo: Trustly},
    //     paymentStatus: PAYMENT_SATUS.IN_PROGRESS,
    //     amount:"2160 kr"
    // },
    // {
    //     orderNumber: 1234567802,
    //     createDate: "08 maj, 12:33",
    //     store: {countryCode: "En", butikName: "Butik X", icon: EnLogo},
    //     paymentMethod: {name: "Master", logo: Trustly},
    //     paymentStatus: PAYMENT_SATUS.PAID,
    //     amount:"2160 kr"
    // },
    // {
    //     orderNumber: 1234567803,
    //     createDate: "09 maj, 12:33",
    //     store: {countryCode: "En", butikName: "Butik X", icon: EnLogo},
    //     paymentMethod: {name: "Visa", logo: Trustly},
    //     paymentStatus: PAYMENT_SATUS.FAILED,
    //     amount:"2160 kr"
    // }
  ],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_INITIAL_DATA: {
      return {
        ...state,
      };
    }
    default:
      return state;
  }
};

export default reducer;
