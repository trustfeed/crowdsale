// Returns the time of the last mined block in seconds
const latestTime = () => {
  return web3.eth.getBlock('latest').timestamp;
};

export default latestTime;
