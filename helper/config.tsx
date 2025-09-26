import { Dimensions } from 'react-native';

const { height, width } = Dimensions.get('window');

const setHeight = (h: number) => (height / 100) * h;

const setWidth = (w: number) => (width / 100) * w;

const LIMIT = 10; // Number of items to fetch per request
const RESEND_TIME = 60; // seconds (you can set 300 for 5 minutes)
const CART_KEY = 'CART_ITEMS';
const STORAGE_KEY = 'cart';

export { setHeight, setWidth, LIMIT, RESEND_TIME, CART_KEY, STORAGE_KEY };
