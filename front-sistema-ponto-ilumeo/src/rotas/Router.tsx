import { createBrowserRouter } from "react-router-dom";
import {rotasPublicas } from "./rotasPublicas";
import { rotasAutenticadas } from "./rotasAutenticadas";

export const configRouter = createBrowserRouter([...rotasPublicas, ...rotasAutenticadas])
