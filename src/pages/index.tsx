import Anchor from '@/components/atomic/atoms/anchor'
import Avatar from '@/components/atomic/atoms/avatar'
import Button from '@/components/atomic/atoms/button'
import IconButton from '@/components/atomic/atoms/buttonicon'
import Typography from '@/components/atomic/atoms/typography'
import { FaBeer } from 'react-icons/fa'

export default function Home() {
  return (
    <>
      <article
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          width: '100vw',
        }}
      >
        <nav
          style={{
            width: 1024,
            display: 'flex',
            padding: 24,
            // background:"red",
            justifyContent: 'space-between',
          }}
        >
          <section
            style={{
              display: 'flex',
              gap: 12,
              justifyContent: 'center',
              alignItems: 'center',
            }}
          >
            <Avatar
              src="https://media.istockphoto.com/id/1300845620/es/vector/icono-de-usuario-plano-aislado-sobre-fondo-blanco-s%C3%ADmbolo-de-usuario-ilustraci%C3%B3n-vectorial.jpg?s=612x612&w=0&k=20&c=grBa1KTwfoWBOqu1n0ewyRXQnx59bNHtHjvbsFc82gk="
              alt="Descripción del avatar"
              size="medium"
            />
            <Typography variant="h2">Logo 2</Typography>
          </section>

          <section
            style={{
              display: 'flex',
              gap: 32,
            }}
          >
            <section
              style={{
                display: 'flex',
              }}
            >
              <Anchor href="https://www.example.com" variant="filled">
                Portafolio
              </Anchor>
              <Anchor href="https://www.example.com" variant="filled">
                Blog
              </Anchor>
              <Anchor href="https://www.example.com" variant="filled">
                About
              </Anchor>
            </section>
            <section
              style={{
                display: 'flex',
                gap: 12,
              }}
            >
              <div>
                <Typography variant="h3">Alexander Nova</Typography>
                <Typography variant="h6">Software Developer</Typography>
              </div>
              <Avatar
                src="https://www.w3schools.com/w3images/avatar2.png"
                alt="Descripción del avatar"
                size="small"
              />
            </section>
          </section>
        </nav>
      </article>

      <article
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          width: '100vw',
        }}
      >
      <div
        style={{
          padding: 100,
          display: 'flex',
          justifyContent:'space-evenly',
          gap: 32,
          width: 1024,
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
            />
            <Avatar
              src="https://media.istockphoto.com/id/1300845620/es/vector/icono-de-usuario-plano-aislado-sobre-fondo-blanco-s%C3%ADmbolo-de-usuario-ilustraci%C3%B3n-vectorial.jpg?s=612x612&w=0&k=20&c=grBa1KTwfoWBOqu1n0ewyRXQnx59bNHtHjvbsFc82gk="
              alt="Descripción del avatar"
              size="medium"
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
          <IconButton icon={FaBeer} variant="filled" />
        </section>

        <section>
          <Typography variant="h1">Anchors Buttons</Typography>
          <Anchor href="https://www.example.com" variant="default">
            Default Anchor
          </Anchor>
          <br />
          <Anchor href="https://www.example.com" variant="highlight">
            Highlight Anchor
          </Anchor>
          <br />
          <Anchor href="https://www.example.com" variant="filled">
            Filled Anchor
          </Anchor>
        </section>
      </div>
      </article>
    </>
  )
}
