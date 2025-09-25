import { useState, useEffect, useCallback } from 'react';
import { ethers } from 'ethers';

const CONTRACT_ADDRESS = '0x556cAAa810377c85c88A941f58Bf69E3A38C4219';
const AIRDROP_WALLET_ADDRESS = '0x2C12cC11D340fF52eE86C011BFABc1385194FeBd';
const INITIAL_AIRDROP_AMOUNT = 2475000;
const RPC_URL = 'https://polygon-amoy.g.alchemy.com/v2/w0MZZesWSdzLRs_VJIfPO';

// Minimal ABI containing only the balanceOf function
const CONTRACT_ABI = [
  {
    "inputs": [{"internalType": "address", "name": "account", "type": "address"}],
    "name": "balanceOf",
    "outputs": [{"internalType": "uint256", "name": "", "type": "uint256"}],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "decimals",
    "outputs": [{"internalType": "uint8", "name": "", "type": "uint8"}],
    "stateMutability": "view",
    "type": "function"
  }
];

interface AirdropStats {
  totalTransferred: string;
  isLoading: boolean;
  error: string | null;
}

export function useAirdropStats(): AirdropStats {
  const [totalTransferred, setTotalTransferred] = useState<string>('0');
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  const fetchAirdropData = useCallback(async () => {
    try {
      setError(null);
      
      // Create provider and contract instance
      const provider = new ethers.JsonRpcProvider(RPC_URL);
      const contract = new ethers.Contract(CONTRACT_ADDRESS, CONTRACT_ABI, provider);
      
      // Fetch current balance of airdrop wallet and decimals
      const [currentBalanceRaw, decimals] = await Promise.all([
        contract.balanceOf(AIRDROP_WALLET_ADDRESS),
        contract.decimals()
      ]);
      
      // Format the current balance (convert from wei to human readable)
      const currentBalance = parseFloat(ethers.formatUnits(currentBalanceRaw, decimals));
      
      // Calculate total transferred: Initial Amount - Current Balance
      const transferred = INITIAL_AIRDROP_AMOUNT - currentBalance;
      
      // Ensure we don't show negative numbers (in case of calculation errors)
      const transferredAmount = Math.max(0, transferred);
      
      // Format with commas for display
      const formattedTransferred = new Intl.NumberFormat('en-US', {
        maximumFractionDigits: 0
      }).format(transferredAmount);
      
      setTotalTransferred(formattedTransferred);
      setIsLoading(false);
    } catch (err) {
      console.error('Error fetching airdrop data:', err);
      setError(err instanceof Error ? err.message : 'Failed to fetch airdrop data');
      setIsLoading(false);
    }
  }, []);

  useEffect(() => {
    // Fetch data immediately
    fetchAirdropData();
    
    // Set up interval to refresh every minute (60 seconds)
    const interval = setInterval(fetchAirdropData, 60000);
    
    // Cleanup interval on unmount
    return () => clearInterval(interval);
  }, [fetchAirdropData]);

  return {
    totalTransferred,
    isLoading,
    error
  };
}