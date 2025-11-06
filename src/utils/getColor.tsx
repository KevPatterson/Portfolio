const getColor: (tech: string) => string = (tech: string) => {
  if (tech === "React.js") {
    return "text-cyan-400"
  } else if (tech === "Next.js") {
    return "text-white-500"
  } else if (tech === "Node.js") {
    return "text-green-500"
  } else if (tech === "MongoDB") {
    return "text-green-500"
  } else if (tech === "Python") {
    return "text-yellow-500"
  } else if (tech === "Javascript" || tech === "JavaScript") {
    return "text-yellow-500"
  } else if (tech === "HTML") {
    return "text-orange-500"
  } else if (tech === "CSS") {
    return "text-blue-500"
  } else if (tech === "mySQL" || tech === "MySQL") {
    return "text-amber-400"
  } else if (tech === "PostgreSQL") {
    return "text-blue-700"
  } else if (tech === "Django") {
    return "text-green-500"
  } else if (tech === "Nest.js") {
    return "text-red-600"
  } else if (tech === "TailwindCSS") {
    return "text-cyan-200"
  } else if (tech === "Docker") {
    return "text-blue-300"
  } else if (tech === "Redis") {
    return "text-red-600"
  } else if (tech === "TypeScript" || tech === "Typescript") {
    return "text-blue-400"
  } else if (tech === "Supabase") {
    return "text-green-600"
  } else if (tech === "Vite") {
    return "text-purple-400"
  } else if (tech === "Bootstrap") {
    return "text-yellow-100"
  } else if (tech === "jQuery") {
    return "text-white-100"
  } else if (tech === "Cypress" || tech === "cypress") {
    return "text-fuchsia-500"
  } else if (tech === "Allure" || tech === "allure") {
    return "text-lime-400"
  }

  // --- Nuevas herramientas añadidas ---
  else if (tech === "theHarvester" || tech === "TheHarvester") {
    return "text-rose-500"
  } else if (tech === "SpiderFoot" || tech === "spiderfoot") {
    return "text-sky-500"
  } else if (tech === "Maltego" || tech === "maltego") {
    return "text-violet-600"
  } else if (tech === "Google Dorks" || tech === "GoogleDorks" || tech === "google dorks") {
    return "text-indigo-500"
  } else if (tech === "Orange Datamining" || tech === "Orange Datamining" || tech === "OrangeDatamining") {
    return "text-orange-300"
  } else if (
    tech === "Jupyter Notebook" || tech === "jupyter notebook"
  ) {
    return "text-emerald-400"
  } else if (tech === "WebSpy Analyzer" || tech === "WebSpyAnalyzer" || tech === "webspy analyzer") {
    return "text-teal-400"
  }

  else {
    return "text-neutral-400"
  }
}

export default getColor
