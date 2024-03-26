"use client";

import React from "react";

function AddToCart() {
  return (
    <button
      onClick={() => {
        console.log("click me");
      }}
    >
      Add to cart
    </button>
  );
}

export default AddToCart;
