import { qwikify$ } from "@builder.io/qwik-react";
import {
  Box as MuiBox,
  Grid as MuiGrid,
  Button as MuiButton,
  Card as MuiCard,
  Badge as MuiBadge,
  Divider as MuiDivider,
} from "@mui/material";
import {
  Search as SearchIcon,
  ShoppingCart as ShoppingCartIcon,
  Person as PersonIcon,
  Instagram as InstagramIcon,
  LinkedIn as LinkedInIcon,
  Twitter as TwitterIcon,
  GitHub as GitHubIcon,
} from "@mui/icons-material";

// Components
export const Box = qwikify$(MuiBox);
export const Button = qwikify$(MuiButton);
export const Card = qwikify$(MuiCard);
export const Grid = qwikify$(MuiGrid);
export const Badge = qwikify$(MuiBadge);
export const Divider = qwikify$(MuiDivider);

// Icons
export const Search = qwikify$(SearchIcon);
export const ShoppingCart = qwikify$(ShoppingCartIcon);
export const Person = qwikify$(PersonIcon);
export const Instagram = qwikify$(InstagramIcon);
export const LinkedIn = qwikify$(LinkedInIcon);
export const Twitter = qwikify$(TwitterIcon);
export const GitHub = qwikify$(GitHubIcon);
