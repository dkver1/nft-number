module.exports = async function main(callback) {
  try {
    const accounts = await web3.eth.getAccounts();
    console.log(accounts)

    const NFTNumber = artifacts.require("NFTNumber");
    const x = await NFTNumber.deployed();

    price = (await x.calculatePrice()).toString();
    console.log("Current Prices is", price);

    tokens = (await x.tokensOfOwner(accounts[0])).toString();
    console.log("Your Tokens:", tokens);

    await x.adoptChubby(1);
    console.log("Adopted Completed.");

    tokens = (await x.tokensOfOwner(accounts[0])).toString();
    console.log("Your Tokens:", tokens);

    callback(0);
  } catch (error) {
    console.error(error);
    callback(1);
  }
}
