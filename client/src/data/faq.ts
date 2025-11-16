export const faqData = [
  // Getting Started
  {
    question: "What is Astralux?",
    answer: "Astralux is a mobile cryptocurrency mining app that allows you to earn ASLX tokens by watching ads. It's a legitimate way to enter the crypto world without any investment. ASLX is a real token on the Polygon blockchain that you fully own and control."
  },
  {
    question: "How do I start earning?",
    answer: "Simply open the app, go to the Mine screen, and tap the Mine button every hour. You'll watch a short ad (15-30 seconds) and earn tokens instantly. The more consistent you are, the more you earn through daily streak bonuses!"
  },
  {
    question: "Do I need to invest money?",
    answer: "No! Astralux is 100% free. You don't need to deposit money, buy tokens, or pay any fees. Your only \"investment\" is watching ads, which takes less than 30 seconds per hour."
  },

  // Mining
  {
    question: "How does mining work?",
    answer: "Mining in Astralux means watching a rewarded ad every hour. When you tap Mine, you watch a 15-30 second advertisement, and in return, you receive mini tokens. It's not traditional crypto mining (no computing power needed) - it's ad-supported mining."
  },
  {
    question: "How much can I earn per hour?",
    answer: "You earn 1 mini token per hour through regular mining. With daily streak bonuses, this increases significantly. A 10-day streak gives you an extra 100 mini tokens as a bonus reward. Consistency is key!"
  },
  {
    question: "What is the daily streak bonus?",
    answer: "If you mine at least once per day for 10 consecutive days, you receive a 100 mini token bonus! The streak counter resets if you miss a day, so try to mine daily. You can mine multiple times per day, but one mine per day maintains your streak."
  },
  {
    question: "Why can I only mine once per hour?",
    answer: "The 1-hour cooldown prevents abuse and ensures fair distribution of tokens. It also helps us manage ad inventory and keeps the token economy sustainable. This model is similar to apps like Pi Network."
  },
  {
    question: "Can I mine on multiple devices?",
    answer: "No. One account per person is enforced through phone verification. Mining on multiple devices with the same account won't give extra rewards - the cooldown is account-based, not device-based."
  },

  // Ads & Revenue
  {
    question: "Why do I need to watch ads?",
    answer: "Ads are the revenue source that makes Astralux FREE for you. When you watch an ad, advertisers pay us, and we share that revenue with you in the form of ASLX tokens. This is how we can offer real cryptocurrency without you investing money.<br/><br/>Ad revenue also covers:<br/>• Transaction fees on the Polygon blockchain<br/>• Server and infrastructure costs<br/>• Future exchange listing fees (CoinGecko, CoinMarketCap)<br/>• Development and maintenance<br/>• Marketing to grow the community"
  },
  {
    question: "How does Astralux make money?",
    answer: "We earn a small portion from ads while distributing most of the revenue to users as tokens. We also retain a percentage of tokens for:<br/>• Liquidity pool provision<br/>• Team development fund<br/>• Marketing and partnerships<br/>• Exchange listing reserves<br/><br/>This model ensures long-term sustainability while keeping the app free for users."
  },
  {
    question: "What if ads don't load?",
    answer: "We use multiple ad networks (AdMob, Unity Ads, AppLovin) to ensure 95%+ ad availability. If an ad fails to load:<br/>• Check your internet connection<br/>• Try again in a few seconds<br/>• Ensure you're not using a VPN that blocks ads<br/>• Update the app to the latest version<br/><br/>Ads are essential for the app to work - without ad revenue, we can't distribute tokens."
  },
  {
    question: "Are ads safe?",
    answer: "Yes! We only work with reputable ad networks (Google AdMob, Unity, AppLovin) that strictly screen advertisers. All ads are reviewed before being shown. We never show:<br/>• Malware or phishing ads<br/>• Adult content<br/>• Scam or fraudulent offers<br/><br/>Your safety is our priority."
  },

  // Wallet & Security
  {
    question: "Is my wallet secure?",
    answer: "Extremely secure! Your wallet uses:<br/>• Bank-level encryption<br/>• Biometric authentication (fingerprint/face ID)<br/>• Local storage (keys never leave your device)<br/>• Industry-standard HD wallet technology<br/><br/>Your private keys are stored ONLY on your device. We never have access to your funds - you have complete control."
  },
  {
    question: "What is a seed phrase and why is it important?",
    answer: "Your seed phrase (24 words) is the master key to your wallet. It allows you to:<br/>• Recover your wallet if you lose your phone<br/>• Import your wallet to MetaMask or other apps<br/>• Access your tokens from anywhere<br/><br/>⚠️ CRITICAL: Write down your seed phrase on paper and store it safely. Never share it with anyone, including Astralux support. Anyone with your seed phrase can access your funds!"
  },
  {
    question: "Can I use my wallet in MetaMask?",
    answer: "Yes! Your Astralux wallet is a real Ethereum-compatible wallet on Polygon. You can:<br/>1. Export your seed phrase from Settings<br/>2. Import it into MetaMask or Trust Wallet<br/>3. See the same tokens and address<br/>4. Send tokens anywhere<br/><br/>This proves you truly own your crypto - not us!"
  },
  {
    question: "What if I lose my phone?",
    answer: "If you have your 24-word seed phrase saved:<br/>1. Install Astralux on your new phone<br/>2. Import wallet using your seed phrase<br/>3. All your tokens will be restored<br/><br/>Without the seed phrase, funds are PERMANENTLY LOST. This is how true crypto ownership works - no company can recover your funds."
  },
  {
    question: "What is Polygon network?",
    answer: "Polygon is a Layer 2 scaling solution for Ethereum. Benefits:<br/>• 100x cheaper fees than Ethereum<br/>• Faster transactions (2-3 seconds)<br/>• Same security as Ethereum<br/>• Compatible with MetaMask<br/>• Growing ecosystem<br/><br/>We chose Polygon for affordability - you can actually use your tokens without expensive fees!"
  },
  {
    question: "Why is my balance sometimes slow to load?",
    answer: "Yes, it's normal to occasionally have issues fetching blockchain data. Network latency, RPC rate limits, and chain congestion can cause delays. The app automatically:<br/>• Retries with multiple RPC endpoints<br/>• Uses exponential backoff between retries<br/>• Caches recent balance data<br/><br/>If balance doesn't load, tap the refresh button. The blockchain is decentralized, so occasional delays are expected - your tokens are always safe on-chain!"
  },

  // Conversion & Withdrawal
  {
    question: "How do I convert mini tokens to ASLX?",
    answer: "Go to the Wallet screen and tap \"Convert\". The conversion rate is:<br/>• 1000 mini = 1 ASLX<br/><br/>Once converted, ASLX tokens are real cryptocurrency on the Polygon blockchain. You can hold them, transfer them, or eventually sell them on exchanges."
  },
  {
    question: "Why do I need phone verification?",
    answer: "Phone verification (one-time only) is required to withdraw ASLX tokens to external wallets. This:<br/>• Prevents bot abuse and multi-accounting<br/>• Ensures one person = one account<br/>• Protects the token economy<br/>• Complies with anti-fraud regulations<br/><br/>You need 200 ASLX to unlock phone verification. Your number is private and never shared."
  },
  {
    question: "Can I withdraw tokens to my bank account?",
    answer: "Not directly. ASLX is cryptocurrency, not fiat money. To get cash:<br/>1. Accumulate ASLX tokens<br/>2. Wait for exchange listings (CoinGecko, Uniswap)<br/>3. Transfer ASLX to an exchange<br/>4. Sell ASLX for USDC or MATIC<br/>5. Withdraw to your bank via the exchange<br/><br/>This is standard for all cryptocurrencies. We're working on exchange listings!"
  },
  {
    question: "When can I sell ASLX tokens?",
    answer: "ASLX will be listed on exchanges once we:<br/>• Reach sufficient user base (target: 10,000+ users)<br/>• Create liquidity pools on QuickSwap (Polygon DEX)<br/>• Apply for CoinGecko and CoinMarketCap listings<br/>• Partner with centralized exchanges<br/><br/>You can track our progress in the Feeds section. Token listings typically take 3-6 months for new projects."
  },
  {
    question: "What are transaction fees?",
    answer: "Blockchain transactions require \"gas fees\" paid in MATIC (Polygon's native token). Fees are very low on Polygon:<br/>• Conversion: ~$0.01<br/>• Withdrawal: ~$0.02-0.05<br/>• Transfers: ~$0.01-0.03<br/><br/>Ad revenue helps cover these fees. You may need a tiny amount of MATIC in your wallet for withdrawals."
  },
  {
    question: "How long do withdrawals take?",
    answer: "Withdrawals on Polygon are fast:<br/>• Transaction confirmation: 2-3 seconds<br/>• Visible in destination wallet: 5-10 seconds<br/>• Fully confirmed: ~30 seconds<br/><br/>Much faster than Bitcoin (10+ minutes) or Ethereum (2-5 minutes)!"
  },

  // Referrals
  {
    question: "How does the referral system work?",
    answer: "Share your unique referral code with friends. When they:<br/>1. Sign up using your code<br/>2. Mine regularly and reach 200 ASLX balance<br/>3. You receive 250 mini tokens as a bonus!<br/><br/>Unlimited referrals = unlimited earning potential. Help friends discover crypto while earning!"
  },
  {
    question: "Why haven't I received my referral bonus?",
    answer: "You receive the bonus ONLY when your referral reaches 200 ASLX. This ensures:<br/>• Real, active users (not fake accounts)<br/>• Fair rewards for genuine referrals<br/>• Sustainable token economy<br/><br/>Track your referrals' progress in the Referrals screen."
  },
  {
    question: "Can I refer myself with multiple accounts?",
    answer: "No. Multi-accounting violates our Terms of Service and can result in:<br/>• Account suspension<br/>• Forfeiture of all tokens<br/>• Ban from the platform<br/><br/>Phone verification prevents multi-accounting. Play fair - there's enough for everyone!"
  },

  // Legitimacy & Trust
  {
    question: "Is Astralux a scam?",
    answer: "No! Here's proof of legitimacy:<br/><br/>✅ Real Blockchain Contract: ASLX exists on Polygon mainnet (verifiable on PolygonScan)<br/>✅ Non-Custodial Wallet: You control your private keys, not us<br/>✅ Transparent Tokenomics: Fixed supply, no hidden pre-mine<br/>✅ Open Source Intent: Code will be open-sourced after launch<br/>✅ No Investment Required: 100% free, no deposits<br/>✅ Export Seed Phrase: Proves you own the crypto<br/>✅ Real Ad Revenue: Sustainable business model<br/><br/>Scams require money upfront - we don't. You can verify everything on the blockchain!"
  },
  {
    question: "What makes Astralux different from other mining apps?",
    answer: "Key differences:<br/><br/>1. REAL CRYPTO: ASLX is on Polygon blockchain, not fake in-app points<br/>2. TRUE OWNERSHIP: Export your seed phrase, use in MetaMask<br/>3. NO INVESTMENT: Free forever, ads pay for everything<br/>4. TRANSPARENT: Verify contract on PolygonScan<br/>5. SUSTAINABLE: Ad-supported model, not pyramid scheme<br/>6. SECURITY FIRST: Bank-level encryption, biometric auth<br/>7. FAST WITHDRAWALS: Polygon = cheap, fast transactions<br/>8. FAIR DISTRIBUTION: No pre-sale, no team dump<br/><br/>Many \"mining\" apps give fake points with no blockchain backing. Astralux uses real blockchain technology."
  },
  {
    question: "How is this not a Ponzi scheme?",
    answer: "Ponzi schemes:<br/>• Require money investment<br/>• Pay old users with new users' money<br/>• Collapse when new users stop joining<br/><br/>Astralux:<br/>• FREE - no investment<br/>• Revenue from ads (external source)<br/>• Sustainable regardless of new users<br/>• Real blockchain token with utility<br/><br/>Our model is similar to free-to-play games (ad-supported) but with crypto rewards instead of in-game currency."
  },
  {
    question: "Where can I verify the ASLX token?",
    answer: "ASLX is verifiable on Polygon blockchain:<br/><br/>1. Go to polygonscan.com<br/>2. Search for ASLX token contract address<br/>3. See all transactions, supply, holders<br/>4. Verify it's a real ERC-20 token<br/><br/>Contract address is available in app Settings. This transparency is impossible with fake apps!"
  },
  {
    question: "Who is behind Astralux?",
    answer: "Astralux is developed by a crypto-focused team with:<br/>• Blockchain development experience<br/>• Commitment to fair distribution<br/>• Transparent communication<br/>• Community-first approach<br/><br/>We're building a sustainable crypto ecosystem where everyone can participate without financial barriers. Updates and roadmap are shared in the Feeds section."
  },
  {
    question: "What if Astralux shuts down?",
    answer: "Even if the app shuts down, YOUR TOKENS ARE SAFE because:<br/>• They exist on Polygon blockchain (permanent)<br/>• You have the seed phrase (full control)<br/>• You can import to MetaMask anytime<br/>• Tokens can be traded on DEXs<br/><br/>This is the power of decentralization - no single company controls your funds!"
  },
  {
    question: "Why should I trust Astralux over competitors?",
    answer: "Trust factors:<br/><br/>1. VERIFIABLE: Check blockchain yourself<br/>2. NON-CUSTODIAL: We can't access your funds<br/>3. NO MONEY REQUIRED: Zero financial risk<br/>4. TRANSPARENT: Open about tokenomics and revenue<br/>5. SECURITY FOCUSED: Industry-standard encryption<br/>6. AD-SUPPORTED: Real, sustainable revenue model<br/>7. COMMUNITY DRIVEN: User feedback shapes development<br/>8. EXPORT FRIENDLY: Take your tokens anywhere<br/><br/>Don't just trust us - verify everything on the blockchain!"
  },

  // Additional Common Questions
  {
    question: "What are the system requirements?",
    answer: "Minimum requirements:<br/>• Android 7.0 or higher<br/>• 100MB free storage<br/>• Internet connection (WiFi or mobile data)<br/>• Google Play Services<br/><br/>Recommended:<br/>• Android 10+<br/>• Stable internet connection<br/>• Biometric authentication enabled"
  }
];
