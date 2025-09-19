import InfoRow from "@/components/layout/main/InfoRow";

const mainServicesData = [
  {
    title: "One Stop for Total Health Solutions",
    content: [
      "We go beyond medicines; we deliver wellness and personalized care.",
      "Join our expert team for quality service every prescription, every time."
    ],
    image: "photos/banner2.png",
    imageAlt: "Pharmacist holding a prescription bag"
  },
  {
    title: "Our Services",
    services: [
      "Drugs Prescription",
      "Dispensing & Medication Management",
      "Immunizations & Vaccinations",
      "Health Screenings & Diagnostic Tests",
      "Personalized Medication Counseling",
      "Home Delivery & Online Refills",
      "Telepharmacy (Virtual Consultations)"
    ]
  },
  {
    title: "Advanced Services",
    content: [
      "Telepharmacy for virtual medical consultations",
      "Custom compounding of medications",
      "Wellness products including vitamins and herbal supplements"
    ],
    image: "photos/banner3.png",
    imageAlt: "Advanced pharmaceutical equipment"
  }
];

export default function MainServices() {
  return <InfoRow boxes={mainServicesData} sectionLabel="Company Overview and Services" />;
}
