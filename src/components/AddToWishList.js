"use client";

import {
  addToWishList,
  getWishList,
  removeFromWishList,
} from "@/store/wishlistSlice";
import { FaRegHeart } from "react-icons/fa";
import { AiFillHeart } from "react-icons/ai";
import { useDispatch, useSelector } from "react-redux";

export default function AddToWishList({
  vote_average,
  name = "",
  first_air_date = "",
  title = "",
  id,
  poster_path,
  release_date = "",
  mediaType,
  content,
  size,
}) {
  const dispatch = useDispatch();
  const wishListContent = useSelector(getWishList);
  console.log(wishListContent);
  const inWishList = wishListContent.find((item) => item.id === id);
  function handleAddToWishList() {
    const wishlist = {
      vote_average,
      title,
      id,
      poster_path,
      first_air_date,
      name,
      release_date,
      mediaType,
    };
    dispatch(addToWishList(wishlist));
  }
  function handleRemoveFromWishlist(id) {
    dispatch(removeFromWishList(id));
  }
  return (
    <button
      onClick={
        inWishList ? () => handleRemoveFromWishlist(id) : handleAddToWishList
      }
      className="flex cursor-pointer items-center gap-1 text-sm transition-transform duration-300 hover:scale-[1.07]"
    >
      <span>
        {!inWishList ? (
          <FaRegHeart color="green" size={size} />
        ) : (
          <AiFillHeart color="green" size={size} />
        )}
      </span>
      <span className="font-secondary">
        {inWishList ? "Remove from wishlist" : content}
      </span>
    </button>
  );
}
