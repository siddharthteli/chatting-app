import Arweave from 'arweave';


export default async function checkBalance() : Promise<string>{
  try{
    let arweave=Arweave.init({});
  let balance=  arweave.wallets.getBalance('KcHo0Rg8PH05CKpj782nQ3mbId4HG81nGE4x5pM_-3M');
  let key=await arweave.wallets.generate();
   console.log("value of data---"+key);
   let transaction=await arweave.createTransaction({
     data:'Hello my name is modi'
   },key);
   await arweave.transactions.sign(transaction,key);
   const response=await arweave.transactions.post(transaction);
   console.log("transaction id----"+transaction.id);
  // let status=arweave.transactions.getStatus(transaction.id);
   //console.log("status of transaction ----"+status);
    return response.status.toString();
  }
  catch(e:unknown) {
    console.log("Error hai ---"+e);
    return "asda";
  }
}


export async function InitWallet() {

  
}