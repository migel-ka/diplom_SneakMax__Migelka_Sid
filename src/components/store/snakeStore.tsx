import { createStore, createEvent } from "effector";
import { Sneaker } from "../type/sneaker";

export const addSneaker = createEvent();
export const removeSneaker = createEvent<number>(); // Указываем, что это событие принимает число

export const snakeStore = createStore<Sneaker[]>([])

  .on(addSneaker, (state, sneaker) => [...state, sneaker])
  .on(removeSneaker, (state, index) => state.filter((_, i) => i !== index));
