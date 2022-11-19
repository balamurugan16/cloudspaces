import { Table } from "react-daisyui"

function Spaces() {

  const spaces = [
    {
      name: "cloudspaces",
      provider: 'Github',
      lastUsed: "yesterday"      
    },
    {
      name: "cloudspaces",
      provider: 'Github',
      lastUsed: "yesterday"      
    },
    {
      name: "cloudspaces",
      provider: 'Github',
      lastUsed: "yesterday"      
    }
  ]

  return (
    <Table>
      <Table.Head>
        <span />
        <span>Name</span>
        <span>Provider</span>
        <span>Last used</span>
      </Table.Head>

      <Table.Body>
      {
        spaces.map((space, index) => (
          <Table.Row>
            <span>{index + 1}</span>
            <span>{ space.name }</span>
            <span>{ space.provider }</span>
            <span>{ space.lastUsed }</span>
        </Table.Row>
        ))
      }
      </Table.Body>
    </Table>
  )
}

export default Spaces