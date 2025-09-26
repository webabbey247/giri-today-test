import { registerSheet } from "react-native-actions-sheet";
import FilterSheet from "./components/filter-sheet";

// Register your ActionSheets here
registerSheet("filter-sheet", FilterSheet);

export { }; // keep this so TS doesn't complain
