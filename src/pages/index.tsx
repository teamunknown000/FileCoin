import { dark } from "~/styles/palette"

export default function Home() {
  return (
    <div style={{
      minHeight: "100vh",
      backgroundColor: dark.bgColor,
      color: dark.primaryColor,
      display: "flex",
      flexWrap: "wrap",
      flex: "0 1 2rem"
    }}>
      something
    </div>
  );
}