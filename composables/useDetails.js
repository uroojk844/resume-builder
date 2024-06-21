const details = {
  links: {},
  skills: [],
  languages: [],
  education: {
    0: {
      start_date: "",
      end_date: "",
      course: "",
      university: "",
    },
  },
  experience: {
    0: {
      start_date: "",
      end_date: "",
      title: "",
      description: "",
      link: "",
    },
  },
};

export const useDetails = () => useState("details", () => details);

String.prototype.capitalize = function () {
  return this.charAt(0).toUpperCase() + this.substring(1);
};

export function getDate(date) {
  return date
    ? new Intl.DateTimeFormat("en-IN", {
        month: "short",
        year: "numeric",
      }).format(new Date(date))
    : "Present";
}
