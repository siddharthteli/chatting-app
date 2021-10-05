import Arweave from 'arweave';


export  async function checkBalance() : Promise<string>{
  try{
    let arweave=Arweave.init({});
  let balance=  arweave.wallets.getBalance('KcHo0Rg8PH05CKpj782nQ3mbId4HG81nGE4x5pM_-3M');
  let key=await arweave.wallets.generate();
   console.log("value of data---"+key);
   let transaction=await arweave.createTransaction({
     data:'Hello my name is modi'
   },key);
   transaction.addTag("Content-Type", "text/plain");
   await arweave.transactions.sign(transaction,key);
   const response=await arweave.transactions.post(transaction);
   console.log("transaction id----"+transaction.id);
  let status=await arweave.transactions.getStatus(transaction.id);
   console.log("status of transaction ----"+status.status);
    return response.status.toString();
  }
  catch(e:unknown) {
    console.log("Error hai ---"+e);
    return "asda";
  }
}


export async function status() {
  //yYOWfiANj3ICn2Xvyhd922kETCe7rEjgnK9M0bzJD3s
  //tTFod-H87qHcQFBKaPjmhqXadBtzasO85cuBZNm3afY
  let arweave=Arweave.init({});
  let status=await arweave.transactions.getStatus('tTFod-H87qHcQFBKaPjmhqXadBtzasO85cuBZNm3afY');
  console.log("status of transaction---"+status.confirmed);
  console.log("status of transaction---"+status.status);

  
}

export async function lastTransaction() {
  let arweave=Arweave.init({});
  let lastx=await arweave.wallets.getLastTransactionID("KcHo0Rg8PH05CKpj782nQ3mbId4HG81nGE4x5pM_-3M");
  console.log("Transaction id----"+lastx);
  
}