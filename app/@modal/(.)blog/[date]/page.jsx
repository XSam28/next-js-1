import React from "react";
import Modal from "@/components/modal/Overlay";
import Image from "next/image";
import getIdSpace from "@/app/libs/getIdSpace";
import Blogs from "@/components/Blogs";

export default async function BlogOverlay({ params: { date } }) {
  const imgData = await getIdSpace(date);
  return (
    <Modal>
      <h1 className="text-white">{imgData.title}</h1>
    </Modal>
  );
}
