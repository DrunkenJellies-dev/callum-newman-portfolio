import { GridItemInterface } from "@/config/site-config";
import Icon from "../icon";
import Link from "next/link";

const MentorshipBox = ({ item }: { item: GridItemInterface }) => {
  return (
    <Link href={item.buttonLink ?? ""} className="flex items-center gap-3">
      {/* Icon */}
      <Icon type={item.icon ?? ""} color={item.color} />
      {/* Title */}
      <div className="text-lg font-semibold w-full">{item.title}</div>
      {/* Container */}
      <div className="">
        {/* Top Container */}
        <div className="flex items-center justify-between">
          {/* Promo */}
          <div className="text-xs text-neutral-500">Promo</div>
          {/* Price Container */}
          <div className="flex gap-1 items-center">
            <span className="text-xs line-through text-neutral-500">
              {item.oldPrice}
            </span>
            <span> {item.price}</span>
          </div>
          {/* Bottom Container */}
          <div className="text-primary font-bold ">{item.promotion}</div>
        </div>
      </div>
    </Link>
  );
};

export default MentorshipBox;
