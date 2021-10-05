import { Connection ,PublicKey} from "@solana/web3.js";
import Wallet from "@project-serum/sol-wallet-adapter"


let cluster="https://api.devnet.solana.com";
//connection object, to dev cluster.
let connection=new Connection(cluster);
let solletUrl = 'https://www.sollet.io';
//wallet connection object to dev cluster.
let wallet=new Wallet(solletUrl,cluster);



export async function initWallet() : Promise<[Connection, Wallet]> {
    await wallet.connect();
    return[connection,wallet];
    
}

export async function  sendMoney(_toAddress:string,_amount:number) {
    try{
        let toAddress=new PublicKey(_toAddress);
        
    }

    catch (e) {

    }

    
}