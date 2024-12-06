import { CSSProperties } from "react";

export const services = [
  {
    name: "UX/UI Design",
    file: "uxui",
    description:
      "Ignite engagement with tailored UX/UI solutions. Elevate conversions with designs crafted for success. Captivate your audience; let's guide your digital journey towards maximum impact and user satisfaction.",
    process:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco.",
    position: "bottom -70px right -80px",
  },
  {
    name: "Digital Artwork",
    file: "artwork",
    description:
      "Ignite engagement with tailored UX/UI solutions. Elevate conversions with designs crafted for success. Captivate your audience; let's guide your digital journey towards maximum impact and user satisfaction.",
    process:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    position: "bottom -70px right -80px",
  },
  {
    name: "Brand Redesign",
    file: "brand",
    description:
      "Ignite engagement with tailored UX/UI solutions. Elevate conversions with designs crafted for success. Captivate your audience; let's guide your digital journey towards maximum impact and user satisfaction.",
    process:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    position: "bottom -70px right -80px",
  },
  {
    name: "Social Media",
    file: "social",
    description:
      "Ignite engagement with tailored UX/UI solutions. Elevate conversions with designs crafted for success. Captivate your audience; let's guide your digital journey towards maximum impact and user satisfaction.",
    process:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    position: "bottom -70px right -80px",
  },
  {
    name: "Package Design",
    file: "packaging",
    description:
      "Ignite engagement with tailored UX/UI solutions. Elevate conversions with designs crafted for success. Captivate your audience; let's guide your digital journey towards maximum impact and user satisfaction.",
    process:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    position: "bottom -70px right -80px",
  },
  {
    name: "Video Editing",
    file: "video",
    description:
      "Ignite engagement with tailored UX/UI solutions. Elevate conversions with designs crafted for success. Captivate your audience; let's guide your digital journey towards maximum impact and user satisfaction.",
    process:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    position: "bottom -70px right -80px",
  },
];

export const boxes = [
  {
    title: "Simple",
    styles: {
      previewImage: {
        background: "url('assets/img/webp/simple.webp') center / cover",
      },
    },
  },
  {
    title: "Elegant",
    styles: {
      preview: {
        borderRadius: "0",
        boxShadow: "0 5px 20px rgba(17, 12, 46, .15)",
      },
      previewImage: {
        background: "url('assets/img/webp/elegant.webp') center / cover",
        borderRadius: "0",
        boxShadow: "inset 0 0 0 8px var(--w1)",
      },
      content: {
        fontFamily: "var(--font-lora)",
      },
      button: {
        borderRadius: "0",
        textTransform: "uppercase",
        fontFamily: "var(--font-poppins)",
      },
    },
  },
  {
    title: "Fun",
    styles: {
      preview: {
        borderRadius: "20px",
        boxShadow:
          "0 48px 100px rgba(17, 12, 46, 0), inset 0 0 0 4px var(--b1)",
      },
      previewImage: {
        background: "url('assets/img/webp/fun.webp') center / cover",
        borderRadius: "20px",
        boxShadow: "inset 0 0 0 4px var(--b1)",
        transform: "scale(1.07)",
        margin: "0 10px 0 9px",
      },
      content: {
        fontFamily: "var(--font-livvic)",
      },
      button: {
        borderRadius: "40px",
        background: "0 0",
        color: "var(--b1)",
        border: "3px solid var(--b1)",
        fontWeight: "700",
        transition: ".2s ease",
      },
    },
  },
  {
    title: "Modern",
    styles: {
      preview: {
        borderRadius: "0",
        boxShadow:
          "0 48px 100px rgba(17, 12, 46, .1), inset 0 140px 0 var(--b2)",
      },
      previewImage: {
        background: "url('assets/img/webp/modern.webp') center / cover",
        borderRadius: "0",
        boxShadow: "8px 8px 0 var(--b2)",
        transform: "scale(.8) translateY(-15px)",
      },
      content: {
        fontFamily: "var(--font-robotoMono)",
      },
      title: {
        color: "var(--w1)",
      },
      button: {
        borderRadius: "0",
        textTransform: "uppercase",
      },
    },
  },
] as {
  title: string;
  styles: {
    preview: CSSProperties;
    previewImage: CSSProperties;
    content: CSSProperties;
    title?: CSSProperties;
    button: CSSProperties;
  };
}[];

export const projects = [
  {
    title: {
      name: "Retroverse",
      secondName: "",
      style: {
        fontFamily: "var(--font-vudotronic)",
        background: "-webkit-linear-gradient(#232323, #161616)",
        backgroundClip: "text",
        WebkitBackgroundClip: "text",
        WebkitTextFillColor: "transparent",
        letterSpacing: "3px",
      },
    },
    description:
      "Manually coded website focused on organic traffic. Integrated with WordPress for the managing of all interface content. <br /> Manually coded website focused on organic traffic. Integrated with WordPress for the managing of all interface content.",
    video: true,
    preview: "/assets/video/retroverse.webm",
    type: "uxui",
    colors: [
      { color: "000000", font: "FFFFFF" },
      { color: "161616", font: "FFFFFF" },
      { color: "232323", font: "FFFFFF" },
      { color: "FFFFFF", font: "161616" },
      { color: "AAAAAA", font: "161616" },
    ],
    technologies: ["Figma", "Photoshop", "Premiere Pro"],
  },
  {
    title: {
      name: "dog",
      secondName: "resort",
      style: {
        fontFamily: "var(--font-livvic)",
      },
    },
    description:
      "Manually coded website focused on organic traffic. Integrated with WordPress for the managing of all interface content. <br /> Manually coded website focused on organic traffic. Integrated with WordPress for the managing of all interface content.",
    video: false,
    preview: "url(/assets/img/webp/dogresort.webp)",
    type: "uxui",
    colors: [
      { color: "97CA49", font: "FFFFFF" },
      { color: "FFA307", font: "FFFFFF" },
      { color: "FFCCC3", font: "161616" },
      { color: "47C8F3", font: "FFFFFF" },
      { color: "1E37B8", font: "FFFFFF" },
    ],
    technologies: ["Figma", "Photoshop", "Illustrator"],
  },
  {
    title: {
      name: "Nike",
      secondName: " Concept",
      style: {
        fontFamily: "var(--font-poppins)",
      },
    },
    description:
      "Manually coded website focused on organic traffic. Integrated with WordPress for the managing of all interface content. <br /> Manually coded website focused on organic traffic. Integrated with WordPress for the managing of all interface content.",
    video: false,
    preview: "url(/assets/img/webp/nike.webp)",
    type: "uxui",
    colors: [
      { color: "97CA49", font: "FFFFFF" },
      { color: "FFA307", font: "FFFFFF" },
      { color: "FFCCC3", font: "161616" },
      { color: "47C8F3", font: "FFFFFF" },
      { color: "1E37B8", font: "FFFFFF" },
    ],
    technologies: ["Figma", "Photoshop", "Illustrator"],
  },
];
