import { Status, Transitions } from "./models";

export function moveStatus<From extends Status>(
  from: From,
  to: Transitions[From]
): Transitions[From] {
  return to;
}