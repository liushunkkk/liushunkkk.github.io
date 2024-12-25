export const BlockChainNavBar = {
  text: '区块链研究院池',
  children: [
    { text: 'ethereum', link: '/master/gointern/ethereum/' },
    { text: 'block chain development', link: '/master/gointern/blockchaindevelopment/' },
    { text: 'docker', link: '/master/gointern/docker/' },
    { text: 'golang', link: '/master/gointern/golang/' },
    { text: 'prometheus', link: '/master/gointern/prometheus/' },
    { text: 'shell', link: '/master/gointern/shell/' },
  ]
}

export const BlockChainSideBar = {
  '/master/gointern/blockchaindevelopment/': [
    {
      text: 'Development',
      children: [
        '/master/gointern/blockchaindevelopment/README.md',
        '/master/gointern/blockchaindevelopment/statedb_execute.md',
        '/master/gointern/blockchaindevelopment/gas_fee.md',
        '/master/gointern/blockchaindevelopment/monitoring.md',
      ]
    }
  ],
  '/master/gointern/ethereum/': [
    {
      text: 'Block Chain Ethereum',
      children: [
        '/master/gointern/ethereum/README.md',
        '/master/gointern/ethereum/ethereum_base.md',
        '/master/gointern/ethereum/account.md',
        '/master/gointern/ethereum/block.md',
        '/master/gointern/ethereum/node_client.md',
        '/master/gointern/ethereum/contract.md',
        '/master/gointern/ethereum/transaction.md',
        '/master/gointern/ethereum/gas.md',
        '/master/gointern/ethereum/crypto_base.md',
        '/master/gointern/ethereum/consensus.md',
        '/master/gointern/ethereum/evm.md',
        '/master/gointern/ethereum/hd_wallet.md',
        '/master/gointern/ethereum/jsonrpc.md',
        '/master/gointern/ethereum/mpt.md',
        '/master/gointern/ethereum/rlp.md',
        '/master/gointern/ethereum/statedb.md',
        '/master/gointern/ethereum/leveldb.md',
        '/master/gointern/ethereum/mev.md',
        '/master/gointern/ethereum/go_ethereum.md',
      ],
    },
  ],
  '/master/gointern/docker/': [
    {
      text: 'Docker',
      children: [
        '/master/gointern/docker/README.md',
        '/master/gointern/docker/intro.md',
        '/master/gointern/docker/image_construct.md',
        '/master/gointern/docker/compose.md'
      ],
    },
  ],
  '/master/gointern/golang/': [
    {
      text: 'Golang',
      children: [
        '/master/gointern/golang/README.md',
        '/master/gointern/golang/base.md',
        '/master/gointern/golang/goweb.md',
        '/master/gointern/golang/protobuf.md',
        '/master/gointern/golang/rpc.md',
        '/master/gointern/golang/gin.md',
        '/master/gointern/golang/distributed.md',
        '/master/gointern/golang/gorm_1.md',
        '/master/gointern/golang/gorm_2.md',
        '/master/gointern/golang/test.md',
        '/master/gointern/golang/template.md',
        '/master/gointern/golang/embed.md',
        '/master/gointern/golang/dependency.md',
        '/master/gointern/golang/gowork.md',
        '/master/gointern/golang/tools.md',
      ],
    },
  ],
  '/master/gointern/prometheus/': [
    {
      text: 'Prometheus',
      children: [
        '/master/gointern/prometheus/README.md',
        '/master/gointern/prometheus/intro.md',
        '/master/gointern/prometheus/promql.md',
        '/master/gointern/prometheus/alert.md',
        '/master/gointern/prometheus/exporter.md',
        '/master/gointern/prometheus/clustering.md',
        '/master/gointern/prometheus/servicediscovery.md',
      ],
    },
  ],
  '/master/gointern/shell/': [
    {
      text: 'Shell',
      children: [
        '/master/gointern/shell/README.md',
        '/master/gointern/shell/base.md',
        '/master/gointern/shell/script.md',
        '/master/gointern/shell/progress.md',
      ],
    },
  ],
}