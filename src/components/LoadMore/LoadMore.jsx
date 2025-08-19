import { ClipLoader } from "react-spinners";

export default function Loader() {
  return (
    <div style={{ textAlign: "center", marginTop: "20px" }}>
      <ClipLoader color="#4a90e2" size={40} />
    </div>
  );
}
