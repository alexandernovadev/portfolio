import Anchor from '@/components/atomic/atoms/anchor'
import Avatar from '@/components/atomic/atoms/avatar'
import Button from '@/components/atomic/atoms/button'
import IconButton from '@/components/atomic/atoms/buttonicon'
import Typography from '@/components/atomic/atoms/typography'
import { FaBeer } from 'react-icons/fa'

export default function Home() {
  return (
    <div
      style={{
        padding: 100,
        display: 'flex',
        gap: 20,
      }}
    >
      <section>
        <h1>Buttons</h1> <hr />
        <Button>Normal Button</Button>
        <Button variant="disabled">Disabled Button</Button>
        <Button variant="filled">Filled</Button>
      </section>
      <section>
        <div>
          <h1>Typography</h1> <hr />
          <Typography variant="h1">Heading 1</Typography>
          <Typography variant="h2">Heading 2</Typography>
          <Typography variant="h3">Heading 3</Typography>
          <Typography variant="h4">Heading 4</Typography>
          <Typography variant="h5">Heading 5</Typography>
          <Typography variant="h6">Heading 6</Typography>
          <Typography variant="p">Paragraph</Typography>
          <Typography variant="span">Span</Typography>
          <Typography variant="small">Small</Typography>
          <Typography variant="label">Label</Typography>
          <Typography variant="blockquote">Blockquote</Typography>
          <Typography variant="pre">Pre</Typography>
        </div>
      </section>

      <section>
        <div>
          <Typography variant="h1">Avatars</Typography>

          <Avatar
            src="https://media.istockphoto.com/id/1300845620/es/vector/icono-de-usuario-plano-aislado-sobre-fondo-blanco-s%C3%ADmbolo-de-usuario-ilustraci%C3%B3n-vectorial.jpg?s=612x612&w=0&k=20&c=grBa1KTwfoWBOqu1n0ewyRXQnx59bNHtHjvbsFc82gk="
            alt="Descripción del avatar"
            size="large"
            border={true}
          />
          <Avatar
            src="https://media.istockphoto.com/id/1300845620/es/vector/icono-de-usuario-plano-aislado-sobre-fondo-blanco-s%C3%ADmbolo-de-usuario-ilustraci%C3%B3n-vectorial.jpg?s=612x612&w=0&k=20&c=grBa1KTwfoWBOqu1n0ewyRXQnx59bNHtHjvbsFc82gk="
            alt="Descripción del avatar"
            size="medium"
            border={true}
          />
          <Avatar
            src="https://media.istockphoto.com/id/1300845620/es/vector/icono-de-usuario-plano-aislado-sobre-fondo-blanco-s%C3%ADmbolo-de-usuario-ilustraci%C3%B3n-vectorial.jpg?s=612x612&w=0&k=20&c=grBa1KTwfoWBOqu1n0ewyRXQnx59bNHtHjvbsFc82gk="
            alt="Descripción del avatar"
            size="small"
          />
        </div>
      </section>

      <section>
      <Typography variant="h1">Icon Button</Typography>
        <IconButton icon={FaBeer} />
        <IconButton icon={FaBeer} variant='filled'/>
      </section>      
      
      
      <section>
      <Typography variant="h1">Anchors Buttons</Typography>
      <Anchor href="https://www.example.com" variant="default">
        Default Anchor
      </Anchor>
      <br/>
      <Anchor href="https://www.example.com" variant="highlight">
        Highlight Anchor
      </Anchor>
      <br/>
      <Anchor href="https://www.example.com" variant="filled">
        Filled Anchor
      </Anchor>

      </section>
    </div>
  )
}
