export default function Movies() {
  const [Component, setComponent] = useState(null);
  useEffect(() => {
    if (typeof window !== "undefined") {
      setComponent(lazy(() => import("movies/Movies")));
    }
  }, []);
  return (
    <div style={{ padding: "2%" }}>
      <h1>Next JS and React</h1>
      <h2>Host - Button</h2>
      <h2>Client - Button</h2>
      {Component && <Component />}
    </div>
  );
}
