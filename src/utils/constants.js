import React from "react";
import {
  FaChartBar,
  FaSearch,
  FaSearchPlus,
  FaAddressCard,
} from "react-icons/fa";

const LINKS = [
  {
    icon: <FaChartBar />,
    text: "stats",
    url: "/",
  },
  {
    icon: <FaSearch />,
    text: "all jobs",
    url: "/all-jobs",
  },
  {
    icon: <FaSearchPlus />,
    text: "add job",
    url: "/add-job",
  },
  {
    icon: <FaAddressCard />,
    text: "profile",
    url: "/profile",
  },
];

export { LINKS };
