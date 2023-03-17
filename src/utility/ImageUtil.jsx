export default function ImageUtilLarge({ url, ...options }) {
  return (
    <img
      src={url}
      style={{
        height: "250px",
        width: "auto",
        position: "absolute",
        ...options,
      }}
    />
  );
}

export function ImageUtilSmall({ url, ...options }) {
  return (
    <img
      src={url}
      style={{
        height: "200px",
        width: "auto",
        position: "absolute",
        ...options,
      }}
    />
  );
}
