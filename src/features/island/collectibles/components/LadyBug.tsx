import React from "react";

import ladybug from "assets/sfts/ladybug.gif";
import { PIXEL_SCALE } from "features/game/lib/constants";
import shadow from "assets/npcs/shadow.png";

export const LadyBug: React.FC = () => {
  return (
    <div
      className="absolute top-0 left-0 h-full"
      style={{
        width: `${PIXEL_SCALE * 16}px`,
      }}
    >
      <img
        src={shadow}
        style={{
          width: `${PIXEL_SCALE * 15}px`,
        }}
        className="absolute bottom-0 left-0 pointer-events-none"
      />
      <img
        src={ladybug}
        style={{
          width: `${PIXEL_SCALE * 16}px`,
          bottom: `${PIXEL_SCALE * 2}px`,
        }}
        className="absolute left-0 pointer-events-none"
        alt="Lady Bug"
      />
    </div>
  );
};
