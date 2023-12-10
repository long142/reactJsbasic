import React from "react";
import PropTypes from "prop-types";
import AlbumList from "../components/AlbumList";

AlbumFeature.propTypes = {};

function AlbumFeature(props) {
  const albumList = [
    {
      id: 1,
      name: "Chill Cùng R&B Việt",
      thumbnailUrl:
        "https://photo-resize-zmp3.zmdcdn.me/w320_r1x1_jpeg/cover/5/1/5/d/515d2d41e07072b00af6004b6625460b.jpg",
    },
    {
      id: 2,
      name: "Nhạc Lofi Chill Gây Nghiện",
      thumbnailUrl:
        "https://photo-resize-zmp3.zmdcdn.me/w320_r1x1_jpeg/cover/4/5/4/9/45493e859cde749c75fb4377c14d0db3.jpg",
    },
    {
      id: 3,
      name: "Nhạc Chill Tâm Trạng Buồn",
      thumbnailUrl:
        " https://photo-resize-zmp3.zmdcdn.me/w320_r1x1_jpeg/cover/5/6/c/d/56cd9130ab4c54b3d3e74ec6d656ea04.jpg",
    },
  ];
  return (
    <div>
      <h2>Có thể bạn thích ?</h2>
      <AlbumList albumList={albumList} />
    </div>
  );
}

export default AlbumFeature;
