const txDecoder = require('ethereum-tx-decoder')

const data = '0xf8aa038502540be4008301388094dac17f958d2ee523a2206206994597c13d831ec730b844a9059cbb0000000000000000000000006002637a0cdac5162096ce17dbca40511b73c847000000000000000000000000000000000000000000000000000000000000271025a07f0e0372be3febaa9bc696fc6239c15ccdb6f475d66312f4b2572969467a3112a04d2752d74a4201dacdad9057d3b68daccc484280fc3f88654a1111441cacb569'
const decoded_tx = txDecoder.decodedTx(data)
console.log('tx: ', decoded_tx)