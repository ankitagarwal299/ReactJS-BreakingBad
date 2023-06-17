import { element } from "./elements";
import React from "react";

export default function breakify(name) {
  if (!name?.length) return [];

  for (let i = 0; i < name.length; i++) {
    const oneChar = name[i].toUpperCase();
    const twoChar = `${oneChar}${name[i + 1]}`;

    if (element.includes(twoChar)) {
      return [
        <span>{name.slice(0, i)}</span>,
        <span style={{ backgroundColor: "green" }}>{twoChar}</span>,
        <span>{name.slice(i + 2, name.length)}</span>
      ];
    }

    if (element.includes(oneChar)) {
      return [
        <span>{name.slice(0, i)}</span>,
        <span style={{ backgroundColor: "green" }}>{oneChar}</span>,
        <span>{name.slice(i + 1, name.length)}</span>
      ];
    }
  }

  return [name];
}
