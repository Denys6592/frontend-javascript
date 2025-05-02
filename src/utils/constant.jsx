export const locations = [
  { label: "United States", slug: "US" },
  { label: "Canada", slug: "CA" },
  { label: "Mexico", slug: "MX" },
];

export const getCountryName = (shortCode) => {
  const location = locations.find((loc) => loc.slug === shortCode);
  return location ? location.label : shortCode;
};

export let BadgeType;

(function(BadgeType) {
  BadgeType["TopRatedPlus"] = "top-rated-plus";
  BadgeType["TopRated"] = "top-rated";
  BadgeType["RisingTalent"] = "rising-talent";
})(BadgeType || (BadgeType = {}));

export const apiUrl = process.env.NEXT_PUBLIC_API_URL;

export const formatDate = (dateValue) => {
  if (!dateValue) return "No Due Date";
  const date = typeof dateValue === "string" ? new Date(dateValue) : dateValue;

  const options = {
    year: "numeric",
    month: "short",
    day: "2-digit",
  };

  const formattedDate = date.toLocaleDateString("en-US", options);
  return formattedDate;
};

export const getPriorityColor = (priority) => {
  switch (priority) {
    case "Urgent":
      return "bg-[#FF0000] text-white";
    case "High":
      return "bg-[#FF5733] text-white";
    case "Medium":
      return "bg-[#FFD700] text-white";
    case "Low":
      return "bg-[#90EE90] text-white";
    default:
      return "bg-[#90EE90] text-white";
  }
};

export const priorities = ["Urgent", "High", "Medium", "Low"];
