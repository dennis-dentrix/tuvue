import { FileEarmarkText, Film, Mic } from "react-bootstrap-icons";
import { useNavigate } from "react-router-dom";

export default function Ads() {
  const navigate = useNavigate();
  return (
    <div>
      {/* <h1 className="py-4">My ads</h1> */}

      <div className="flex items-center gap-6">
        <p className="px-4 py-7 bg-white shadow-md shadow-black rounded-md w-40 flex items-center gap-2">
          <FileEarmarkText style={{ color: "#4c7c7d" }} />
          <span>All</span>
        </p>
        <p
          onClick={() => navigate("/myads/documents")}
          className="px-4 py-7 bg-white shadow-md shadow-black rounded-md w-40 flex items-center gap-2"
        >
          <FileEarmarkText style={{ color: "#4c7c7d" }} />
          <span>Documents</span>
        </p>
        <p className="px-4 py-7 bg-white shadow-md shadow-black rounded-md w-40 flex items-center gap-2">
          <Film style={{ color: "#4c7c7d" }} />
          <span>Videos</span>
        </p>
        <p className="px-4 py-7 bg-white shadow-md shadow-black rounded-md w-40 flex items-center gap-2">
          <Mic style={{ color: "#4c7c7d" }} />
          <span>Audio</span>
        </p>
      </div>
    </div>
  );
}
