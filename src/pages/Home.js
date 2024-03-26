import Container from "react-bootstrap/Container"
import Button from "react-bootstrap/Button"
import { Link } from "react-router-dom"
function Home() {

  return (
    <Container className="my-4 d-flex align-items-center" style={{height: "70vh"}}>
        <div className="w-75 mx-auto">
          <p>Easily manage your budget with Budgetr</p>
          <h1 className="" style={{fontSize: "60px"}}>Choose your financial goal and achvieve it with Budgetr</h1>
          <Button as={Link} to={"/dashboard"} className="btn-bg mt-5 p-3 px-5">
                Get Started
          </Button>
        </div>
    </Container>
  )
}

export default Home
