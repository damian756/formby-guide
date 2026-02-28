// ── Blog Post Component Registry ──────────────────────────────────────────────
// Maps each post slug to its content component.
// Add new entries here when new posts are created.

import type { ComponentType } from "react";

import HalfTerm from "./things-to-do-formby-half-term";
import WeatherGuide from "./formby-beach-weather-guide";
import FamilyRestaurants from "./where-to-eat-formby-with-kids";
import RedSquirrels from "./red-squirrels-formby-spotting-guide";
import Pinewoods from "./formby-pinewoods-walking-guide";
import Natterjack from "./natterjack-toads-formby";

export const POST_COMPONENTS: Record<string, ComponentType> = {
  "things-to-do-formby-half-term": HalfTerm,
  "formby-beach-weather-guide": WeatherGuide,
  "where-to-eat-formby-with-kids": FamilyRestaurants,
  "red-squirrels-formby-spotting-guide": RedSquirrels,
  "formby-pinewoods-walking-guide": Pinewoods,
  "natterjack-toads-formby": Natterjack,
};
