import React, { useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getPostsByUserId, savePost } from "../../app/actions/post.actions";
import { storage } from "../../util/firebaseConfig";
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";

function PostAdd() {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user);
  const fileInputRef = useRef(null);

  const [caption, setCaption] = React.useState("");
  const [imgLink, setImgLink] = React.useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    const post = {
      userId: user.userId,
      caption,
      imgLink,
    };
    await dispatch(savePost(post));
    await dispatch(getPostsByUserId(user.userId));
    setCaption("");
    setImgLink("");
    fileInputRef.current.value = "";

  };

  const uploadImage = (e) => {
    const files = e.target.files;

    if (files.length === 0) {
      alert("Please upload at least one image!");
      return;
    }

    // upload up to 4 images
    const maxImages = 4;
    const numImages = Math.min(maxImages, files.length);

    for (let i = 0; i < numImages; i++) {
      const file = files[i];
      const storageRef = ref(storage, `/posts/${file.name}`);

      const uploadTask = uploadBytesResumable(storageRef, file);

      uploadTask.on(
        "state_changed",
        (snapshot) => {
          Math.round((snapshot.bytesTransferred / snapshot.totalBytes) * 100);
        },
        (err) => console.log(err),
        () => {
          getDownloadURL(uploadTask.snapshot.ref).then((url) => {
            setImgLink((prevLinks) => [...prevLinks, url]);
          });
        }
      );
    }
  };

  function isImage(url) {
    const imageExtensionsRegex = /\.(jpg|jpeg|png|gif|bmp|svg|webp)/i;
    return imageExtensionsRegex.test(url);
  }
  return (
    <div className="container mb-3 card create-card">
      <div className="card-body">
        <form onSubmit={handleSubmit}>
          <h1 className="mt-2">Share your thoughts</h1>
          <div className="mt-2 mb-3">
            <label className="form-label"></label>
            <input
              type="text"
              className="form-control"
              placeholder="What's on your mind?"
              value={caption}
              onChange={(e) => setCaption(e.target.value)}
            />
          </div>
          <div className="mb-3">
            {imgLink && isImage(imgLink) ? (
              <img
                src={imgLink}
                className="img-fluid me-3"
                alt="Profile"
              />
            ) : (
              <video controls className="img-fluid me-3">
                <source src={imgLink} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            )}


            <input
              type="file"
              className="form-control"
              onChange={(e) => uploadImage(e)}
              ref={fileInputRef}
              // accept="image"
              multiple
            />
          </div>

          <button type="submit" className="btn btn-outline-primary">
            PUBLISH
          </button>
        </form>
      </div>
    </div>
  );
}

export default PostAdd;
