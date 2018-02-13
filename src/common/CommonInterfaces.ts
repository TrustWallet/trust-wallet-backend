interface IDecodedLogEvent {
    name: string,
    type: string,
    value: string
}

export interface IDecodedLog {
    name: string,
    events: IDecodedLogEvent[],
    address: string
}

export interface IContract {
    _id: any,
    address: string,
    decimals: number,
    name: string,
    symbol: string,
    totalSupply: string
}

export interface ITransactionReceipt {
    blockHash: string,
    blockNumber: number,
    transactionHash: string,
    transactionIndex: number,
    from: string,
    to: string,
    contractAddress: string | null,
    cumulativeGasUsed: number,
    gasUsed: number,
    logs: any[] // TODO add log interface
}

export interface ITransaction {
    _id: string,
    addresses: string[],
    blockNumber: number,
    error: string,
    errors: string | undefined,
    from: string,
    gas: string,
    gasPrice: string,
    gasUsed: string,
    id: string
    input: string,
    isNew?: boolean,
    nonce: number,
    operations: any[], // TODO add IOperation
    operations_localized: any,
    receipt: ITransactionReceipt,
    success: any
    timeStamp: string,
    to: string,
    value: string,
}