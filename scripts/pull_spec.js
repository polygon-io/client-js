import path from 'path';
import fs from 'fs';


const fetchSpec = async (url) => { 
  const response = await fetch(url);
  if (!response.ok) {
    throw new Error(`Failed to fetch spec: ${response.statusText}`);
  }
  return response.json();
};

const saveSpec = (spec, filename) => {
  const dir = path.dirname(filename);
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, { recursive: true });
  }
  fs.writeFileSync(filename, JSON.stringify(spec, null, 2));
};

const main = async () => { 
  const specUrl = 'https://api.polygon.io/openapi';
  const specFilename = path.join('./', 'src', 'openapi.json');

  try {
    const spec = await fetchSpec(specUrl);
    const cleanedSpec = { ...spec, paths: Object.fromEntries(Object.entries(spec.paths).filter(
        ([,{ "x-polygon-draft": xPolygonDraft }]) => {
            return !xPolygonDraft;
        }).map(([paths,item]) => ([paths,{ ...item, get: { ...item.get, tags: [ "default" ] }}])) 
    )};
    saveSpec(cleanedSpec, specFilename);
    console.log(`Spec saved to ${specFilename}`);
  } catch (error) {
    console.error(`Error: ${error.message}`);
  }
}

main();