const { expect } = require("chai");
const { ethers } = require("hardhat");

require("@nomiclabs/hardhat-waffle");

describe("Greeter", function () {
  let contract;
  let owner;

  beforeEach(async function () {
    //basicallyyy, deploy the contract befire each test
    const Greeter = await ethers.getContractFactory("Greeter");
    const greeter = await Greeter.deploy("Hello, world!");
    contract = await greeter.deployed();
    [owner] = ethers.getSigners();
  });

  it("Should return the new greeting once it's changed", async function () {
    expect(await greeter.greet()).to.equal("Hello, world!");
    const setGreetingTx = await greeter.setGreeting("Hola, mundo!");
    await setGreetingTx.wait();
    expect(await greeter.greet()).to.equal("Hola, mundo!");
  });

  it("Should add my numbers + return sum", async function () {
    const addNumbersTest = await contract.add(3, 6);
    expect(addNumbersTest).to.equal(9);
  });

  it("Should multiply numbers + return results", async function () {
    const Greeter = await ethers.getContractFactory("Greeter");
    const greeter = await Greeter.deploy("Hello, World!");
    const contract = await greeter.deployed();
    const multiNumTest = await contract.multiply(3, 9);
    expect(multiNumTest).to.equal(27);
  });
});
