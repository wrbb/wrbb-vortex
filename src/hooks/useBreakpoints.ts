import { useEffect, useState } from "react";
import { theme } from "../theme";

// Breakpoint 0: Mobile
// Breakpoint 1: Tablet
// Breakpoint 2: Laptop
// Breakpoint 3: Desktop
const useBreakpoints = () => {
  const [breakpoint, setBreakpoint] = useState<number>(0);

  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth; // Use innerWidth
      const breakpoints = theme.breakpoints!.map((bp) => parseInt(bp));

      if (width >= breakpoints[3]) {
        setBreakpoint(3);
      } else if (width >= breakpoints[2]) {
        setBreakpoint(2);
      } else if (width >= breakpoints[1]) {
        setBreakpoint(1);
      } else {
        setBreakpoint(0);
      }
    };

    window.addEventListener("resize", handleResize);
    handleResize();

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return breakpoint;
};

export default useBreakpoints;
