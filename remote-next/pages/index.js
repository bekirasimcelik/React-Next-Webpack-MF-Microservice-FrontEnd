import Button from "../components/Button";

export default function Home() {
  return (
    <div style={{ padding: "2%" }}>
      <h1>Next JS Remote App</h1>
      <h2>Local Button Component</h2>
      {/* <Button /> */}
      <h2>Exposed Button Component</h2>
      <p>This component is exposed to the host app via Module Federation.</p>
    </div>
  );
}
