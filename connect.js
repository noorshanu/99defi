const provider = new ethers.providers.Web3Provider(window.ethereum);
const signer = provider.getSigner();

const Address = "0x97461a43Daf4505C7456bE772D7Cd20B67D3fd63";
const Abi = [{"inputs":[],"stateMutability":"nonpayable","type":"constructor"},{"inputs":[],"name":"BUSD","outputs":[{"internalType":"contract IERC20","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"account","type":"address"}],"name":"earned","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"na","type":"address"}],"name":"getBalance","outputs":[{"internalType":"uint256","name":"bbalance","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"getReward","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"lastUpdateTimeBUSD","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"owner","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"players","outputs":[{"internalType":"address","name":"upline","type":"address"},{"internalType":"uint256","name":"rewardAPY","type":"uint256"},{"internalType":"uint256","name":"deposits","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"rewardAPYRate30","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"rewardAPYRate365","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"rewardsAvailable","outputs":[{"internalType":"uint256","name":"lreward","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"rewardsBUSD","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"_upline","type":"address"},{"internalType":"uint256","name":"_amount","type":"uint256"}],"name":"stake30Days","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_upline","type":"address"},{"internalType":"uint256","name":"_amount","type":"uint256"}],"name":"stake365Days","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"totalBalanceBUSD","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"totalRewardsPerTokenBUSD","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"_amount","type":"uint256"}],"name":"withdraw","outputs":[],"stateMutability":"nonpayable","type":"function"}];

const AddressToken = "0x8468292f02BEF940f3FB0CedA6607DaD625d8C0B";
const AbiToken =[{"inputs":[],"payable":false,"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"owner","type":"address"},{"indexed":true,"internalType":"address","name":"spender","type":"address"},{"indexed":false,"internalType":"uint256","name":"value","type":"uint256"}],"name":"Approval","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"previousOwner","type":"address"},{"indexed":true,"internalType":"address","name":"newOwner","type":"address"}],"name":"OwnershipTransferred","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"from","type":"address"},{"indexed":true,"internalType":"address","name":"to","type":"address"},{"indexed":false,"internalType":"uint256","name":"value","type":"uint256"}],"name":"Transfer","type":"event"},{"constant":true,"inputs":[],"name":"_decimals","outputs":[{"internalType":"uint8","name":"","type":"uint8"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"_name","outputs":[{"internalType":"string","name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"_symbol","outputs":[{"internalType":"string","name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"internalType":"address","name":"owner","type":"address"},{"internalType":"address","name":"spender","type":"address"}],"name":"allowance","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"approve","outputs":[{"internalType":"bool","name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"internalType":"address","name":"account","type":"address"}],"name":"balanceOf","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"burn","outputs":[{"internalType":"bool","name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"decimals","outputs":[{"internalType":"uint8","name":"","type":"uint8"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"subtractedValue","type":"uint256"}],"name":"decreaseAllowance","outputs":[{"internalType":"bool","name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"getOwner","outputs":[{"internalType":"address","name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"addedValue","type":"uint256"}],"name":"increaseAllowance","outputs":[{"internalType":"bool","name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"name","outputs":[{"internalType":"string","name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"owner","outputs":[{"internalType":"address","name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[],"name":"renounceOwnership","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"symbol","outputs":[{"internalType":"string","name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"totalSupply","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"internalType":"address","name":"recipient","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"transfer","outputs":[{"internalType":"bool","name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"internalType":"address","name":"sender","type":"address"},{"internalType":"address","name":"recipient","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"transferFrom","outputs":[{"internalType":"bool","name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"internalType":"address","name":"newOwner","type":"address"}],"name":"transferOwnership","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"}];
var checkk = 0;
const Contract = new ethers.Contract(Address, Abi, provider);
const ContractTokena = new ethers.Contract(AddressToken, AbiToken, provider);

const connectbtn = document.querySelector('.buttonConnectContent');
connectbtn.addEventListener('click',enabler);

const connectbtna = document.querySelector('.approveButton');
connectbtna.addEventListener('click',approve);

const connectbtnaa = document.querySelector('.investButton');
connectbtnaa.addEventListener('click',invest_30);

const connectbtnaab = document.querySelector('.getReward');
connectbtnaab.addEventListener('click',get_reward);

const connectbtnaaba = document.querySelector('.withdrawa');
connectbtnaaba.addEventListener('click',withdraw);

const approveButton60 = document.querySelector('.approveButton60');
approveButton60.addEventListener('click',approve60);

const investButton60 = document.querySelector('.investButton60');
investButton60.addEventListener('click',invest_60);

kol();
setInterval(kol, 1*1000);

function functorun() {
	console.log("update stats");
	goa();
	
}

function kol() {
if (checkk > 0) {
functorun();
setInterval(functorun, 1*1000);
}
}
const TRANSACTION_FEE = ethers.utils.parseEther("0.0012");
const gasPrice = "10";
const DEPOSIT_AMOUNT_INPUT = $("#depositAmount");

async function getSignera() {
	await provider.send("eth_requestAccounts", []);
	let ciaov = await signer.getAddress();
	
	return ciaov;
	
}

async function enabler(){
	
		try {
  await ethereum.request({
    method: 'wallet_switchEthereumChain',
    params: [{ chainId: '0x38' }],
  });
} catch (switchError) {
  // This error code indicates that the chain has not been added to MetaMask.
  if (switchError.code === 4902) {
    try {
      await ethereum.request({
        method: 'wallet_addEthereumChain',
        params: [{ chainId: '0x38', rpcUrl: 'https://bsc-dataseed1.binance.org/' /* ... */ }],
      });
    } catch (addError) {
      // handle "add" error
    }
  }
  // handle other "switch" errors
}
 doing();

};

async function disconnect() {
	
try {
await ethereum.request({
    method: "wallet_requestPermissions",
    params: [{
        eth_accounts: {}
    }]
}).then(() => ethereum.request({
    method: 'eth_requestAccounts'
}))
} catch (addError) {
}
        
}

function goa() {
	
	enabler();
	
}
async function doing() {
	checkk = 1;
	await provider.send("eth_requestAccounts", []);
	let ciaov = await signer.getAddress();
	onAccountsChanged(ciaov);
	
	const ContractToken = new ethers.Contract(AddressToken, AbiToken, signer);
	let cheeck = await ContractToken.allowance(ciaov, Address);
	
	if (Number.parseInt(cheeck) > 0 ) {
		
		const investButton1 = document.getElementById("investButton60");
        investButton1.style.display = "block";
        const approveButton1 = document.getElementById("approveButton60");
        approveButton1.style.display = "none";
		
		const investButton3 = document.getElementById("investButton");
        investButton3.style.display = "block";
        const approveButton3 = document.getElementById("approveButton");
        approveButton3.style.display = "none";
		
	}
	
	let invest = await Contract.totalBalanceBUSD();
	let invested = document.querySelector(".invested") ;
	let eth = ethers.utils.formatEther(invest);
	invested.innerHTML =`<b>Total Investment : &nbsp;  &nbsp;  &nbsp; &nbsp;  &nbsp;  ${eth} 99DEFI </b>`;
	
	
	
	let investreferal = await Contract.totalRewardsPerTokenBUSD();
	let investedreferal = document.querySelector(".investedreferal") ;
	let ethx = ethers.utils.formatEther(investreferal);
	investedreferal.innerHTML =`<b>Reward Distributed : &nbsp;  &nbsp;  &nbsp; &nbsp;  &nbsp;  ${ethx} 99DEFI </b>`;
	
	let userla = await Contract.earned(ciaov);
	let ethla = ethers.utils.formatEther(userla);
	let lot = document.querySelector(".pot") ;
	
	let lotax = document.querySelector(".potax") ;
	lotax.innerHTML =`<b>${ethla} 99DEFI</b>`;
	
	lot.innerHTML =`<b> REWARDS: ${ethla}</b>`;
	
	
	// let totaf = document.getElementById(".ciaoo") ;
	// totaf.setAttribute('value',` ./?ref=${ciaov}`);
	
	let userlaa = await Contract.getBalance(ciaov);
	let tota = document.querySelector(".tota") ;
	
	
	
	let userlaaax = await ContractTokena.balanceOf(ciaov);
	
	let totaf = document.querySelector(".totaf") ;
	let ethcccc = ethers.utils.formatEther(userlaa);
	let ethccccx = ethers.utils.formatEther(userlaaax);
	
	totaf.innerHTML =`<b>${ethccccx} 99DEFI </b>`;
	tota.innerHTML =`<b> INVESTED 99DEFI: ${ethcccc} </b>`;

    let domain_name=window.location.hostname;
    if (ethcccc > 0) {
	let lotg = document.getElementById('linkref').setAttribute('value', `${domain_name}/?ref=${ciaov}`);
    } else {
    let lotg = document.getElementById('linkref').setAttribute('value', `Deposit Something to Get the REF LINK!`);
    }
    let wall_add=document.getElementById('wall-adress').innerHTML=`${ciaov}`

    let totat =document.querySelector('.totat');
    totat.innerHTML=`<b> ${ethcccc} 99DEFI </b>`;
	
	let userlaax = await Contract.rewardsBUSD(ciaov);
	
	let ethccccc = ethers.utils.formatEther(userlaax);

	// console.log("Account:", await signer.getAddress());
}
  
 
async function approve60() {

	let miserve = await getSignera();
	const ContractToken = new ethers.Contract(AddressToken, AbiToken, signer);

        let maxAllowance = ethers.BigNumber.from(2).pow(256).sub(1);

        const rawResult = await ContractToken.approve(Address, maxAllowance, { gasPrice: ethers.utils.parseUnits(gasPrice, "gwei") });
        
		const investButton = document.getElementById("investButton60");
        investButton.style.display = "block";
        const approveButton = document.getElementById("approveButton60");
        approveButton.style.display = "none";

}




async function approve() {
	
	let miserve = await getSignera();
	const ContractToken = new ethers.Contract(AddressToken, AbiToken, signer);

        let maxAllowance = ethers.BigNumber.from(2).pow(256).sub(1);

        const rawResult = await ContractToken.approve(Address, maxAllowance, { gasPrice: ethers.utils.parseUnits(gasPrice, "gwei") });
        
		const investButton = document.getElementById("investButton");
        investButton.style.display = "block";
        const approveButton = document.getElementById("approveButton");
        approveButton.style.display = "none";


}



async function invest_30() {

	const urlParams = new URLSearchParams(window.location.search);
	const myParam = urlParams.get('ref');
	
	if (myParam) {
	let ciaov = await signer.getAddress();
	let miserve = await getSignera();
	const ContractToken = new ethers.Contract(AddressToken, AbiToken, signer);
	const ContractDeposit = new ethers.Contract(Address, Abi, signer);
    const investButton = $("#investButton");
    const tariffId = $("#depositPeriodDays30").text();
	var buss = myParam;
    const value = ethers.utils.parseEther($("#depositAmount30").val());

    const currentAllowance = await ContractToken.allowance(ciaov, Address);
    if (currentAllowance.lt(value)) {
        approve().then((res) => {
            ContractDeposit
                .stake30Days(buss,  value, { gasPrice: ethers.utils.parseUnits(gasPrice, "gwei") })
        });
    } else {
        ContractDeposit
            .stake30Days(buss, value, { gasPrice: ethers.utils.parseUnits(gasPrice, "gwei") })
            
           
    }
	} else {
		let ciaov = await signer.getAddress();
	let miserve = await getSignera();
	const ContractToken = new ethers.Contract(AddressToken, AbiToken, signer);
	const ContractDeposit = new ethers.Contract(Address, Abi, signer);
    const investButton = $("#investButton");
    const tariffId = $("#depositPeriodDays30").text();
	var buss = await Contract.owner();
    const value = ethers.utils.parseEther($("#depositAmount30").val());

    const currentAllowance = await ContractToken.allowance(ciaov, Address);
    if (currentAllowance.lt(value)) {
        approve().then((res) => {
            ContractDeposit
                .stake30Days(buss,  value, { gasPrice: ethers.utils.parseUnits(gasPrice, "gwei") })
        });
    } else {
        ContractDeposit
            .stake30Days(buss, value, { gasPrice: ethers.utils.parseUnits(gasPrice, "gwei") })
            
           
    }
	
	}
	
}


async function invest_60() {

	const urlParams = new URLSearchParams(window.location.search);
	const myParam = urlParams.get('ref');
	
	if (myParam) {
	let ciaov = await signer.getAddress();
	let miserve = await getSignera();
	const ContractToken = new ethers.Contract(AddressToken, AbiToken, signer);
	const ContractDeposit = new ethers.Contract(Address, Abi, signer);
    const investButton = $("#investButton");
    const tariffId = $("#depositPeriodDays60").text();
	var buss = myParam;
    const value = ethers.utils.parseEther($("#depositAmount60").val());

    const currentAllowance = await ContractToken.allowance(ciaov, Address);
    if (currentAllowance.lt(value)) {
        approve().then((res) => {
            ContractDeposit
                .stake365Days(buss,  value, { gasPrice: ethers.utils.parseUnits(gasPrice, "gwei") })
        });
    } else {
        ContractDeposit
            .stake365Days(buss, value, { gasPrice: ethers.utils.parseUnits(gasPrice, "gwei") })
            
           
    }
	} else {
		let ciaov = await signer.getAddress();
	let miserve = await getSignera();
	const ContractToken = new ethers.Contract(AddressToken, AbiToken, signer);
	const ContractDeposit = new ethers.Contract(Address, Abi, signer);
    const investButton = $("#investButton");
    const tariffId = $("#depositPeriodDays60").text();
	var buss = await Contract.owner();
    const value = ethers.utils.parseEther($("#depositAmount60").val());

    const currentAllowance = await ContractToken.allowance(ciaov, Address);
    if (currentAllowance.lt(value)) {
        approve().then((res) => {
            ContractDeposit
                .stake365Days(buss,  value, { gasPrice: ethers.utils.parseUnits(gasPrice, "gwei") })
        });
    } else {
        ContractDeposit
            .stake365Days(buss, value, { gasPrice: ethers.utils.parseUnits(gasPrice, "gwei") })
            
           
    }
	
	}
	
}


async function withdraw() {
	

	const amounta = ethers.utils.parseEther($("#withdrawa").val());
	let miserve = await getSignera();
	const ContractDeposita = new ethers.Contract(Address, Abi, signer);

        let maxAllowance = ethers.BigNumber.from(2).pow(256).sub(1);

        const rawResult = await ContractDeposita.withdraw(amounta, { gasPrice: ethers.utils.parseUnits(gasPrice, "gwei") });
}


async function get_reward() {
	let miserve = await getSignera();
	const ContractDeposita = new ethers.Contract(Address, Abi, signer);

        let maxAllowance = ethers.BigNumber.from(2).pow(256).sub(1);

        const rawResult = await ContractDeposita.getReward( { gasPrice: ethers.utils.parseUnits(gasPrice, "gwei") });
       

}



  function onAccountsChanged(currentAccount) {
    $("#buttonConnectContent").text(getShorterAddress(currentAccount));
}

function getShorterAddress(address, tailsLength = 3) {
    return address.substring(0, tailsLength) + "..." + address.substring(address.length - tailsLength, address.length);
}

