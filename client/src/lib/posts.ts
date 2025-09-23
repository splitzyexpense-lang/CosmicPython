// Blog post management utilities
// In a production environment, this would connect to a CMS or database

interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  date: string;
  author?: string;
  category: string;
  featured?: boolean;
}

// Static post data - in production this would come from a CMS or markdown files
const posts: BlogPost[] = [
  {
    slug: "app-launch-beta",
    title: "Astralux Mobile App Beta Testing Begins",
    excerpt: "We're excited to announce the start of beta testing for the Astralux mobile app. Selected users can now experience our revolutionary ad-to-earn platform.",
    content: `
      <p>Today marks a significant milestone in the Astralux journey as we officially launch our mobile app beta testing program. After months of development and preparation, we're ready to put our revolutionary ad-to-earn platform in the hands of real users.</p>
      
      <h2>What's Included in the Beta</h2>
      <p>Beta testers will have access to:</p>
      <ul>
        <li>Complete ad viewing and earning functionality</li>
        <li>Mini-token accumulation and tracking</li>
        <li>Referral system with bonus rewards</li>
        <li>Real-time statistics and progress monitoring</li>
        <li>Initial airdrop request capabilities</li>
      </ul>
      
      <h2>How to Join the Beta</h2>
      <p>We've selected an initial group of 1,000 beta testers based on community engagement and early interest. If you haven't received an invitation yet, don't worry - we'll be expanding the beta program throughout December and January.</p>
      
      <h2>Feedback and Support</h2>
      <p>Beta testing is crucial for identifying issues and improving the user experience before our public launch. We encourage all beta testers to:</p>
      <ul>
        <li>Report any bugs or technical issues</li>
        <li>Share feedback on the user interface and experience</li>
        <li>Test all earning mechanisms thoroughly</li>
        <li>Provide suggestions for improvements</li>
      </ul>
      
      <h2>What's Next</h2>
      <p>Based on beta feedback, we'll be implementing final improvements and preparing for our public launch in Q4 2025. The beta testing phase is expected to last 4-6 weeks, giving us ample time to polish the experience.</p>
      
      <p>Thank you to our amazing community for your patience and support. This is just the beginning of the Astralux revolution!</p>
    `,
    date: "December 15, 2024",
    author: "Astralux Team",
    category: "Product Update",
    featured: true
  },
  {
    slug: "audit-completed",
    title: "Smart Contract Audit Completed Successfully",
    excerpt: "Our smart contracts have passed comprehensive security audits with no critical issues found. Full audit report now available for public review.",
    content: `
      <p>We're pleased to announce that Astralux smart contracts have successfully completed a comprehensive security audit conducted by leading blockchain security firm CertiK. The audit found no critical vulnerabilities and confirmed the security and reliability of our token distribution mechanisms.</p>
      
      <h2>Audit Scope</h2>
      <p>The security audit covered:</p>
      <ul>
        <li>ASLX token contract (ERC-20 implementation)</li>
        <li>Airdrop distribution mechanism</li>
        <li>Future staking contract architecture</li>
        <li>Governance system smart contracts</li>
        <li>Access control and privilege management</li>
      </ul>
      
      <h2>Key Findings</h2>
      <p>The audit identified several areas of strength in our implementation:</p>
      <ul>
        <li><strong>Secure Token Economics:</strong> Fixed supply mechanism properly implemented</li>
        <li><strong>Robust Access Controls:</strong> Multi-signature requirements for critical functions</li>
        <li><strong>Efficient Gas Usage:</strong> Optimized batch processing for airdrops</li>
        <li><strong>Upgrade Safety:</strong> Proper implementation of upgradeable proxy patterns</li>
      </ul>
      
      <h2>Transparency and Trust</h2>
      <p>In line with our commitment to transparency, the complete audit report is now available for public review. You can find detailed technical analysis, testing procedures, and recommendations in the full document.</p>
      
      <h2>Contract Verification</h2>
      <p>All Astralux smart contracts are verified on PolygonScan, allowing anyone to review the source code and confirm its integrity. This level of transparency is fundamental to building trust in the Astralux ecosystem.</p>
      
      <p>Security is a top priority for Astralux, and this successful audit represents a crucial milestone in our journey toward launch. We remain committed to maintaining the highest security standards as we grow.</p>
    `,
    date: "December 8, 2024",
    author: "Security Team",
    category: "Security",
    featured: true
  }
];

export function getAllPosts(): BlogPost[] {
  return posts.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
}

export function getPostBySlug(slug: string): BlogPost {
  const post = posts.find(p => p.slug === slug);
  if (!post) {
    throw new Error(`Post not found: ${slug}`);
  }
  return post;
}

export function getFeaturedPosts(): BlogPost[] {
  return posts.filter(post => post.featured);
}

export function getPostsByCategory(category: string): BlogPost[] {
  return posts.filter(post => post.category === category);
}

// Utility function to convert markdown to HTML (placeholder implementation)
export function markdownToHtml(markdown: string): string {
  // In production, this would use a proper markdown parser like marked or remark
  return markdown
    .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
    .replace(/\*(.*?)\*/g, '<em>$1</em>')
    .replace(/\n/g, '<br>');
}
