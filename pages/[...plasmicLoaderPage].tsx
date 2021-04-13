/** This file is auto-generated by Plasmic; please do not edit! */
import { useRouter } from "next/router";
import PlasmicLoader from "@plasmicapp/loader";

const componentsByPath = {
  
    "home": {name: "Home", projectId: "wj1MibRubqzWuU8RZQrXvd" },
  
    "pricing": {name: "Pricing", projectId: "wj1MibRubqzWuU8RZQrXvd" },
  
    "features": {name: "Features", projectId: "wj1MibRubqzWuU8RZQrXvd" },
  
};

export default function PlasmicLoaderPage() {
  const router = useRouter();
  let { plasmicLoaderPage } = router.query;
  if (Array.isArray(plasmicLoaderPage)) {
    plasmicLoaderPage = plasmicLoaderPage.join('/');
  }
  const {name, projectId} = componentsByPath[plasmicLoaderPage];

  return <PlasmicLoader component={name} projectId={projectId} />;
}

export async function getStaticProps() {
  return {
    props: {},
  };
}

export async function getStaticPaths() {
  return {
    paths: [
      
        { params: { plasmicLoaderPage: ["home",] } },
      
        { params: { plasmicLoaderPage: ["pricing",] } },
      
        { params: { plasmicLoaderPage: ["features",] } },
      
    ],
    fallback: false,
  };
}
