import React from 'react';

const Screen: React.FC = () => {
  return (
    <div className="min-h-screen bg-[#181622] flex flex-col w-full  p-2">
      <div className="w-full max-w-4xl flex gap-8">
        {/* Left Side: Image and Accordion */}
        <div className="flex flex-col items-center" style={{ width: 380 }}>
          <div className="bg-[#232135] rounded-2xl p-4 w-full flex flex-col items-center">
            <img
              src="https://cryptopunks.app/cryptopunks/cryptopunk7703.png"
              alt="CryptoPunk"
              className="rounded-xl w-full"
              style={{ height: 200, objectFit: 'cover' }}
            />
            {/* Accordion */}
            <div className="w-full mt-2">
              <details className="mb-2 bg-[#232135] rounded-lg">
                <summary className="cursor-pointer px-4 py-3 text-white font-semibold flex items-center justify-between">
                  Collection Info <span className="text-xl">▾</span>
                </summary>
                <div className="px-4 py-2 text-gray-300 text-sm">
                  Some collection info here...
                </div>
              </details>
              <details className="mb-2 bg-[#232135] rounded-lg">
                <summary className="cursor-pointer px-4 py-3 text-white font-semibold flex items-center justify-between">
                  Details <span className="text-xl">▾</span>
                </summary>
                <div className="px-4 py-2 text-gray-300 text-sm">
                  Some details here...
                </div>
              </details>
              <details className="bg-[#232135] rounded-lg">
                <summary className="cursor-pointer px-4 py-3 text-white font-semibold flex items-center justify-between">
                  Traits <span className="text-xl">▾</span>
                </summary>
                <div className="px-4 py-2 text-gray-300 text-sm">
                  Some traits here...
                </div>
              </details>
            </div>
          </div>
        </div>
        {/* Right Side: Main Info, Actions, and Tabs */}
        <div className="flex-1 flex flex-col gap-6">
          {/* Header */}
          <div className="flex items-start gap-4 mb-6">
            <img
              src="https://cryptopunks.app/cryptopunks/cryptopunk7703.png"
              alt="CryptoPunk"
              className="rounded-xl w-20 h-20 object-cover"
            />
            <div className="flex flex-col gap-1">
              <div className="flex items-center gap-2">
                <span className="text-2xl font-bold text-white">
                  CryptoPunks
                </span>
                <span className="ml-1 text-xs text-blue-400">●</span>
              </div>
              <div className="text-gray-400 text-lg font-semibold">#7703</div>
              <div className="flex gap-2 mt-1">
                <span className="bg-[#232135] text-gray-300 rounded-full px-3 py-1 text-xs border border-gray-600">
                  #86
                </span>
                <span className="bg-[#232135] text-gray-300 rounded-full px-3 py-1 text-xs border border-gray-600">
                  #3238
                </span>
              </div>
            </div>
          </div>
          {/* Info Row */}
          <div className="flex flex-wrap gap-8 text-white text-base font-medium mb-6 ">
            <div>
              <div className="text-gray-400 text-xs mb-1">Created By</div>
              <div className="font-semibold truncate">Crypt...unks</div>
            </div>
            <div>
              <div className="text-gray-400 text-xs mb-1">Created Date</div>
              <div className="font-semibold">2022-09-13</div>
            </div>
            <div>
              <div className="text-gray-400 text-xs mb-1">Owner</div>
              <div className="font-semibold">0xa2...7aa7</div>
            </div>
            <div>
              <div className="text-gray-400 text-xs mb-1">Floor Price</div>
              <div className="font-semibold">42.69</div>
            </div>
            <div>
              <div className="text-gray-400 text-xs mb-1">Supply</div>
              <div className="font-semibold">9,996</div>
            </div>
            <div>
              <div className="text-gray-400 text-xs mb-1">Type</div>
              <div className="font-semibold">cryptopunks</div>
            </div>
          </div>
          {/* Card with Price and Actions */}
          <div className="bg-[#181622] rounded-xl p-6 border border-gray-700 mb-6">
            <div className="text-gray-400 text-sm mb-2">
              Listed Price{' '}
              <span className="text-white font-semibold">Ξ 42.69</span>{' '}
              <span className="text-gray-400">$110.01k</span>
            </div>
            <div className="flex gap-6 mb-4">
              <button
                className="bg-[#5a4ff3] hover:bg-[#6c5ffc] text-white font-bold py-4 text-xl rounded-lg flex-1"
                style={{ minWidth: '320px' }}
              >
                Buy Now
              </button>
              <button
                className="bg-transparent border border-gray-500 text-white font-bold py-4 text-xl rounded-lg flex-1"
                style={{ minWidth: '320px' }}
              >
                Make Offer
              </button>
              <button
                className="bg-transparent border border-gray-500 text-white font-bold py-4 text-xl rounded-lg flex-1"
                style={{ minWidth: '320px' }}
              >
                Add to Cart
              </button>
            </div>
            <div className="mt-2">
              <div className="text-white font-semibold text-lg mb-2">
                Current Bids
              </div>
              <div className="text-gray-400 text-sm">No current bids.</div>
            </div>
          </div>
          {/* Tabs and Info Section */}
          <div className="bg-[#232135] rounded-2xl p-6 mt-4">
            {/* Tabs */}
            <div className="flex gap-8 border-b border-gray-700 mb-8">
              <button className="text-white border-b-2 border-[#5a4ff3] pb-2 font-semibold">
                Info
              </button>
              <button className="text-gray-400 pb-2">Market</button>
              <button className="text-gray-400 pb-2">Activity</button>
            </div>
            {/* Info Content */}
            <div className="flex justify-between items-start">
              <div className="flex items-center gap-3">
                <img
                  src="https://cryptopunks.app/cryptopunks/cryptopunk7703.png"
                  alt="Avatar"
                  className="w-12 h-12 rounded"
                />
                <span className="text-white font-semibold text-xl">
                  CRYPTOPUNKS
                </span>
              </div>
              <button className="text-white text-2xl">
                <svg
                  width="24"
                  height="24"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M22.46 6c-.77.35-1.6.58-2.47.69a4.3 4.3 0 0 0 1.88-2.37 8.59 8.59 0 0 1-2.72 1.04A4.28 4.28 0 0 0 16.11 4c-2.37 0-4.29 1.92-4.29 4.29 0 .34.04.67.11.99C7.69 9.13 4.07 7.38 1.64 4.7c-.37.64-.58 1.38-.58 2.17 0 1.5.76 2.82 1.92 3.6-.7-.02-1.36-.21-1.94-.53v.05c0 2.1 1.5 3.85 3.5 4.25-.36.1-.74.16-1.13.16-.28 0-.54-.03-.8-.08.54 1.7 2.1 2.94 3.95 2.97A8.6 8.6 0 0 1 2 19.54c-.29 0-.57-.02-.85-.05A12.13 12.13 0 0 0 8.29 21.5c7.55 0 11.68-6.26 11.68-11.68 0-.18-.01-.36-.02-.54A8.18 8.18 0 0 0 24 4.59a8.36 8.36 0 0 1-2.54.7z" />
                </svg>
              </button>
            </div>
            <div className="flex flex-row  mt-8">
              <div className="flex flex-col gap-4 text-gray-400 text-lg mr-16">
                <div>Name</div>
                <div>Token ID</div>
                <div>Contract Address</div>
              </div>
              <div className="flex flex-col gap-4 text-white text-lg font-semibold items-center">
                <div>CRYPTOPUNKS</div>
                <div>7703</div>
                <div className="flex items-center gap-2">
                  <span className="text-blue-300">0xb4...3bbb</span>
                  <svg
                    width="18"
                    height="18"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                  >
                    <rect x="9" y="9" width="13" height="13" rx="2" />
                    <path d="M5 15V5a2 2 0 0 1 2-2h10" />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Footer Bar */}
      <div className="fixed bottom-4 left-0 w-full flex justify-center z-50">
        <div className="w-full max-w-5xl flex items-center justify-between bg-[#232135] rounded-xl px-4 py-2">
          <div className="flex items-center gap-2">
            <button className="bg-[#a996fa] p-2 rounded-lg">
              <svg
                width="20"
                height="20"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24"
              >
                <path d="M12 20h9" />
                <path d="M12 4v16" />
                <path d="M4 12h16" />
              </svg>
            </button>
            <button className="bg-[#232135] border border-[#444] p-2 rounded-lg">
              <svg
                width="20"
                height="20"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24"
              >
                <circle cx="12" cy="12" r="10" />
              </svg>
            </button>
            <input
              type="range"
              min="1"
              max="100"
              className="accent-[#a996fa] mx-2 w-32"
            />
            <span className="text-white ml-2">
              30 <span className="text-gray-400">Items</span>
            </span>
            <div className="flex items-center ml-2 border border-[#444] rounded px-2">
              <button className="text-white">&#8593;</button>
              <button className="text-white">&#8595;</button>
            </div>
            <button className="bg-[#232135] border border-[#444] p-2 rounded-lg ml-2">
              <svg
                width="20"
                height="20"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24"
              >
                <circle cx="12" cy="12" r="10" />
              </svg>
            </button>
          </div>
          <button className="bg-white text-[#232135] font-bold px-8 py-2 rounded-lg">
            Connect
          </button>
          <button className="bg-[#232135] text-white font-bold px-6 py-2 rounded-lg border border-gray-700">
            Buy 5 Items 128657.07
          </button>
        </div>
      </div>
    </div>
  );
};

export default Screen;
