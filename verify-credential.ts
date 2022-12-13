import { agent } from './setup'

async function main () {
  
  const result = await agent.verifyCredential({
    credential: {
      "issuer": {
        "id": "did:ethr:goerli:0x03bd580a2b83e82d62534c47a302b90a29bda51ec250e9ecfd7b8f1e44befc8d45"
      },
      "@context": [
        "https://www.w3.org/2018/credentials/v1",
        "https://example.com/1/2/3"
      ],
      "type": [
        "VerifiableCredential",
        "Custom"
      ],
      "issuanceDate": "2022-12-13T17:10:10.528Z",
      "id": "https://explorer.goerli.kchannels.io/?transaction=a3b3d665-4334-4be6-9c1a-3b50a8e41edd",
      "credentialSubject": {
        "channel_uuid": "75a89652-1d6b-4a41-8578-dbae506d8499",
        "client_signer_address": "0x3211d65CF7C2f03B690B27146794587090bf722C",
        "definition_version": "1",
        "external_tx_reference": "0x0000000000000000000000000000000000000000000000000000000000000000",
        "final_state_hash": "0x2f53529b0bee14e91f27a1c0981e261e5da919414303bb92230f0b29828aa15f",
        "peer_last_seen_state_hash": "0xc00433c96f9dfd17d6e6830b087805480aab9f0862cf880008095c10a050058c",
        "recipient_address": "0xb405555F3FEA0ca979760d225817B2ABC51852C0",
        "request_uuid": "a3b3d665-4334-4be6-9c1a-3b50a8e41edd",
        "timestamp": "1670645761",
        "zone_signer_address": "0xdF8c632b9dd20779B655b07B77e8495c83aeA9b6"
      },
      "proof": {
        "verificationMethod": "did:ethr:goerli:0x03bd580a2b83e82d62534c47a302b90a29bda51ec250e9ecfd7b8f1e44befc8d45#controller",
        "created": "2022-12-13T17:10:10.528Z",
        "proofPurpose": "assertionMethod",
        "type": "EthereumEip712Signature2021",
        "proofValue": "0x2ec05e02758f4d197f401525961f1030097647046753bcd8125d71011487556837c802079536e9c08c7cf2f7c7109e90aaeb6b870c78db2ef8e2a7e9825097ba1c",
        "eip712": {
          "domain": {
            "chainId": 5,
            "name": "VerifiableCredential",
            "version": "1"
          },
          "messageSchema": {
            "EIP712Domain": [
              {
                "name": "name",
                "type": "string"
              },
              {
                "name": "version",
                "type": "string"
              },
              {
                "name": "chainId",
                "type": "uint256"
              }
            ],
            "CredentialSubject": [
              {
                "name": "channel_uuid",
                "type": "string"
              },
              {
                "name": "client_signer_address",
                "type": "string"
              },
              {
                "name": "definition_version",
                "type": "string"
              },
              {
                "name": "external_tx_reference",
                "type": "string"
              },
              {
                "name": "final_state_hash",
                "type": "string"
              },
              {
                "name": "peer_last_seen_state_hash",
                "type": "string"
              },
              {
                "name": "recipient_address",
                "type": "string"
              },
              {
                "name": "request_uuid",
                "type": "string"
              },
              {
                "name": "timestamp",
                "type": "string"
              },
              {
                "name": "zone_signer_address",
                "type": "string"
              }
            ],
            "Issuer": [
              {
                "name": "id",
                "type": "string"
              }
            ],
            "Proof": [
              {
                "name": "created",
                "type": "string"
              },
              {
                "name": "proofPurpose",
                "type": "string"
              },
              {
                "name": "type",
                "type": "string"
              },
              {
                "name": "verificationMethod",
                "type": "string"
              }
            ],
            "VerifiableCredential": [
              {
                "name": "@context",
                "type": "string[]"
              },
              {
                "name": "credentialSubject",
                "type": "CredentialSubject"
              },
              {
                "name": "id",
                "type": "string"
              },
              {
                "name": "issuanceDate",
                "type": "string"
              },
              {
                "name": "issuer",
                "type": "Issuer"
              },
              {
                "name": "proof",
                "type": "Proof"
              },
              {
                "name": "type",
                "type": "string[]"
              }
            ]
          },
          "primaryType": "VerifiableCredential"
        }
      }
    }
  })

  console.log(
    JSON.stringify(result, null, 2)
  )
}

main().catch(console.log)