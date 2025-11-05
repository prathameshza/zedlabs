// HomePage of Zedlabs
import Home from "./page";
import { SpeedInsights } from '@vercel/speed-insights/react';
import { Analytics } from '@vercel/analytics/react';

const HomePage = () => {
  return (
    <div >
      <SpeedInsights />
      <Analytics />
      <Home />
    </div>
  );
};

export default HomePage;
