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
import DayTrip from "./formby-day-trip-from-liverpool";
import DogsBeach from "./dogs-formby-beach";
import CrosbyIronMen from "./crosby-beach-iron-men-formby";
import SpringFormby from "./spring-formby-beach-april";
import FormbyCafes from "./best-cafes-formby-village";
import FormbyVillageWalk from "./formby-village-walk-guide";

export const POST_COMPONENTS: Record<string, ComponentType> = {
  "things-to-do-formby-half-term": HalfTerm,
  "formby-beach-weather-guide": WeatherGuide,
  "where-to-eat-formby-with-kids": FamilyRestaurants,
  "red-squirrels-formby-spotting-guide": RedSquirrels,
  "formby-pinewoods-walking-guide": Pinewoods,
  "natterjack-toads-formby": Natterjack,
  "formby-day-trip-from-liverpool": DayTrip,
  "dogs-formby-beach": DogsBeach,
  "crosby-beach-iron-men-formby": CrosbyIronMen,
  "spring-formby-beach-april": SpringFormby,
  "best-cafes-formby-village": FormbyCafes,
  "formby-village-walk-guide": FormbyVillageWalk,
};
