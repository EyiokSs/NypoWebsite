import { useState } from 'react';

export const useAppState = () => {
  const [siteOpen, setSiteOpen] = useState(false);

  const handleOpenSite = () => {
    setSiteOpen(true);
  };

  const handleCloseSite = () => {
    setSiteOpen(false);
  };

  return {
    siteOpen,
    handleOpenSite,
    handleCloseSite
  };
};