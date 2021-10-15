import { initPlasmicLoader } from "@plasmicapp/loader-nextjs";

export const PLASMIC = initPlasmicLoader({
  projects: [
    {
      id: "9Ez6vNhJFQ69LZL2fp9zzt",  // ID of a project you are using
      token: "NOz894G9w7oTrrLnVhhANT5jH84pUOHOrln3tVqPVkediQlkItNqmetcNODqZhV1dhtmDF9Pa87XxlwkXBJw" 
    },
  ],
  // Fetches the latest revisions, whether or not they were unpublished!
  // Disable for production to ensure you render only published changes.
  preview: true,
});

// import TailwindInput from "./components/tailwind/input";
// import TailwindExample from "./components/tailwind/example";

// PLASMIC.registerComponent(TailwindInput, {
//   name: "TailwindInput",
//   props: {
//     name: "string",
//     placeholder: "string",
//     label: "string",
//   },
// });

// PLASMIC.registerComponent(TailwindExample, {
//   name: "TailwindExample",
//   props: {},
// });
