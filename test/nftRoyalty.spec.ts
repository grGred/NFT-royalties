import { ethers, network } from 'hardhat';
import chai from 'chai';
import { SignerWithAddress } from '@nomiclabs/hardhat-ethers/signers';
import Web3 from 'Web3';
import chaiAsPromised from 'chai-as-promised';
chai.use(chaiAsPromised);
const expect = chai.expect;

describe('RubicTokenStaking', function () {
    let signers;
    let Alice: SignerWithAddress;
    let Bob: SignerWithAddress;
    let Carol: SignerWithAddress;

    beforeEach(async function () {
        this.NFTFactory = await ethers.getContractFactory("NFT");
        this.nftContract = await this.NFTFactory.deploy(
            "NFT Royalty",
            "Royal",
            "ipfs://some_link_here/",
            10,
            [Alice, Bob, Carol]
        );
    });
    /*
    TODO update tests
    describe('deployment', () => {
        it('returns the artist', async () => {
            let result = await this.nftContract.artist();
            result.should.equal([Alice, Bob, Carol]);
        })

        it('returns the royality fee', async () => {
            const result = await this.nftContract.royalityFee()
            result.toString().should.equal(10)
        })

        it('sets the royality fee', async () => {
            const newRoyalityFee = 50 // 50%

            await this.nftContract.setRoyalityFee(newRoyalityFee)

            const result = await this.nftContract.royalityFee()
            result.toString().should.equal(newRoyalityFee.toString())
        })
    })

    describe('royalities', async () => {
        const salePrice = Web3.utils.toWei('10', 'ether')
        const totalRoyality = salePrice * 0.25
        let result

        beforeEach(async () => {
            await nft.mint({ from: owner1, value: cost })
        })

        it('initially belongs to owner1', async () => {
            const result = await nft.balanceOf(owner1)
            result.toString().should.equal('1')
        })

        it('successfully transfers to owner2', async () => {
            await nft.approve(owner2, 1, { from: owner1 })
            await nft.transferFrom(owner1, owner2, 1, { from: owner2, value: salePrice })

            result = await nft.balanceOf(owner1)
            result.toString().should.equal('0')

            result = await nft.balanceOf(owner2)
            result.toString().should.equal('1')
        })

        it('updates ether balances', async () => {
            // Approve sale
            await nft.approve(owner2, 1, { from: owner1 })

            const artistBalanceBefore = await Web3.eth.getBalance(artist)
            const owner1BalanceBefore = await Web3.eth.getBalance(owner1)

            // Initiate transfer
            await nft.transferFrom(owner1, owner2, 1, { from: owner2, value: salePrice })

            const artistBalanceAfter = await Web3.eth.getBalance(artist)
            const owner1BalanceAfter = await Web3.eth.getBalance(owner1)

            // If balances update, we know owner2 paid
            artistBalanceAfter.toString().should.equal((Number(artistBalanceBefore) + totalRoyality).toString())
            owner1BalanceAfter.toString().should.equal((Number(owner1BalanceBefore) + (salePrice - totalRoyality)).toString())
        })
    })*/
})