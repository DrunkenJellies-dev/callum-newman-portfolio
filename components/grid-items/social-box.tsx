import { GridItemInterface } from "@/config/site-config";
import React from "react";
import Icon from "../icon";
import Button from "../button";
import Link from "next/link";

const SocialBox = ({ item }: { item: GridItemInterface }) => {
  return (
    <Link href={item.buttonLink ?? ""} target="_blank">
      {/* Header */}
      <div className="flex items-center justify-between">
        {/* Icon */}
        <Icon type={item.icon ?? ""} color={item.color} />
        {/* Button 2x2 */}
        {item.layout === "2x2" && (
          <Button
            text={item.buttonTitle ?? ""}
            secondaryText={item.buttonSecondaryText ?? ""}
            color={item.color ?? ""}
          />
        )}
      </div>
      {/* Content Container */}
      <div className="mt-2">
        {/* Title */}
        <div className="text-lg font-semibold">{item.title}</div>
        {/* UserName */}
        <div className="text-sm text-neutral-500">{item.username}</div>
        {/* Description */}
        {item.description && (
          <div className="text-sm text-neutral-500 mt-1 line-clamp-2">
            {item.description}
          </div>
        )}
      </div>
      {/* Button 1x2 */}
      {item.layout === "1x2" && (
        <div className="mt-2">
          <Button
            text={item.buttonTitle ?? ""}
            secondaryText={item.buttonSecondaryText ?? ""}
            color={item.color ?? ""}
          />
        </div>
      )}
    </Link>
  );
};

export default SocialBox;
