// components/CrispChat.tsx
"use client"

import { useEffect } from 'react';

const CrispChat = () => {
  useEffect(() => {
    if (typeof window !== "undefined") {
      window.$crisp = [];
      window.CRISP_WEBSITE_ID = process.env.NEXT_PUBLIC_CRISP_WEBSITE_ID;

      (function () {
        const d = document;
        const s = d.createElement("script");
        s.src = "https://client.crisp.chat/l.js";
        s.async = 1;
        d.getElementsByTagName("head")[0].appendChild(s);
      })();
    }
  }, []);

  return null; // This component does not need to render anything
};

export default CrispChat;
