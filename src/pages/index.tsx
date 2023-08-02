import Anchor from '@/components/atomic/atoms/anchor'
import Avatar from '@/components/atomic/atoms/avatar'
import Typography from '@/components/atomic/atoms/typography'
import Carousel from '@/components/atomic/molecules/carrusel/Carrusel'
import { DescriptionProject } from '@/components/atomic/molecules/descriptonproject/descpro'

import Card from '@/components/atomic/layouts/card'
import BannerProject from '@/components/atomic/organisms/bannerProject'
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
        <BannerProject />
      </article>
    </>
  )
}
