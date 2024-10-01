import { GridItemInterface } from "@/config/site-config";
import React from "react";

const SocialBox = ({ item }: { item: GridItemInterface }) => {
  return (
    <div>
      {/* Header */}
      <div className="flex items-center justify-between">
        {/* Icon */}
        <div className="">Icon</div>
        {/* Button 2x2 */}
        {item.layout === "2x2" && <div>Button</div>}
      </div>
      {/* Content Container */}
      <div className="mt-2">
        {/* Title */}
        <div className="text-lg font-semibold">{item.title}</div>
        {/* UserName */}
        <div className="text-sm text-neutral-500">{item.username}</div>
        {/* Description */}
        {item.description && (
          <div className="text-sm text-neutral-500 mt-1">{item.description}</div>
        )}
      </div>
      {/* Button 1x2 */}
      {item.layout === "1x2" && <div>Button</div>}
    </div>
  );
};

export default SocialBox;
