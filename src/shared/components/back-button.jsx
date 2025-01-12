import React from "react";

const BackButton = () => {
  return (
    <a href="./">
      <button className="w-[32px] h-[32px] bg-[#fff] rounded-full flex justify-center items-center">
        <svg
          className="w-[20px] h-[20px]"
          fill="#000000"
          version="1.1"
          baseProfile="tiny"
          id="Layer_1"
          xmlns:x="&amp;ns_extend;"
          xmlns:i="&amp;ns_ai;"
          xmlns:graph="&amp;ns_graphs;"
          xmlns="http://www.w3.org/2000/svg"
          xmlns:xlink="http://www.w3.org/1999/xlink"
          xmlns:a="http://ns.adobe.com/AdobeSVGViewerExtensions/3.0/"
          viewBox="0 0 42 42"
          xml:space="preserve">
          <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
          <g
            id="SVGRepo_tracerCarrier"
            stroke-linecap="round"
            stroke-linejoin="round"></g>
          <g id="SVGRepo_iconCarrier">
            {" "}
            <polygon
              fill-rule="evenodd"
              points="31,38.32 13.391,21 31,3.68 28.279,1 8,21.01 28.279,41 "></polygon>{" "}
          </g>
        </svg>
      </button>
    </a>
  );
};

export default BackButton;