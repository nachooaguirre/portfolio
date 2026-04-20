import { ImageResponse } from "next/og";

/** PNG generado en runtime: los SVG con gradientes suelen verse rotos como favicon en Chrome/Edge. */
export const size = { width: 32, height: 32 };
export const contentType = "image/png";

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "#0f172a",
          borderRadius: 8,
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 1,
            color: "#a5b4fc",
            fontSize: 17,
            fontFamily:
              'ui-monospace, SFMono-Regular, "SF Mono", Menlo, Consolas, monospace',
            fontWeight: 700,
          }}
        >
          <span>{"<"}</span>
          <span>{"/"}</span>
          <span>{">"}</span>
        </div>
      </div>
    ),
    {
      ...size,
    },
  );
}
