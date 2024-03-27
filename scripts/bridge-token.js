const Web3 = require('web3').default;
const HDWalletProvider = require('@truffle/hdwallet-provider');

async function main(){
  try{
const mnemonic = 'pumpkin blue basic arena chimney seat electric give cool song pizza excess';
    const chain = process.argv[2];
    const amountSmall = process.argv[3];
    let amount = amountSmall * 1000000000000000000
    let url = (chain === 'optimism' ? 'https://sepolia.optimism.io': 'https://sepolia.base.org')
    let channelSequence = (chain === 'optimism' ? "channel-10": "channel-11")
    const provider = new HDWalletProvider(mnemonic, url);
    const web3 = new Web3(provider);
    const contractABI = [
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "_middleware",
          "type": "address"
        }
      ],
      "stateMutability": "nonpayable",
      "type": "constructor"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": true,
          "internalType": "address",
          "name": "owner",
          "type": "address"
        },
        {
          "indexed": true,
          "internalType": "address",
          "name": "spender",
          "type": "address"
        },
        {
          "indexed": false,
          "internalType": "uint256",
          "name": "value",
          "type": "uint256"
        }
      ],
      "name": "Approval",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": true,
          "internalType": "address",
          "name": "previousOwner",
          "type": "address"
        },
        {
          "indexed": true,
          "internalType": "address",
          "name": "newOwner",
          "type": "address"
        }
      ],
      "name": "OwnershipTransferred",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": true,
          "internalType": "address",
          "name": "from",
          "type": "address"
        },
        {
          "indexed": true,
          "internalType": "address",
          "name": "to",
          "type": "address"
        },
        {
          "indexed": false,
          "internalType": "uint256",
          "name": "value",
          "type": "uint256"
        }
      ],
      "name": "Transfer",
      "type": "event"
    },
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "name": "ackPackets",
      "outputs": [
        {
          "internalType": "bytes32",
          "name": "channelId",
          "type": "bytes32"
        },
        {
          "components": [
            {
              "internalType": "bytes32",
              "name": "srcPortAddr",
              "type": "bytes32"
            },
            {
              "internalType": "uint256",
              "name": "mwBitmap",
              "type": "uint256"
            },
            {
              "internalType": "bytes32",
              "name": "destPortAddr",
              "type": "bytes32"
            },
            {
              "internalType": "bytes",
              "name": "appData",
              "type": "bytes"
            }
          ],
          "internalType": "struct UniversalPacket",
          "name": "packet",
          "type": "tuple"
        },
        {
          "components": [
            {
              "internalType": "bool",
              "name": "success",
              "type": "bool"
            },
            {
              "internalType": "bytes",
              "name": "data",
              "type": "bytes"
            }
          ],
          "internalType": "struct AckPacket",
          "name": "ack",
          "type": "tuple"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "owner",
          "type": "address"
        },
        {
          "internalType": "address",
          "name": "spender",
          "type": "address"
        }
      ],
      "name": "allowance",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "spender",
          "type": "address"
        },
        {
          "internalType": "uint256",
          "name": "amount",
          "type": "uint256"
        }
      ],
      "name": "approve",
      "outputs": [
        {
          "internalType": "bool",
          "name": "",
          "type": "bool"
        }
      ],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "middleware",
          "type": "address"
        }
      ],
      "name": "authorizeMiddleware",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "",
          "type": "address"
        }
      ],
      "name": "authorizedMws",
      "outputs": [
        {
          "internalType": "bool",
          "name": "",
          "type": "bool"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "account",
          "type": "address"
        }
      ],
      "name": "balanceOf",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "destPortAddr",
          "type": "address"
        },
        {
          "internalType": "bytes32",
          "name": "channelId",
          "type": "bytes32"
        },
        {
          "internalType": "uint256",
          "name": "amount",
          "type": "uint256"
        }
      ],
      "name": "bridgePolymerToken",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "decimals",
      "outputs": [
        {
          "internalType": "uint8",
          "name": "",
          "type": "uint8"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "spender",
          "type": "address"
        },
        {
          "internalType": "uint256",
          "name": "subtractedValue",
          "type": "uint256"
        }
      ],
      "name": "decreaseAllowance",
      "outputs": [
        {
          "internalType": "bool",
          "name": "",
          "type": "bool"
        }
      ],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "spender",
          "type": "address"
        },
        {
          "internalType": "uint256",
          "name": "addedValue",
          "type": "uint256"
        }
      ],
      "name": "increaseAllowance",
      "outputs": [
        {
          "internalType": "bool",
          "name": "",
          "type": "bool"
        }
      ],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "mw",
      "outputs": [
        {
          "internalType": "address",
          "name": "",
          "type": "address"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "name",
      "outputs": [
        {
          "internalType": "string",
          "name": "",
          "type": "string"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "bytes32",
          "name": "channelId",
          "type": "bytes32"
        },
        {
          "components": [
            {
              "internalType": "bytes32",
              "name": "srcPortAddr",
              "type": "bytes32"
            },
            {
              "internalType": "uint256",
              "name": "mwBitmap",
              "type": "uint256"
            },
            {
              "internalType": "bytes32",
              "name": "destPortAddr",
              "type": "bytes32"
            },
            {
              "internalType": "bytes",
              "name": "appData",
              "type": "bytes"
            }
          ],
          "internalType": "struct UniversalPacket",
          "name": "packet",
          "type": "tuple"
        }
      ],
      "name": "onRecvUniversalPacket",
      "outputs": [
        {
          "components": [
            {
              "internalType": "bool",
              "name": "success",
              "type": "bool"
            },
            {
              "internalType": "bytes",
              "name": "data",
              "type": "bytes"
            }
          ],
          "internalType": "struct AckPacket",
          "name": "ackPacket",
          "type": "tuple"
        }
      ],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "bytes32",
          "name": "channelId",
          "type": "bytes32"
        },
        {
          "components": [
            {
              "internalType": "bytes32",
              "name": "srcPortAddr",
              "type": "bytes32"
            },
            {
              "internalType": "uint256",
              "name": "mwBitmap",
              "type": "uint256"
            },
            {
              "internalType": "bytes32",
              "name": "destPortAddr",
              "type": "bytes32"
            },
            {
              "internalType": "bytes",
              "name": "appData",
              "type": "bytes"
            }
          ],
          "internalType": "struct UniversalPacket",
          "name": "packet",
          "type": "tuple"
        }
      ],
      "name": "onTimeoutUniversalPacket",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "bytes32",
          "name": "channelId",
          "type": "bytes32"
        },
        {
          "components": [
            {
              "internalType": "bytes32",
              "name": "srcPortAddr",
              "type": "bytes32"
            },
            {
              "internalType": "uint256",
              "name": "mwBitmap",
              "type": "uint256"
            },
            {
              "internalType": "bytes32",
              "name": "destPortAddr",
              "type": "bytes32"
            },
            {
              "internalType": "bytes",
              "name": "appData",
              "type": "bytes"
            }
          ],
          "internalType": "struct UniversalPacket",
          "name": "packet",
          "type": "tuple"
        },
        {
          "components": [
            {
              "internalType": "bool",
              "name": "success",
              "type": "bool"
            },
            {
              "internalType": "bytes",
              "name": "data",
              "type": "bytes"
            }
          ],
          "internalType": "struct AckPacket",
          "name": "ack",
          "type": "tuple"
        }
      ],
      "name": "onUniversalAcknowledgement",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "owner",
      "outputs": [
        {
          "internalType": "address",
          "name": "",
          "type": "address"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "name": "recvedPackets",
      "outputs": [
        {
          "internalType": "bytes32",
          "name": "channelId",
          "type": "bytes32"
        },
        {
          "components": [
            {
              "internalType": "bytes32",
              "name": "srcPortAddr",
              "type": "bytes32"
            },
            {
              "internalType": "uint256",
              "name": "mwBitmap",
              "type": "uint256"
            },
            {
              "internalType": "bytes32",
              "name": "destPortAddr",
              "type": "bytes32"
            },
            {
              "internalType": "bytes",
              "name": "appData",
              "type": "bytes"
            }
          ],
          "internalType": "struct UniversalPacket",
          "name": "packet",
          "type": "tuple"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "renounceOwnership",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "_middleware",
          "type": "address"
        }
      ],
      "name": "setDefaultMw",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "symbol",
      "outputs": [
        {
          "internalType": "string",
          "name": "",
          "type": "string"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "name": "timeoutPackets",
      "outputs": [
        {
          "internalType": "bytes32",
          "name": "channelId",
          "type": "bytes32"
        },
        {
          "components": [
            {
              "internalType": "bytes32",
              "name": "srcPortAddr",
              "type": "bytes32"
            },
            {
              "internalType": "uint256",
              "name": "mwBitmap",
              "type": "uint256"
            },
            {
              "internalType": "bytes32",
              "name": "destPortAddr",
              "type": "bytes32"
            },
            {
              "internalType": "bytes",
              "name": "appData",
              "type": "bytes"
            }
          ],
          "internalType": "struct UniversalPacket",
          "name": "packet",
          "type": "tuple"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "totalSupply",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "to",
          "type": "address"
        },
        {
          "internalType": "uint256",
          "name": "amount",
          "type": "uint256"
        }
      ],
      "name": "transfer",
      "outputs": [
        {
          "internalType": "bool",
          "name": "",
          "type": "bool"
        }
      ],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "from",
          "type": "address"
        },
        {
          "internalType": "address",
          "name": "to",
          "type": "address"
        },
        {
          "internalType": "uint256",
          "name": "amount",
          "type": "uint256"
        }
      ],
      "name": "transferFrom",
      "outputs": [
        {
          "internalType": "bool",
          "name": "",
          "type": "bool"
        }
      ],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "newOwner",
          "type": "address"
        }
      ],
      "name": "transferOwnership",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "stateMutability": "payable",
      "type": "receive"
    }
  ]
    const contract = new web3.eth.Contract(contractABI, '0x844a848Ed12be1D39518d6706d66Bed24c9d52cA');

    const channel = web3.utils.padRight(web3.utils.asciiToHex(channelSequence), 64);

    const method = contract.methods.bridgePolymerToken('0x844a848Ed12be1D39518d6706d66Bed24c9d52cA', channel, amount);
    
    const account = (await web3.eth.getAccounts())[0];
    const tx = method.send({ from: account });
    
    tx.on('transactionHash', (hash) => {
      console.log('Transaction hash:', hash);
    });
    
    tx.on('receipt', (receipt) => {
      console.log('Receipt:', receipt);
    });
    
    tx.on('error', (error) => {
      console.error('Error:', error);
    });
  }catch(e){
    console.error('----', e)
  }
    
}
main().catch(error => {
    console.error(error);
    process.exit(1);
});