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
import EasterFormby from "./easter-at-formby-beach-2026";
import FormbyOpenBase from "./formby-open-2026-base";
import WildGarlic from "./wild-garlic-formby-pinewoods";
import FormbyJune from "./formby-june-school-holidays";
import LeftBankBrasserie from "./left-bank-brasserie-formby";
import FormbyInMay from "./formby-in-may";
import BlackpoolOrFormby from "./blackpool-or-formby-family-day-out";
import FormbyFromBlackpool from "./formby-day-trip-from-blackpool";
import FormbyBeachSummer from "./formby-beach-summer-guide";
import SparrowhawkReview from "./the-sparrowhawk-formby-review";
import FormbyBeachLateMay from "./formby-beach-late-may-2026";
import FormbyRedSquirrelsJune from "./formby-red-squirrels-june";
import SunsetFormbyPoint from "./sunset-formby-point";
import FormbySummerHolidays from "./formby-summer-holidays-2026";
import FormbyAsparagus from "./formby-asparagus-guide";
import FathersDayFormby from "./fathers-day-formby-2026";
import FormbyBeachJuly from "./formby-beach-july-2026";
import AinsdaleCostalWalk from "./ainsdale-beach-walk-from-formby";
import FormbyRainyDay from "./formby-rainy-day-guide";
import FormbyNTFirstVisit from "./formby-national-trust-first-visit";
import FormbyOpenWeek from "./formby-open-week-2026";
import FormbyCycling from "./formby-cycling-routes";

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
  "easter-at-formby-beach-2026": EasterFormby,
  "formby-open-2026-base": FormbyOpenBase,
  "wild-garlic-formby-pinewoods": WildGarlic,
  "formby-june-school-holidays": FormbyJune,
  "left-bank-brasserie-formby": LeftBankBrasserie,
  "formby-in-may": FormbyInMay,
  "blackpool-or-formby-family-day-out": BlackpoolOrFormby,
  "formby-day-trip-from-blackpool": FormbyFromBlackpool,
  "formby-beach-summer-guide": FormbyBeachSummer,
  "the-sparrowhawk-formby-review": SparrowhawkReview,
  "formby-beach-late-may-2026": FormbyBeachLateMay,
  "formby-red-squirrels-june": FormbyRedSquirrelsJune,
  "sunset-formby-point": SunsetFormbyPoint,
  "formby-summer-holidays-2026": FormbySummerHolidays,
  "formby-asparagus-guide": FormbyAsparagus,
  "fathers-day-formby-2026": FathersDayFormby,
  "formby-beach-july-2026": FormbyBeachJuly,
  "ainsdale-beach-walk-from-formby": AinsdaleCostalWalk,
  "formby-rainy-day-guide": FormbyRainyDay,
  "formby-national-trust-first-visit": FormbyNTFirstVisit,
  "formby-open-week-2026": FormbyOpenWeek,
  "formby-cycling-routes": FormbyCycling,
};
