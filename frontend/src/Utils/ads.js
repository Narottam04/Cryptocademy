import {
  AdMob,
  InterstitialAdPluginEvents,
  RewardAdPluginEvents
} from "@capacitor-community/admob";

export async function interstitial() {
  AdMob.addListener(InterstitialAdPluginEvents.Loaded, (info) => {
    // Subscribe prepared interstitial
  });

  const options = {
    adId: "ca-app-pub-7061809165741443/6308883705"
    // testing
    // adId: "ca-app-pub-3940256099942544/103317371212",
    // isTesting: true
    // npa: true
  };
  await AdMob.prepareInterstitial(options);
  await AdMob.showInterstitial();
}

export async function rewardVideo() {
  AdMob.addListener(RewardAdPluginEvents.Loaded, (info) => {
    // Subscribe prepared rewardVideo
  });

  AdMob.addListener(RewardAdPluginEvents.Rewarded, (rewardItem) => {
    // Subscribe user rewarded
    console.log(rewardItem);
  });

  const options = {
    adId: "ca-app-pub-7061809165741443/1873184363"
    // isTesting: true
    // npa: true
    // ssv: {
    //   userId: "A user ID to send to your SSV"
    //   customData: JSON.stringify({ ...MyCustomData })
    //}
  };
  await AdMob.prepareRewardVideoAd(options);
  const rewardItem = await AdMob.showRewardVideoAd();
}
