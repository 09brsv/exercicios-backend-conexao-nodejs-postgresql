import * as getAll from "./Get";
import * as create from "./Create";

export const booksController = {
  ...getAll,
  ...create
}
