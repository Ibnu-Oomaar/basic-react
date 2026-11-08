type SideProps = {
  name: string
  phone: string
  age: number
}

const Side = ({ name, phone, age }: SideProps) => {
  return (
    <div className="bg-amber-300 w-[20vw] h-screen">
      <p>Name: {name}</p>
      <p>Phone: {phone}</p>
      <p>Age: {age}</p>
    </div>
  )
}

export default Side