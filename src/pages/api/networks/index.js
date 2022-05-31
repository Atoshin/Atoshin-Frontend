export default function handler(req, res) {
    const networks = {
        1: {
            name: 'mainnet',
            currency: 'ETH'
        },
        80001: {
            name: 'mumbai',
            currency: 'MATIC'
        },
        137: {
            name: 'polygon',
            currency: 'MATIC'
        }
    }


    const {body: {chainId}} = req;

    const network = networks[chainId];

    if (network) {
        res.status(200).json(
            network
        )
    } else {
        res.status(400).message('network not supported')
    }
}
