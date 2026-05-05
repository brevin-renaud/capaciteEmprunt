interface HowToStep {
  name: string;
  text: string;
}

interface HowToSchemaProps {
  name: string;
  description: string;
  steps: HowToStep[];
  totalTime?: string;
}

export default function HowToSchema({ name, description, steps, totalTime = "PT2M" }: HowToSchemaProps) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "HowTo",
    name,
    description,
    inLanguage: "fr-FR",
    totalTime,
    tool: [{ "@type": "HowToTool", name: "Simulateur CapaciteEmprunt" }],
    supply: [{ "@type": "HowToSupply", name: "Revenus nets mensuels" }],
    step: steps.map((step, index) => ({
      "@type": "HowToStep",
      position: index + 1,
      name: step.name,
      text: step.text,
    })),
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
