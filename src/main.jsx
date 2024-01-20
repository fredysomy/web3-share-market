import React from 'react'
import ReactDOM from 'react-dom/client'

import './index.css'


import { WagmiConfig, createConfig } from "wagmi";
import { ConnectKitProvider, getDefaultConfig } from "connectkit";
import Initial from './Initial';

const config = createConfig(
  getDefaultConfig({
    // Required API Keys
    alchemyId:"Fx8anAX4z5qcarbplWTfYPb9kGpRF7lY", // or infuraId
    walletConnectProjectId: 'af040a578fb53706d0f5aad648455748',

    // Required
    appName: "Your App Name",

    // Optional
    appDescription: "Your App Description",
    appUrl: "https://family.co", // your app's url
    appIcon: "https://family.co/logo.png", // your app's icon, no bigger than 1024x1024px (max. 1MB)
  }),
);


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <WagmiConfig config={config}>
      <ConnectKitProvider>
      <Initial/>
       
      </ConnectKitProvider>
    </WagmiConfig>
  </React.StrictMode>,
)
