import { Check, X } from "lucide-react";

const countries = [
  "Australia",
  "New Zealand",
  "USA",
  "Canada",
  "European Union",
  "United Kingdom",
];

const pricingPlans = [
  {
    name: "Basic",
    price: 600,
    features: [
      { name: "Unlimited consultations", included: true },
      { name: "Prepare & file application", included: true },
      { name: "Search and opinion", included: false },
      { name: "Registration guarantee", included: false },
      { name: "Minor responses", included: false },
      { name: "Major responses", included: false },
    ],
  },
  {
    name: "Value",
    price: 1220,
    popular: true,
    features: [
      { name: "Unlimited consultations", included: true },
      { name: "Prepare & file application", included: true },
      { name: "Search and opinion", included: true },
      { name: "Registration guarantee", included: true },
      { name: "Minor responses", included: true },
      { name: "Major responses", included: false },
    ],
  },
  {
    name: "All-Inclusive",
    price: 1830,
    features: [
      { name: "Unlimited consultations", included: true },
      { name: "Prepare & file application", included: true },
      { name: "Search and opinion", included: true },
      { name: "Registration guarantee", included: true },
      { name: "Minor responses", included: true },
      { name: "Major responses", included: true },
    ],
  },
];

export default function Pricing() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#b2d2a4] to-[#32cd30] p-8">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl font-bold text-center mb-2">
          Rightangle Package Pricing
        </h1>
        <p className="text-center mb-8 text-[#1a4314]">
          Choose a package below to get started. If needed, multiple countries
          and classes can be selected in the next step.
        </p>

        <div className="flex flex-wrap justify-center gap-4 mb-8">
          {countries.map((country) => (
            <button
              key={country}
              className={`px-4 py-2 rounded-full ${
                country === "Canada"
                  ? "bg-[#32cd30] text-white"
                  : "bg-white text-[#2c5e1a] hover:bg-[#2c5e1a] hover:text-white"
              } transition-colors duration-300`}
            >
              {country}
            </button>
          ))}
        </div>

        <div className="flex flex-wrap justify-center gap-8">
          {pricingPlans.map((plan) => (
            <div
              key={plan.name}
              className={`bg-white rounded-lg p-6 w-full max-w-sm ${
                plan.popular ? "border-4 border-[#32cd30]" : ""
              }`}
            >
              <h2 className="text-xl font-semibold mb-2">{plan.name}</h2>
              {plan.popular && (
                <span className="bg-[#32cd30] text-white text-xs px-2 py-1 rounded-full">
                  Popular
                </span>
              )}
              <div className="text-4xl font-bold my-4">
                ${plan.price}
                <span className="text-sm font-normal text-gray-600">
                  +$220 government fee
                </span>
              </div>
              <ul className="space-y-2 mb-6">
                {plan.features.map((feature) => (
                  <li key={feature.name} className="flex items-center">
                    {feature.included ? (
                      <Check className="text-[#32cd30] mr-2" size={20} />
                    ) : (
                      <X className="text-red-500 mr-2" size={20} />
                    )}
                    <span className={feature.included ? "" : "text-gray-400"}>
                      {feature.name}
                    </span>
                  </li>
                ))}
              </ul>
              <button className="w-full bg-[#32cd30] text-white py-2 rounded-md hover:bg-[#2c5e1a] transition-colors duration-300">
                Purchase Now
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
