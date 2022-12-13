import { agent } from './setup'

async function main () {
  
  const bob = await agent.didManagerGetOrCreate({
    alias: 'bob',
  })

  const vc = await agent.createVerifiableCredential({
    credential: {
      issuer: { id: bob.did },
      '@context': ['https://www.w3.org/2018/credentials/v1', 'https://example.com/1/2/3'],
      type: ['VerifiableCredential', 'Custom'],
      issuanceDate: new Date().toISOString(),
      id: "https://explorer.example.com/?transaction=a3b3d665-4334-4be6-9c1a-3b50a8e41edd",
      credentialSubject: {
        channel_uuid: "75a89652-1d6b-4a41-8578-dbae506d8499",
        client_signer_address: "0x3211d65CF7C2f03B690B27146794587090bf722C",
        definition_version: "1",
        external_tx_reference: "0x0000000000000000000000000000000000000000000000000000000000000000",
        final_state_hash: "0x2f53529b0bee14e91f27a1c0981e261e5da919414303bb92230f0b29828aa15f",
        peer_last_seen_state_hash: "0xc00433c96f9dfd17d6e6830b087805480aab9f0862cf880008095c10a050058c",
        recipient_address: "0xb405555F3FEA0ca979760d225817B2ABC51852C0",
        request_uuid: "a3b3d665-4334-4be6-9c1a-3b50a8e41edd",
        timestamp: "1670645761",
        zone_signer_address: "0xdF8c632b9dd20779B655b07B77e8495c83aeA9b6"
      },
    },
    proofFormat: 'EthereumEip712Signature2021',
  })

  console.log(
    JSON.stringify(vc, null, 2)
  )
}

main().catch(console.log)