import Button from '@/components/atomic/atoms/button'
import Typography from '@/components/atomic/atoms/typography'

export default function Home() {
  return (
    <div
      style={{
        padding: 100,
      }}
    >
      <h1>Buttons</h1> <hr />
      <Button>Normal Button</Button>
      <Button variant='disabled'>Disabled Button</Button>
      <Button variant='filled'>Filled</Button>

      <h1>Typography</h1> <hr />
      <div>
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
    </div>
  )
}
