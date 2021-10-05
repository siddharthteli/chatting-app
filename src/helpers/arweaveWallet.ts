import Arweave from 'arweave';


export default async function initWallet() : Promise<string>{
    let arweave=Arweave.init({});
  let balance=  arweave.wallets.getBalance('KcHo0Rg8PH05CKpj782nQ3mbId4HG81nGE4x5pM_-3M');

    return balance;
}