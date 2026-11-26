import { ImageResponse } from "next/og";
import { BRAND_NAME } from "@/app/components/brand";

export const size = {
  width: 64,
  height: 64,
};

export const contentType = "image/png";

export default function Icon() {
  const initial = BRAND_NAME.trim().charAt(0).toUpperCase() || "O";

  return new ImageResponse(
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        background: "#332c26",
        color: "#d5a36c",
        fontSize: 46,
        fontFamily: "Georgia",
        borderRadius: 14,
      }}
    >
      {initial}
    </div>,
    size,
  );
}
