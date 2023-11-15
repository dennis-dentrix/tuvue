import { ArrowLeft, X } from "react-bootstrap-icons";

import CreatePost from "./../ui/CreatePost";

function Post() {
  return (
    <>
      <div className="flex flex-col sm:items-center items-start ">
        <div className="flex items-center justify-between border border-green px-3 py-2 rounded-sm sm:w-1/2 w-full">
          <div>
            <ArrowLeft />
          </div>
          <h1 className="text-green tracking-wider text-lg">Post ad</h1>

          <div className="flex items-center gap-2">
            <X />
            <p className="text-sm text-maroon">Clear</p>
          </div>
        </div>

        <CreatePost />
      </div>
    </>
  );
}

export default Post;
