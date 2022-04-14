import React from "react";
import { Tile } from "../tile/Tile";

export const TileList = ({objects}) => {

  return (
    <div>
      {objects.map((object, index) => {
        return (
        <Tile 
        key={index}
        object={object}/>
        );
      })}
    </div>
  );
};
