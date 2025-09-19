import React from "react";

interface InfoBoxProps {
  title?: string;
  content?: string | string[];
  image?: string;
  imageAlt?: string;
  services?: string[];
  linkText?: string;
  linkHref?: string;
  bgColor?: string;
  titleSize?: string;
}

const InfoBox: React.FC<InfoBoxProps> = ({
  title,
  content,
  image,
  imageAlt,
  services = [],
  linkText,
  linkHref,
  bgColor = "bg-red-950",
  titleSize = "text-xl",
}) => {
  return (
    <article className={`border-2 border-yellow-400 rounded-lg p-4 ${bgColor} text-center`}>
      {image && <img src={image} alt={imageAlt} className="w-44 h-36 rounded-full mx-auto mb-4" />}
      {title && <h2 className={`${titleSize} font-semibold mb-2`}>{title}</h2>}
      {content &&
        (typeof content === "string"
          ? <p>{content}</p>
          : content.map((p, i) => <p key={i} className={i > 0 ? "mt-2" : ""}>{p}</p>))}
      {services.length > 0 && (
        <ul className="space-y-1">
          {services.map((s, i) => <li key={i}>{s}</li>)}
        </ul>
      )}
      {linkText && linkHref && (
        <a href={linkHref} className="inline-block mt-2 bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">
          {linkText}
        </a>
      )}
    </article>
  );
};

export default InfoBox;
