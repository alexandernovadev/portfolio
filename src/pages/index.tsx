import Anchor from '@/components/atomic/atoms/anchor'
import Avatar from '@/components/atomic/atoms/avatar'
import Button from '@/components/atomic/atoms/button'
import IconButton from '@/components/atomic/atoms/buttonicon'
import Typography from '@/components/atomic/atoms/typography'
import Carousel from '@/components/atomic/molecules/carrusel/Carrusel'
import { FaBeer } from 'react-icons/fa'

export default function Home() {
  const images = [
    'https://images.unsplash.com/11/converse-fields.jpg?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1677&q=80',
    'https://images.unsplash.com/11/sky-rose.jpg?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
    'https://images.unsplash.com/12/till-the-cows-come-home.jpg?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
  ]

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
            flexDirection:'column',
            gap: 32,
            width: 1024,
          }}
        >
          <Carousel images={images} />

          <div>
            <h1>Hola</h1>
            <p>Como estas </p>
          </div>


        </div>
      </article>
    </>
  )
}
