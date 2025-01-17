import {
  AppKit,
  AppKitAccountButton,
  AppKitButton,
  AppKitConnectButton,
  AppKitNetworkButton,
  PACKAGE_VERSION,
  ProviderUtil,
  W3mAccountActivityWidget,
  W3mAccountAuthButton,
  W3mAccountButton,
  W3mAccountDefaultWidget,
  W3mAccountNftsWidget,
  W3mAccountSettingsView,
  W3mAccountTokensWidget,
  W3mAccountView,
  W3mAccountWalletFeaturesWidget,
  W3mActivityList,
  W3mAlertBar,
  W3mAllWalletsList,
  W3mAllWalletsListItem,
  W3mAllWalletsSearch,
  W3mAllWalletsView,
  W3mAllWalletsWidget,
  W3mApproveTransactionView,
  W3mButton,
  W3mBuyInProgressView,
  W3mChooseAccountNameView,
  W3mConnectAnnouncedWidget,
  W3mConnectButton,
  W3mConnectCustomWidget,
  W3mConnectExternalWidget,
  W3mConnectFeaturedWidget,
  W3mConnectInjectedWidget,
  W3mConnectMultiChainWidget,
  W3mConnectRecentWidget,
  W3mConnectRecommendedWidget,
  W3mConnectSocialsView,
  W3mConnectView,
  W3mConnectWalletConnectWidget,
  W3mConnectWalletsView,
  W3mConnectingExternalView,
  W3mConnectingFarcasterView,
  W3mConnectingHeader,
  W3mConnectingMultiChainView,
  W3mConnectingSocialView,
  W3mConnectingWcBrowser,
  W3mConnectingWcDesktop,
  W3mConnectingWcMobile,
  W3mConnectingWcQrcode,
  W3mConnectingWcUnsupported,
  W3mConnectingWcView,
  W3mConnectingWcWeb,
  W3mConnectorList,
  W3mDownloadsView,
  W3mEmailLoginWidget,
  W3mEmailVerifyDeviceView,
  W3mEmailVerifyOtpView,
  W3mGetWalletView,
  W3mHeader,
  W3mHelpWidget,
  W3mInputAddress,
  W3mInputCurrency,
  W3mInputToken,
  W3mLegalCheckbox,
  W3mLegalFooter,
  W3mMobileDownloadLinks,
  W3mNetworkButton,
  W3mNetworkSwitchView,
  W3mNetworksView,
  W3mOnRampActivityItem,
  W3mOnRampActivityView,
  W3mOnRampProviderItem,
  W3mOnRampProvidersFooter,
  W3mOnRampProvidersView,
  W3mOnrampFiatSelectView,
  W3mOnrampTokensView,
  W3mOnrampWidget,
  W3mProfileView,
  W3mRegisterAccountNameSuccess,
  W3mRegisterAccountNameView,
  W3mRouter,
  W3mSIWXSignMessageThumbnails,
  W3mSIWXSignMessageView,
  W3mSendSelectTokenView,
  W3mSnackBar,
  W3mSocialLoginList,
  W3mSocialLoginWidget,
  W3mSwapInput,
  W3mSwapInputSkeleton,
  W3mSwapPreviewView,
  W3mSwapSelectTokenView,
  W3mSwapView,
  W3mSwitchActiveChainView,
  W3mSwitchAddressView,
  W3mTooltip,
  W3mTransactionsView,
  W3mUnsupportedChainView,
  W3mUpdateEmailPrimaryOtpView,
  W3mUpdateEmailSecondaryOtpView,
  W3mUpdateEmailWalletView,
  W3mUpgradeToSmartAccountView,
  W3mUpgradeWalletView,
  W3mWalletCompatibleNetworksView,
  W3mWalletGuide,
  W3mWalletLoginList,
  W3mWalletReceiveView,
  W3mWalletSendDetails,
  W3mWalletSendPreviewView,
  W3mWalletSendView,
  W3mWhatIsABuyView,
  W3mWhatIsANetworkView,
  W3mWhatIsAWalletView,
  WcConstantsUtil,
  WcHelpersUtil,
  WuiSwapDetails,
  WuiTooltipTrigger,
  useSnapshot
} from "./chunk-CKMTTUFJ.js";
import "./chunk-QQNE7WTD.js";
import "./chunk-75KXWIUS.js";
import "./chunk-ZH7V6PZP.js";
import {
  AccountController,
  ChainController,
  ConnectionController,
  CoreHelperUtil
} from "./chunk-UFCBRU52.js";
import "./chunk-IAIWU4J6.js";
import "./chunk-DSWFES7F.js";
import "./chunk-ZQE76UJS.js";
import "./chunk-ZTBOFYUR.js";
import {
  require_react
} from "./chunk-OJK6TXMW.js";
import {
  __toESM
} from "./chunk-256EKJAK.js";

// node_modules/@reown/appkit/dist/esm/src/library/react/index.js
var import_react = __toESM(require_react(), 1);

// node_modules/@reown/appkit-core/dist/esm/exports/react.js
function useAppKitNetworkCore() {
  const { activeCaipNetwork } = useSnapshot(ChainController.state);
  return {
    caipNetwork: activeCaipNetwork,
    chainId: activeCaipNetwork == null ? void 0 : activeCaipNetwork.id,
    caipNetworkId: activeCaipNetwork == null ? void 0 : activeCaipNetwork.caipNetworkId
  };
}
function useAppKitAccount() {
  const { status } = useSnapshot(AccountController.state);
  const { activeCaipAddress } = useSnapshot(ChainController.state);
  return {
    caipAddress: activeCaipAddress,
    address: CoreHelperUtil.getPlainAddress(activeCaipAddress),
    isConnected: Boolean(activeCaipAddress),
    status
  };
}
function useDisconnect() {
  async function disconnect() {
    await ConnectionController.disconnect();
  }
  return { disconnect };
}

// node_modules/@reown/appkit/dist/esm/src/library/react/index.js
var modal = void 0;
function getAppKit(appKit) {
  if (appKit) {
    modal = appKit;
  }
}
function useAppKitProvider(chainNamespace) {
  const { providers, providerIds } = useSnapshot(ProviderUtil.state);
  const walletProvider = providers[chainNamespace];
  const walletProviderType = providerIds[chainNamespace];
  return {
    walletProvider,
    walletProviderType
  };
}
function useAppKitTheme() {
  if (!modal) {
    throw new Error('Please call "createAppKit" before using "useAppKitTheme" hook');
  }
  function setThemeMode(themeMode2) {
    if (themeMode2) {
      modal == null ? void 0 : modal.setThemeMode(themeMode2);
    }
  }
  function setThemeVariables(themeVariables2) {
    if (themeVariables2) {
      modal == null ? void 0 : modal.setThemeVariables(themeVariables2);
    }
  }
  const [themeMode, setInternalThemeMode] = (0, import_react.useState)(modal.getThemeMode());
  const [themeVariables, setInternalThemeVariables] = (0, import_react.useState)(modal.getThemeVariables());
  (0, import_react.useEffect)(() => {
    const unsubscribe = modal == null ? void 0 : modal.subscribeTheme((state) => {
      setInternalThemeMode(state.themeMode);
      setInternalThemeVariables(state.themeVariables);
    });
    return () => {
      unsubscribe == null ? void 0 : unsubscribe();
    };
  }, []);
  return {
    themeMode,
    themeVariables,
    setThemeMode,
    setThemeVariables
  };
}
function useAppKit() {
  if (!modal) {
    throw new Error('Please call "createAppKit" before using "useAppKit" hook');
  }
  async function open(options) {
    await (modal == null ? void 0 : modal.open(options));
  }
  async function close() {
    await (modal == null ? void 0 : modal.close());
  }
  return { open, close };
}
function useWalletInfo() {
  if (!modal) {
    throw new Error('Please call "createAppKit" before using "useWalletInfo" hook');
  }
  const walletInfo = (0, import_react.useSyncExternalStore)(modal.subscribeWalletInfo, modal.getWalletInfo, modal.getWalletInfo);
  return { walletInfo };
}
function useAppKitState() {
  if (!modal) {
    throw new Error('Please call "createAppKit" before using "useAppKitState" hook');
  }
  const [state, setState] = (0, import_react.useState)(modal.getState());
  (0, import_react.useEffect)(() => {
    const unsubscribe = modal == null ? void 0 : modal.subscribeState((newState) => {
      setState({ ...newState });
    });
    return () => {
      unsubscribe == null ? void 0 : unsubscribe();
    };
  }, []);
  return state;
}
function useAppKitEvents() {
  if (!modal) {
    throw new Error('Please call "createAppKit" before using "useAppKitEvents" hook');
  }
  const [event, setEvents] = (0, import_react.useState)(modal.getEvent());
  (0, import_react.useEffect)(() => {
    const unsubscribe = modal == null ? void 0 : modal.subscribeEvents((newEvent) => {
      setEvents({ ...newEvent });
    });
    return () => {
      unsubscribe == null ? void 0 : unsubscribe();
    };
  }, []);
  return event;
}

// node_modules/@reown/appkit/dist/esm/exports/react.js
var modal2 = void 0;
function createAppKit(options) {
  if (!modal2) {
    modal2 = new AppKit({
      ...options,
      sdkVersion: CoreHelperUtil.generateSdkVersion(options.adapters ?? [], "react", PACKAGE_VERSION)
    });
    getAppKit(modal2);
  }
  return modal2;
}
function useAppKitNetwork() {
  const { caipNetwork, caipNetworkId, chainId } = useAppKitNetworkCore();
  function switchNetwork(network) {
    modal2 == null ? void 0 : modal2.switchNetwork(network);
  }
  return {
    caipNetwork,
    caipNetworkId,
    chainId,
    switchNetwork
  };
}
export {
  AccountController,
  AppKit,
  AppKitAccountButton,
  AppKitButton,
  AppKitConnectButton,
  AppKitNetworkButton,
  CoreHelperUtil,
  W3mAccountActivityWidget,
  W3mAccountAuthButton,
  W3mAccountButton,
  W3mAccountDefaultWidget,
  W3mAccountNftsWidget,
  W3mAccountSettingsView,
  W3mAccountTokensWidget,
  W3mAccountView,
  W3mAccountWalletFeaturesWidget,
  W3mActivityList,
  W3mAlertBar,
  W3mAllWalletsList,
  W3mAllWalletsListItem,
  W3mAllWalletsSearch,
  W3mAllWalletsView,
  W3mAllWalletsWidget,
  W3mApproveTransactionView,
  W3mButton,
  W3mBuyInProgressView,
  W3mChooseAccountNameView,
  W3mConnectAnnouncedWidget,
  W3mConnectButton,
  W3mConnectCustomWidget,
  W3mConnectExternalWidget,
  W3mConnectFeaturedWidget,
  W3mConnectInjectedWidget,
  W3mConnectMultiChainWidget,
  W3mConnectRecentWidget,
  W3mConnectRecommendedWidget,
  W3mConnectSocialsView,
  W3mConnectView,
  W3mConnectWalletConnectWidget,
  W3mConnectWalletsView,
  W3mConnectingExternalView,
  W3mConnectingFarcasterView,
  W3mConnectingHeader,
  W3mConnectingMultiChainView,
  W3mConnectingSocialView,
  W3mConnectingWcBrowser,
  W3mConnectingWcDesktop,
  W3mConnectingWcMobile,
  W3mConnectingWcQrcode,
  W3mConnectingWcUnsupported,
  W3mConnectingWcView,
  W3mConnectingWcWeb,
  W3mConnectorList,
  W3mDownloadsView,
  W3mEmailLoginWidget,
  W3mEmailVerifyDeviceView,
  W3mEmailVerifyOtpView,
  W3mGetWalletView,
  W3mHeader,
  W3mHelpWidget,
  W3mInputAddress,
  W3mInputCurrency,
  W3mInputToken,
  W3mLegalCheckbox,
  W3mLegalFooter,
  W3mMobileDownloadLinks,
  W3mNetworkButton,
  W3mNetworkSwitchView,
  W3mNetworksView,
  W3mOnRampActivityItem,
  W3mOnRampActivityView,
  W3mOnRampProviderItem,
  W3mOnRampProvidersFooter,
  W3mOnRampProvidersView,
  W3mOnrampFiatSelectView,
  W3mOnrampTokensView,
  W3mOnrampWidget,
  W3mProfileView,
  W3mRegisterAccountNameSuccess,
  W3mRegisterAccountNameView,
  W3mRouter,
  W3mSIWXSignMessageThumbnails,
  W3mSIWXSignMessageView,
  W3mSendSelectTokenView,
  W3mSnackBar,
  W3mSocialLoginList,
  W3mSocialLoginWidget,
  W3mSwapInput,
  W3mSwapInputSkeleton,
  W3mSwapPreviewView,
  W3mSwapSelectTokenView,
  W3mSwapView,
  W3mSwitchActiveChainView,
  W3mSwitchAddressView,
  W3mTooltip,
  W3mTransactionsView,
  W3mUnsupportedChainView,
  W3mUpdateEmailPrimaryOtpView,
  W3mUpdateEmailSecondaryOtpView,
  W3mUpdateEmailWalletView,
  W3mUpgradeToSmartAccountView,
  W3mUpgradeWalletView,
  W3mWalletCompatibleNetworksView,
  W3mWalletGuide,
  W3mWalletLoginList,
  W3mWalletReceiveView,
  W3mWalletSendDetails,
  W3mWalletSendPreviewView,
  W3mWalletSendView,
  W3mWhatIsABuyView,
  W3mWhatIsANetworkView,
  W3mWhatIsAWalletView,
  WcConstantsUtil,
  WcHelpersUtil,
  WuiSwapDetails,
  WuiTooltipTrigger,
  createAppKit,
  getAppKit,
  modal2 as modal,
  useAppKit,
  useAppKitAccount,
  useAppKitEvents,
  useAppKitNetwork,
  useAppKitNetworkCore,
  useAppKitProvider,
  useAppKitState,
  useAppKitTheme,
  useDisconnect,
  useWalletInfo
};
//# sourceMappingURL=@reown_appkit_react.js.map
